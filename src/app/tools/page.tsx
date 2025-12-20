"use client"

import React, { useState, useEffect, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as math from "mathjs"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Plus, Trash2, Calculator, Info, Search, RefreshCw, X, Atom, Sigma, Box, Zap, Activity, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const COLORS = ["#00f3ff", "#007BFF", "#8A2BE2", "#FF00FF", "#00FF7F"]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">بوابة الأدوات التفاعلية</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">مختبر رقمي متكامل للتحليل الرياضي والمحاكاة الفيزيائية بمعايير احترافية.</p>
      </header>

      <Tabs defaultValue="graphing" className="space-y-12">
        <TabsList className="bg-zinc-900/50 border border-white/5 p-1 h-14 rounded-2xl flex w-fit mx-auto overflow-x-auto overflow-y-hidden">
          <TabsTrigger value="graphing" className="rounded-xl px-8 data-[state=active]:bg-electric-blue data-[state=active]:text-white whitespace-nowrap">
            <Calculator className="size-4 ml-2" />
            المحرك الرسومي
          </TabsTrigger>
          <TabsTrigger value="physics" className="rounded-xl px-8 data-[state=active]:bg-electric-blue data-[state=active]:text-white whitespace-nowrap">
            <Zap className="size-4 ml-2" />
            المحاكي الفيزيائي
          </TabsTrigger>
          <TabsTrigger value="complex" className="rounded-xl px-8 data-[state=active]:bg-electric-blue data-[state=active]:text-white whitespace-nowrap">
            <Box className="size-4 ml-2" />
            محلل المركبة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="graphing">
          <GraphingTool />
        </TabsContent>

        <TabsContent value="physics">
          <PhysicsSimulator />
        </TabsContent>

        <TabsContent value="complex">
          <ComplexNumberTool />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function GraphingTool() {
  const [functions, setFunctions] = useState([
    { id: "1", expression: "x^2", color: COLORS[0], visible: true },
    { id: "2", expression: "2x + 1", color: COLORS[1], visible: true },
  ])
  const [range, setRange] = useState({ min: -10, max: 10, step: 0.2 })
  const [analysisResults, setAnalysisResults] = useState<any[]>([])

  const plotData = useMemo(() => {
    const labels: number[] = []
    for (let x = range.min; x <= range.max; x += range.step) {
      labels.push(Number(x.toFixed(2)))
    }

    const datasets = functions
      .filter((f) => f.visible && f.expression)
      .map((f) => {
        const data: (number | null)[] = []
        try {
          const compiled = math.compile(f.expression)
          labels.forEach((x) => {
            try {
              const val = compiled.evaluate({ x })
              data.push(typeof val === "number" && isFinite(val) ? val : null)
            } catch (e) {
              data.push(null)
            }
          })
        } catch (e) {
          console.error("Compile error", e)
        }

        return {
          label: `f(x) = ${f.expression}`,
          data,
          borderColor: f.color,
          backgroundColor: `${f.color}10`,
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.4,
          fill: true,
        }
      })

    return { labels, datasets }
  }, [functions, range])

  const runAnalysis = () => {
    const results: any[] = []
    functions.forEach(f => {
      if (!f.expression) return
      try {
        const deriv = math.derivative(f.expression, 'x').toString()
        const deriv2 = math.derivative(deriv, 'x').toString()
        results.push({
          id: f.id,
          expr: f.expression,
          deriv,
          deriv2,
          color: f.color
        })
      } catch (e) {}
    })
    setAnalysisResults(results)
  }

  useEffect(() => {
    const timer = setTimeout(runAnalysis, 500)
    return () => clearTimeout(timer)
  }, [functions])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 space-y-6">
        <Card className="bg-zinc-900/50 border-white/5">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Sigma className="size-5 text-neon-cyan" />
              مدخلات الدوال
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {functions.map(f => (
              <div key={f.id} className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex gap-2">
                  <Input 
                    value={f.expression} 
                    onChange={e => setFunctions(prev => prev.map(item => item.id === f.id ? {...item, expression: e.target.value} : item))}
                    className="bg-black border-white/10 text-white"
                    placeholder="مثال: x^2 + 2x + 1"
                  />
                  <Button size="icon" variant="ghost" className="text-zinc-500 hover:text-red-500" onClick={() => setFunctions(prev => prev.filter(item => item.id !== f.id))}>
                    <Trash2 className="size-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full" style={{ backgroundColor: f.color }} />
                  <span className="text-[10px] text-zinc-500 uppercase font-mono">Channel {f.id}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-dashed border-white/10 hover:border-neon-cyan/50 text-zinc-400" onClick={() => setFunctions([...functions, { id: Math.random().toString(36).substr(2, 4), expression: "", color: COLORS[functions.length % COLORS.length], visible: true }])}>
              <Plus className="size-4 ml-2" />
              إضافة دالة جديدة
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-white/5">
          <CardHeader>
            <CardTitle className="text-white text-lg">التحليل الآلي</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysisResults.map(res => (
              <div key={res.id} className="p-3 rounded-lg bg-black/20 border-r-2" style={{ borderRightColor: res.color }}>
                <p className="text-xs text-zinc-500 mb-1">المشتقة الأولى f'(x):</p>
                <code className="text-sm text-neon-cyan block mb-2">{res.deriv}</code>
                <p className="text-xs text-zinc-500 mb-1">المشتقة الثانية f''(x):</p>
                <code className="text-sm text-electric-blue block">{res.deriv2}</code>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-8">
        <Card className="bg-zinc-900/50 border-white/5 h-[600px] p-6 relative overflow-hidden group">
          <div className="absolute top-4 right-6 flex gap-2 z-10">
            <Badge variant="outline" className="bg-black/50 backdrop-blur border-white/10 text-zinc-400 font-mono">Grid: Active</Badge>
            <Badge variant="outline" className="bg-black/50 backdrop-blur border-white/10 text-neon-cyan font-mono">Live Sync</Badge>
          </div>
          <Line 
            data={plotData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  titleColor: '#00f3ff',
                  bodyColor: '#fff',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 1,
                  padding: 12,
                  cornerRadius: 8,
                }
              },
              scales: { 
                x: { 
                  grid: { color: "rgba(255,255,255,0.03)" },
                  ticks: { color: "#555" }
                }, 
                y: { 
                  grid: { color: "rgba(255,255,255,0.03)" },
                  ticks: { color: "#555" }
                } 
              } 
            }} 
          />
        </Card>
      </div>
    </div>
  )
}

function PhysicsSimulator() {
  const [mass, setMass] = useState(5)
  const [height, setHeight] = useState(20)
  const [velocity, setVelocity] = useState(10)

  const g = 9.81
  const kinetic = 0.5 * mass * velocity * velocity
  const potential = mass * g * height
  const mechanical = kinetic + potential

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white">
      <Card className="lg:col-span-4 bg-zinc-900/50 border-white/5 p-8 space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Target className="size-5 text-neon-cyan" />
            متغيرات الجملة
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-500">
                <span>الكتلة (m)</span>
                <span>{mass} kg</span>
              </div>
              <input type="range" min="0.1" max="50" step="0.1" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full accent-electric-blue bg-white/5 rounded-lg appearance-none h-1.5" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-500">
                <span>الارتفاع (h)</span>
                <span>{height} m</span>
              </div>
              <input type="range" min="0" max="100" step="1" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full accent-neon-cyan bg-white/5 rounded-lg appearance-none h-1.5" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-500">
                <span>السرعة (v)</span>
                <span>{velocity} m/s</span>
              </div>
              <input type="range" min="0" max="50" step="0.5" value={velocity} onChange={e => setVelocity(Number(e.target.value))} className="w-full accent-purple-500 bg-white/5 rounded-lg appearance-none h-1.5" />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-3">
            <Activity className="size-4 text-green-500" />
            <span className="text-sm text-zinc-400">التسارع الأرضي (g): 9.81 m/s²</span>
          </div>
        </div>
      </Card>

      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <EnergyCard title="الطاقة الحركية (Ec)" value={kinetic} unit="J" color="border-electric-blue" sub="0.5 * m * v²" />
          <EnergyCard title="الطاقة الكامنة (Epp)" value={potential} unit="J" color="border-neon-cyan" sub="m * g * h" />
          <Card className="p-8 bg-white/5 border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <p className="text-zinc-500 text-xs mb-2 uppercase tracking-widest">الطاقة الميكانيكية الكلية (Em)</p>
            <h4 className="text-4xl font-black text-white">{mechanical.toFixed(2)} <span className="text-lg font-normal text-zinc-500">J</span></h4>
          </Card>
        </div>

        <Card className="bg-black/40 border-white/5 p-8 flex flex-col justify-center items-center">
          <div className="relative w-full h-full flex items-end justify-center py-12">
            {/* Visual Representation */}
            <div className="absolute bottom-0 w-full h-1 bg-white/10 rounded-full" />
            <motion.div 
              className="absolute bg-gradient-to-t from-electric-blue to-neon-cyan rounded-full blur-xl opacity-20"
              animate={{ 
                height: mechanical / 10,
                width: mechanical / 10,
                bottom: height * 2
              }}
            />
            <motion.div 
              className="relative size-12 rounded-2xl bg-gradient-to-br from-electric-blue to-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.3)] flex items-center justify-center font-bold text-xs"
              animate={{ bottom: height * 4 }}
              transition={{ type: "spring", damping: 15 }}
            >
              {mass}kg
            </motion.div>
          </div>
          <p className="text-center text-zinc-500 text-xs mt-4">تمثيل مرئي لموضع الجسم بالنسبة للارتفاع h</p>
        </Card>
      </div>
    </div>
  )
}

function EnergyCard({ title, value, unit, color, sub }: any) {
  return (
    <Card className={`p-8 bg-zinc-900/50 border-l-4 ${color}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">{title}</p>
          <p className="text-[10px] text-zinc-600 font-mono">{sub}</p>
        </div>
      </div>
      <h4 className="text-3xl font-bold text-white">{value.toFixed(2)} <span className="text-sm font-normal text-zinc-500">{unit}</span></h4>
    </Card>
  )
}

function ComplexNumberTool() {
  const [real, setReal] = useState(1)
  const [imag, setImag] = useState(1)

  const modulus = Math.sqrt(real*real + imag*imag)
  const argumentRad = Math.atan2(imag, real)
  const argumentDeg = argumentRad * (180 / Math.PI)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white">
      <Card className="lg:col-span-4 bg-zinc-900/50 border-white/5 p-8 space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold">إدخال العدد المركب (z)</h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-zinc-500">الجزء الحقيقي (Re)</label>
              <Input type="number" value={real} onChange={e => setReal(Number(e.target.value))} className="bg-black border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-500">الجزء التخيلي (Im)</label>
              <Input type="number" value={imag} onChange={e => setImag(Number(e.target.value))} className="bg-black border-white/10" />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-black border border-white/5">
          <p className="text-xs text-zinc-500 mb-2">الشكل الجبري:</p>
          <code className="text-2xl font-black text-white">
            z = {real} {imag >= 0 ? '+' : ''} {imag}i
          </code>
        </div>
      </Card>

      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="p-8 bg-zinc-900/50 border-white/5 border-r-4 border-purple-500">
            <p className="text-zinc-500 text-xs mb-2">الطويلة (Modulus) |z|</p>
            <h4 className="text-4xl font-black text-white">{modulus.toFixed(4)}</h4>
          </Card>
          <Card className="p-8 bg-zinc-900/50 border-white/5 border-r-4 border-amber-500">
            <p className="text-zinc-500 text-xs mb-2">العمدة (Argument) θ</p>
            <h4 className="text-4xl font-black text-white">{argumentDeg.toFixed(2)}°</h4>
            <p className="text-xs text-zinc-400 mt-2 font-mono">({argumentRad.toFixed(4)} rad)</p>
          </Card>
          <Card className="p-8 bg-electric-blue/10 border-electric-blue/20">
            <p className="text-electric-blue text-xs font-bold mb-4 uppercase">الشكل الأسي (Exponential Form)</p>
            <div className="flex items-center gap-2 text-2xl font-mono text-white">
              <span>{modulus.toFixed(2)}</span>
              <span className="text-electric-blue">e</span>
              <sup className="text-sm">i({argumentRad.toFixed(2)})</sup>
            </div>
          </Card>
        </div>

        <Card className="bg-black/40 border-white/5 p-8 flex items-center justify-center relative min-h-[300px]">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-full h-[1px] bg-white" />
            <div className="h-full w-[1px] bg-white" />
          </div>
          {/* Vector Visualization */}
          <div className="relative size-48">
             <motion.div 
               className="absolute bottom-1/2 left-1/2 h-[2px] bg-gradient-to-r from-electric-blue to-neon-cyan origin-left"
               style={{ 
                 width: Math.min(modulus * 20, 100),
                 rotate: -argumentDeg
               }}
             />
             <div className="absolute bottom-1/2 left-1/2 size-2 rounded-full bg-white transform -translate-x-1/2 translate-y-1/2 z-10" />
          </div>
          <p className="absolute bottom-4 text-[10px] text-zinc-600">تمثيل شعاعي في المستوي المركب</p>
        </Card>
      </div>
    </div>
  )
}
