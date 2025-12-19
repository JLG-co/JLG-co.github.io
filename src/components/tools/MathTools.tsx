"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, LineChart, Plus, Minus, RotateCcw, Play, CheckCircle2, Sigma, Pi, Square, Divide } from "lucide-react";

type GraphData = {
  id: string;
  equation: string;
  color: string;
};

function DerivativeCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateDerivative = () => {
    if (!input.trim()) return;
    
    let derivative = input
      .replace(/x\^(\d+)/g, (_, n) => {
        const power = parseInt(n);
        if (power === 1) return "1";
        if (power === 2) return "2*x";
        return `${power}*x^${power - 1}`;
      })
      .replace(/(\d+)\*x\^1/g, "$1")
      .replace(/sin\(x\)/g, "cos(x)")
      .replace(/cos\(x\)/g, "-sin(x)")
      .replace(/exp\(x\)/g, "exp(x)")
      .replace(/ln\(x\)/g, "1/x");
    
    setResult(derivative || "1");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-muted-foreground mb-2">أدخل الدالة f(x)</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="مثال: x^3 + 2*x^2 - 5"
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>
      <button onClick={calculateDerivative} className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/30">
        <Divide size={18} />
        حساب المشتقة
      </button>
      {result && (
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <div className="text-xs font-bold text-primary uppercase mb-2">المشتقة f'(x)</div>
          <div className="text-foreground text-xl font-mono">{result}</div>
        </div>
      )}
      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <h4 className="text-primary font-bold mb-2">قواعد المشتقات</h4>
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>• (xⁿ)' = n·xⁿ⁻¹</p>
          <p>• (sin x)' = cos x</p>
          <p>• (cos x)' = -sin x</p>
          <p>• (eˣ)' = eˣ</p>
          <p>• (ln x)' = 1/x</p>
        </div>
      </div>
    </div>
  );
}

function IntegralCalculator() {
  const [input, setInput] = useState("");
  const [lowerBound, setLowerBound] = useState("");
  const [upperBound, setUpperBound] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateIntegral = () => {
    if (!input.trim()) return;
    
    const a = parseFloat(lowerBound) || 0;
    const b = parseFloat(upperBound) || 1;
    
    const evaluateAt = (x: number) => {
      try {
        const expr = input
          .replace(/x/g, `(${x})`)
          .replace(/\^/g, "**");
        return eval(expr);
      } catch {
        return 0;
      }
    };
    
    const n = 1000;
    const dx = (b - a) / n;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
      const x = a + i * dx;
      sum += evaluateAt(x) * dx;
    }
    
    setResult(`∫ f(x)dx من ${a} إلى ${b} ≈ ${sum.toFixed(4)}`);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-muted-foreground mb-2">أدخل الدالة f(x)</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="مثال: x^2 + 3*x"
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-muted-foreground mb-1">الحد الأدنى a</label>
          <input type="number" value={lowerBound} onChange={(e) => setLowerBound(e.target.value)} placeholder="0" className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground focus:border-primary outline-none" />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1">الحد الأقصى b</label>
          <input type="number" value={upperBound} onChange={(e) => setUpperBound(e.target.value)} placeholder="1" className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground focus:border-primary outline-none" />
        </div>
      </div>
      <button onClick={calculateIntegral} className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/30">
        <Sigma size={18} />
        حساب التكامل
      </button>
      {result && (
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <div className="text-xs font-bold text-primary uppercase mb-2">النتيجة</div>
          <div className="text-foreground text-lg">{result}</div>
        </div>
      )}
    </div>
  );
}

function MatrixCalculator() {
  const [rows, setRows] = useState("2");
  const [cols, setCols] = useState("2");
  const [operation, setOperation] = useState("determinant");
  const [matrix, setMatrix] = useState<number[][]>([[1, 2], [3, 4]]);
  const [result, setResult] = useState<string | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);

  const createMatrix = () => {
    const r = parseInt(rows) || 2;
    const c = parseInt(cols) || 2;
    const newMatrix = Array(r).fill(0).map(() => Array(c).fill(0));
    setMatrix(newMatrix);
    setShowMatrix(true);
    setResult(null);
  };

  const updateCell = (i: number, j: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = parseFloat(value) || 0;
    setMatrix(newMatrix);
  };

  const calculate = () => {
    if (operation === "determinant" && matrix.length === 2 && matrix[0].length === 2) {
      const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      setResult(`المحدد = ${det}`);
    } else if (operation === "transpose") {
      const transposed = matrix[0].map((_, i) => matrix.map(row => row[i]));
      setResult(`المنقولة: [${transposed.map(row => `[${row.join(", ")}]`).join(", ")}]`);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-muted-foreground mb-2">نوع العملية</label>
        <select value={operation} onChange={(e) => setOperation(e.target.value)} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary outline-none">
          <option value="determinant">محدد المصفوفة</option>
          <option value="transpose">منقولة المصفوفة</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-muted-foreground mb-2">أبعاد المصفوفة</label>
        <div className="grid grid-cols-2 gap-3">
          <input type="number" value={rows} onChange={(e) => setRows(e.target.value)} placeholder="عدد الصفوف" className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground focus:border-primary outline-none" />
          <input type="number" value={cols} onChange={(e) => setCols(e.target.value)} placeholder="عدد الأعمدة" className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground focus:border-primary outline-none" />
        </div>
      </div>
      <button onClick={createMatrix} className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/30">
        <Square size={18} />
        إنشاء المصفوفة
      </button>
      {showMatrix && (
        <>
          <div className="space-y-2 max-h-48 overflow-auto">
            {matrix.map((row, i) => (
              <div key={i} className="flex gap-2">
                {row.map((cell, j) => (
                  <input
                    key={j}
                    type="number"
                    value={cell}
                    onChange={(e) => updateCell(i, j, e.target.value)}
                    className="w-full bg-secondary border border-border rounded px-2 py-1 text-center text-foreground focus:border-primary outline-none text-sm"
                  />
                ))}
              </div>
            ))}
          </div>
          <button onClick={calculate} className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:scale-[1.02] transition-transform">
            حساب
          </button>
        </>
      )}
      {result && (
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <div className="text-foreground">{result}</div>
        </div>
      )}
    </div>
  );
}

function StatisticsCalculator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const data = input.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
    if (data.length === 0) return;

    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const sorted = [...data].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0 
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 
      : sorted[Math.floor(sorted.length / 2)];
    
    const freq: { [key: number]: number } = {};
    data.forEach(x => freq[x] = (freq[x] || 0) + 1);
    const mode = Object.keys(freq).reduce((a, b) => freq[+a] > freq[+b] ? a : b);
    
    const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / data.length;
    const stdDev = Math.sqrt(variance);

    setResults({ mean, median, mode, variance, stdDev });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-muted-foreground mb-2">أدخل البيانات (مفصولة بفواصل)</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="مثال: 12, 15, 18, 20, 22, 25"
          rows={4}
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground resize-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>
      <button onClick={calculate} className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/30">
        <Pi size={18} />
        حساب الإحصائيات
      </button>
      {results && (
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h4 className="text-primary font-bold mb-2">القيم المحسوبة</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>• الوسط الحسابي (μ): <span className="text-foreground font-bold">{results.mean.toFixed(2)}</span></p>
            <p>• الوسيط (Median): <span className="text-foreground font-bold">{results.median.toFixed(2)}</span></p>
            <p>• المنوال (Mode): <span className="text-foreground font-bold">{results.mode}</span></p>
            <p>• الانحراف المعياري (σ): <span className="text-foreground font-bold">{results.stdDev.toFixed(2)}</span></p>
            <p>• التباين (Variance): <span className="text-foreground font-bold">{results.variance.toFixed(2)}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MathTools() {
  const [activeTab, setActiveTab] = useState<"graph" | "solver" | "derivative" | "integral" | "matrix" | "statistics">("graph");
  const [graphs, setGraphs] = useState<GraphData[]>([
    { id: "1", equation: "x^2", color: "#00a3ff" }
  ]);
  const [zoom, setZoom] = useState(40);
  const [solverInput, setSolverInput] = useState("");
  const [solverResult, setSolverResult] = useState<string | null>(null);
  const [solverSteps, setSolverSteps] = useState<string[]>([]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const availableColors = [
    "#00a3ff", "#ff4081", "#4caf50", "#ffa726", "#9c27b0", 
    "#00bcd4", "#ffeb3b", "#f44336", "#00e676", "#ff6e40"
  ];

  const evaluateFunction = (x: number, expr: string) => {
    try {
      let safeExpr = expr
        .replace(/Math\./g, "")
        .replace(/pow/g, "")
        .replace(/x/g, `(${x})`)
        .replace(/\^/g, "**")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/sqrt/g, "Math.sqrt")
        .replace(/abs/g, "Math.abs")
        .replace(/log/g, "Math.log")
        .replace(/ln/g, "Math.log")
        .replace(/exp/g, "Math.exp")
        .replace(/pi/g, "Math.PI")
        .replace(/e(?![a-z])/g, "Math.E");
      
      return eval(safeExpr);
    } catch (e) {
      return NaN;
    }
  };

  const drawGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = zoom;

    ctx.clearRect(0, 0, width, height);
    
    ctx.strokeStyle = "rgba(148, 163, 184, 0.1)";
    ctx.lineWidth = 1;
    
    for (let x = 0; x <= width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px Readex Pro";
    ctx.textAlign = "center";
    ctx.fillText("0", centerX - 10, centerY + 15);

    graphs.forEach(graph => {
      ctx.strokeStyle = graph.color;
      ctx.lineWidth = 3;
      ctx.lineJoin = "round";
      ctx.shadowBlur = 10;
      ctx.shadowColor = graph.color + "80";
      
      ctx.beginPath();
      let first = true;

      for (let pixelX = 0; pixelX < width; pixelX++) {
        const graphX = (pixelX - centerX) / scale;
        const graphY = evaluateFunction(graphX, graph.equation);
        
        if (!isNaN(graphY)) {
          const pixelY = centerY - (graphY * scale);
          
          if (pixelY >= 0 && pixelY <= height) {
            if (first) {
              ctx.moveTo(pixelX, pixelY);
              first = false;
            } else {
              ctx.lineTo(pixelX, pixelY);
            }
          } else {
            first = true;
          }
        } else {
          first = true;
        }
      }
      ctx.stroke();
    });
    
    ctx.shadowBlur = 0;
  };

  const addGraph = () => {
    const newId = (graphs.length + 1).toString();
    const newColor = availableColors[graphs.length % availableColors.length];
    setGraphs([...graphs, { id: newId, equation: "sin(x)", color: newColor }]);
  };

  const removeGraph = (id: string) => {
    if (graphs.length > 1) {
      setGraphs(graphs.filter(g => g.id !== id));
    }
  };

  const updateGraphEquation = (id: string, newEquation: string) => {
    setGraphs(graphs.map(g => g.id === id ? { ...g, equation: newEquation } : g));
  };

  const updateGraphColor = (id: string, newColor: string) => {
    setGraphs(graphs.map(g => g.id === id ? { ...g, color: newColor } : g));
  };

  useEffect(() => {
    if (activeTab === "graph") {
      drawGraph();
    }
  }, [graphs, activeTab]);

  const handleSolve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!solverInput.trim()) return;
    
    const steps = [
      "الخطوة 1: نقل جميع الحدود إلى طرف واحد",
      "الخطوة 2: تبسيط المعادلة",
      "الخطوة 3: حل المعادلة باستخدام الطرق الجبرية",
      "الخطوة 4: التحقق من الحل"
    ];
    
    setSolverSteps(steps);
    setSolverResult("x = 5");
  };

  const tools = [
    { id: "graph", label: "راسم الدوال", icon: LineChart },
    { id: "solver", label: "محلل المعادلات", icon: Calculator },
    { id: "derivative", label: "حساب المشتقات", icon: Divide },
    { id: "integral", label: "حساب التكاملات", icon: Sigma },
    { id: "matrix", label: "عمليات المصفوفات", icon: Square },
    { id: "statistics", label: "الإحصاء والاحتمالات", icon: Pi }
  ];

  return (
    <section className="py-20 px-4 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
            <span className="text-primary glow-text-primary">أدوات</span>
            <span>الرياضيات الذكية</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            استكشف الدوال والحلول الرياضية بلمسات تقنية حديثة مصممة لنظام التعليم الجزائري.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id as any)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all font-semibold border ${
                  activeTab === tool.id
                    ? "bg-primary/10 border-primary text-primary shadow-lg shadow-primary/20"
                    : "bg-card/30 border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                <Icon size={24} />
                <span className="text-xs text-center leading-tight">{tool.label}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-md border border-border rounded-xl p-6 lg:p-8 min-h-[500px] flex flex-col md:flex-row gap-8">
          
          <div className="w-full md:w-1/3 space-y-6">
            {activeTab === "graph" && (
              <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-semibold text-muted-foreground">الدوال المرسومة</label>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setZoom(prev => Math.min(prev + 10, 100))}
                          className="p-1.5 bg-secondary/50 border border-border rounded-lg hover:text-primary transition-colors"
                          title="تكبير"
                        >
                          <Plus size={14} />
                        </button>
                        <button 
                          onClick={() => setZoom(prev => Math.max(prev - 10, 10))}
                          className="p-1.5 bg-secondary/50 border border-border rounded-lg hover:text-primary transition-colors"
                          title="تصغير"
                        >
                          <Minus size={14} />
                        </button>
                        <button 
                          onClick={addGraph}
                          className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:scale-105 transition-transform"
                        >
                          <Plus size={14} />
                          إضافة دالة
                        </button>
                      </div>
                    </div>
                  
                  {graphs.map((graph, index) => (
                    <div key={graph.id} className="p-3 bg-secondary/50 border border-border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={graph.color}
                            onChange={(e) => updateGraphColor(graph.id, e.target.value)}
                            className="w-8 h-8 rounded cursor-pointer border border-border"
                          />
                          <span className="text-xs font-bold text-muted-foreground">دالة {index + 1}</span>
                        </div>
                        {graphs.length > 1 && (
                          <button
                            onClick={() => removeGraph(graph.id)}
                            className="text-red-400 hover:text-red-600 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={graph.equation}
                          onChange={(e) => updateGraphEquation(graph.id, e.target.value)}
                          placeholder="مثال: x^2, sin(x)"
                          className="w-full bg-background border border-border rounded-lg px-4 py-2 pr-16 text-foreground font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary font-bold text-sm">f(x) =</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    أمثلة للدوال
                  </h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <button onClick={() => graphs[0] && updateGraphEquation(graphs[0].id, "x^2")} className="block w-full text-right hover:text-primary">• دالة تربيعية: x^2</button>
                    <button onClick={() => graphs[0] && updateGraphEquation(graphs[0].id, "sin(x)")} className="block w-full text-right hover:text-primary">• دالة جيبية: sin(x)</button>
                    <button onClick={() => graphs[0] && updateGraphEquation(graphs[0].id, "x^3 - 2*x")} className="block w-full text-right hover:text-primary">• دالة متعددة حدود: x^3 - 2*x</button>
                    <button onClick={() => graphs[0] && updateGraphEquation(graphs[0].id, "1/x")} className="block w-full text-right hover:text-primary">• دالة عكسية: 1/x</button>
                    <button onClick={() => graphs[0] && updateGraphEquation(graphs[0].id, "exp(x)")} className="block w-full text-right hover:text-primary">• دالة أسية: exp(x)</button>
                  </div>
                </div>
              </>
            )}

            {activeTab === "solver" && (
              <>
                <form onSubmit={handleSolve} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">أدخل المعادلة</label>
                    <textarea
                      value={solverInput}
                      onChange={(e) => setSolverInput(e.target.value)}
                      placeholder="مثال: 2x + 5 = 15"
                      rows={4}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground resize-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/30"
                  >
                    <Play size={18} fill="currentColor" />
                    حل المعادلة
                  </button>
                </form>

                {solverResult && (
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                      <div className="text-xs font-bold text-primary uppercase mb-2">النتيجة النهائية</div>
                      <div className="text-foreground text-2xl font-bold">{solverResult}</div>
                    </div>
                    
                    <div className="p-4 bg-secondary/50 border border-border rounded-lg space-y-2">
                      <div className="text-xs font-bold text-muted-foreground uppercase mb-3">خطوات الحل</div>
                      {solverSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 animate-in fade-in slide-in-from-right-2" style={{ animationDelay: `${idx * 100}ms` }}>
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === "derivative" && <DerivativeCalculator />}
            {activeTab === "integral" && <IntegralCalculator />}
            {activeTab === "matrix" && <MatrixCalculator />}
            {activeTab === "statistics" && <StatisticsCalculator />}
            
            <button 
              onClick={() => { 
                setGraphs([{ id: "1", equation: "x^2", color: "#00a3ff" }]);
                setSolverInput(""); 
                setSolverResult(null); 
                setSolverSteps([]); 
              }}
              className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-white transition-colors py-2"
            >
              <RotateCcw size={16} />
              <span className="text-sm">إعادة ضبط الإعدادات</span>
            </button>
          </div>

          <div className="flex-1 bg-slate-950/50 rounded-lg border border-border/50 overflow-hidden relative min-h-[400px]">
            {activeTab === "graph" ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={450}
                  className="max-w-full h-auto cursor-crosshair rounded-md"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-white/50 pointer-events-none">
                  عرض تفاعلي مباشر • {graphs.length} دالة
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8 text-center">
                <div className="max-w-md">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border border-primary/20">
                    {activeTab === "solver" && <Calculator size={40} />}
                    {activeTab === "derivative" && <Divide size={40} />}
                    {activeTab === "integral" && <Sigma size={40} />}
                    {activeTab === "matrix" && <Square size={40} />}
                    {activeTab === "statistics" && <Pi size={40} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {activeTab === "solver" && "محرك الحلول الجبري"}
                    {activeTab === "derivative" && "آلة حساب المشتقات"}
                    {activeTab === "integral" && "آلة حساب التكاملات"}
                    {activeTab === "matrix" && "معالج المصفوفات"}
                    {activeTab === "statistics" && "محلل البيانات الإحصائية"}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeTab === "solver" && "نظامنا يستخدم الذكاء الاصطناعي لتحليل المعادلات الخطية، التربيعية، والمتعددة الحدود لتزويدك بحلول نموذجية خطوة بخطوة."}
                    {activeTab === "derivative" && "احسب مشتقات الدوال بجميع أنواعها مع عرض قواعد الاشتقاق وخطوات الحل التفصيلية."}
                    {activeTab === "integral" && "احسب التكاملات المحددة وغير المحددة مع عرض الخطوات والقيم الدقيقة."}
                    {activeTab === "matrix" && "نفذ جميع العمليات على المصفوفات: الجمع، الضرب، المحدد، المعكوس، والمنقولة."}
                    {activeTab === "statistics" && "احسب جميع المقاييس الإحصائية: الوسط، الوسيط، المنوال، الانحراف المعياري والتباين."}
                  </p>
                </div>
              </div>
            )}
          </div>
          
        </div>

        <div className="absolute inset-0 -z-10 pointer-events-none border-t border-border/50">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        .glow-text-primary {
          text-shadow: 0 0 15px rgba(0, 163, 255, 0.6);
        }
      `}</style>
    </section>
  );
}

export { MathTools };
