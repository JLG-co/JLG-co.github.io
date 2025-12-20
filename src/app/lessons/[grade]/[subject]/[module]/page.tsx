"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { curriculum } from "@/data/curriculum"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Brain, Lightbulb, Trophy, ArrowRight, ShieldCheck, Target, Layers, Calculator, Sparkles, Hash, Pi, Sigma, FunctionSquare } from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"

const MathOrnaments = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const symbols = containerRef.current?.querySelectorAll(".math-symbol")
    if (symbols) {
      symbols.forEach((symbol) => {
        gsap.to(symbol, {
          x: "random(-100, 100)",
          y: "random(-100, 100)",
          rotation: "random(-360, 360)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "none",
        })
      })
    }
  }, { scope: containerRef })

  const symbols = [
    { Icon: Pi, size: 24, top: "10%", left: "5%" },
    { Icon: Sigma, size: 32, top: "20%", left: "85%" },
    { Icon: FunctionSquare, size: 20, top: "60%", left: "2%" },
    { Icon: Hash, size: 28, top: "85%", left: "90%" },
    { Icon: Sparkles, size: 16, top: "45%", left: "95%" },
  ]

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {symbols.map((s, i) => (
        <div
          key={i}
          className="math-symbol absolute text-white/5 opacity-20"
          style={{ top: s.top, left: s.left }}
        >
          <s.Icon size={s.size} />
        </div>
      ))}
    </div>
  )
}

export default function ModulePage() {
  const params = useParams()
  const container = useRef<HTMLDivElement>(null)
  const gradeId = params.grade as string
  const subjectId = params.subject as string
  const moduleId = params.module as string

  const grade = curriculum.find(g => g.id === gradeId)
  const subject = grade?.subjects.find(s => s.id === subjectId)
  const module = subject?.modules.find(m => m.id === moduleId)

  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({})

  const toggleSolution = (lessonId: string, challengeIndex: number) => {
    const key = `${lessonId}-${challengeIndex}`
    setRevealedSolutions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  useGSAP(() => {
    gsap.from(".lesson-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power4.out"
    })
  }, { scope: container })

  if (!module) return <div className="text-white text-center py-20">الوحدة غير موجودة</div>

  return (
    <div ref={container} className="relative container mx-auto px-4 py-12 min-h-screen z-10">
      <MathOrnaments />
      
      <Link href="/lessons" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors group">
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        العودة للمناهج
      </Link>

      <header className="mb-12 relative">
        <div className="absolute -left-8 -top-8 size-32 bg-neon-cyan/10 blur-[100px] rounded-full" />
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          {module.title}
        </h1>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-400">
            {grade?.title}
          </span>
          <span className="size-1 rounded-full bg-white/20" />
          <span className="text-neon-cyan font-black tracking-widest text-sm uppercase">
            {subject?.title}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {module.lessons.map((lesson, lessonIdx) => (
          <motion.div 
            key={lesson.id} 
            className="lesson-card group relative"
          >
            {/* Background Accent Number */}
            <div className="absolute -right-4 -top-12 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors">
              {String(lessonIdx + 1).padStart(2, '0')}
            </div>

            <Card className="bg-zinc-900/40 backdrop-blur-xl border-white/5 overflow-hidden hover:border-neon-cyan/30 transition-all duration-500 shadow-2xl shadow-black">
              <CardHeader className="border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent p-8">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan font-black italic">
                    {lessonIdx + 1}
                  </div>
                  <CardTitle className="text-white text-3xl font-black">{lesson.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-invert max-w-none mb-16">
                  <div className="relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan to-transparent rounded-full opacity-50" />
                    <p className="text-zinc-300 text-xl leading-relaxed whitespace-pre-wrap pl-4">{lesson.content}</p>
                  </div>
                </div>

                {/* Special Content for Complex Numbers */}
                {lesson.specialContent && (
                  <div className="my-16 space-y-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {lesson.specialContent.pillars.map((pillar: string, i: number) => (
                        <div key={i} className="group/pillar relative p-6 rounded-3xl bg-zinc-900 border border-white/5 text-center hover:border-neon-cyan/50 transition-all duration-300">
                          <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover/pillar:opacity-100 transition-opacity rounded-3xl" />
                          <Layers className="size-8 text-neon-cyan mx-auto mb-4" />
                          <span className="text-white font-black text-xs uppercase tracking-widest">{pillar}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-4 text-amber-500">
                        <div className="size-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Target className="size-6" />
                        </div>
                        <h3 className="text-3xl font-black italic tracking-tighter underline decoration-amber-500/30 decoration-4 underline-offset-8">
                          Elite Challenges
                        </h3>
                      </div>

                      {lesson.specialContent.hardQuestions.map((hq: any, i: number) => (
                        <div key={i} className="relative p-10 rounded-[3rem] bg-zinc-900/80 border border-white/5 space-y-8 group/q hover:border-amber-500/30 transition-all shadow-xl">
                          <div className="absolute top-0 left-12 w-20 h-1 bg-amber-500/20 rounded-full" />
                          <div className="flex items-start gap-8">
                            <span className="text-5xl font-black text-white/5 group-hover/q:text-amber-500/20 transition-colors shrink-0">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-white text-2xl font-bold leading-tight pt-2">{hq.q}</p>
                          </div>
                          
                          <div className="pl-16">
                            <Button 
                              variant="outline" 
                              onClick={() => toggleSolution(`hq-${lesson.id}`, i)}
                              className="rounded-full border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black font-black px-8 py-6 h-auto text-lg transition-all active:scale-95"
                            >
                              {revealedSolutions[`hq-${lesson.id}-${i}`] ? "إخفاء التحليل" : "فك شفرة السؤال"}
                            </Button>

                            <AnimatePresence>
                              {revealedSolutions[`hq-${lesson.id}-${i}`] && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, y: 10 }}
                                  animate={{ height: "auto", opacity: 1, y: 0 }}
                                  exit={{ height: 0, opacity: 0, y: 10 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-8 p-8 rounded-3xl bg-black/60 backdrop-blur-md border border-amber-500/20 text-zinc-300 text-xl leading-relaxed whitespace-pre-wrap">
                                    <div className="flex items-center gap-3 text-amber-500 font-black mb-6 border-b border-amber-500/10 pb-4">
                                      <ShieldCheck className="size-6" />
                                      STRATEGIC BREAKDOWN:
                                    </div>
                                    {hq.s}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Standard Challenges Section */}
                {!lesson.specialContent && lesson.challenges.length > 0 && (
                  <div className="mt-16 space-y-8">
                    <div className="flex items-center gap-4 text-neon-cyan">
                      <div className="size-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                        <Calculator className="size-6" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-widest italic">Problem Set</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {lesson.challenges.map((challenge, idx) => (
                        <div key={idx} className="group/challenge relative p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-neon-cyan/20 transition-all duration-500 overflow-hidden">
                          <div className="absolute right-0 top-0 bottom-0 w-1 bg-neon-cyan/0 group-hover/challenge:bg-neon-cyan/40 transition-all" />
                          <div className="flex items-start gap-6">
                            <div className="size-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center shrink-0 group-hover/challenge:rotate-12 transition-transform">
                              <Brain className="size-5 text-neon-cyan" />
                            </div>
                            <div className="flex-1 space-y-6">
                              <p className="text-white text-lg font-bold leading-relaxed">{challenge.question}</p>
                              
                              <div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => toggleSolution(`${lesson.id}-challenge`, idx)}
                                  className="text-sm font-black text-zinc-500 hover:text-neon-cyan p-0 h-auto"
                                >
                                  {revealedSolutions[`${lesson.id}-challenge-${idx}`] ? "[ إغفاء الحل ]" : "[ عرض الحل النموذجي ]"}
                                </Button>

                                <AnimatePresence>
                                  {revealedSolutions[`${lesson.id}-challenge-${idx}`] && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-6 p-6 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/20 text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap relative">
                                        <div className="absolute top-4 left-4 opacity-10">
                                          <Lightbulb className="size-12 text-neon-cyan" />
                                        </div>
                                        <div className="flex items-center gap-2 text-neon-cyan font-black mb-4">
                                          البرهان الرياضي:
                                        </div>
                                        {challenge.solution}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Olympiad Questions Section */}
                {!lesson.specialContent && lesson.olympiadQuestions && lesson.olympiadQuestions.length > 0 && (
                  <div className="mt-16 space-y-8">
                    <div className="flex items-center gap-4 text-amber-500">
                      <div className="size-10 rounded-full bg-amber-500/10 flex items-center justify-center animate-pulse">
                        <Trophy className="size-6" />
                      </div>
                      <h3 className="text-3xl font-black italic tracking-tighter">Olympiad Level</h3>
                    </div>

                    {lesson.olympiadQuestions.map((oq, idx) => (
                      <div key={idx} className="relative p-10 rounded-[3rem] bg-zinc-900 border border-amber-500/10 space-y-8 group/oq hover:border-amber-500/40 transition-all shadow-2xl shadow-amber-500/5 overflow-hidden">
                        <div className="absolute -right-8 -bottom-8 text-8xl opacity-[0.03] group-hover/oq:opacity-[0.07] transition-opacity">🏆</div>
                        <div className="flex items-start gap-8 relative z-10">
                          <div className="size-14 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                            <Sparkles className="size-8 text-amber-500" />
                          </div>
                          <p className="text-white text-xl md:text-2xl font-black leading-tight pt-2">{oq.question}</p>
                        </div>
                        
                        <div className="pl-22 relative z-10">
                          <Button 
                            variant="outline" 
                            onClick={() => toggleSolution(`${lesson.id}-olympiad`, idx)}
                            className="rounded-full border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black font-black px-10 py-7 h-auto text-xl transition-all"
                          >
                            {revealedSolutions[`${lesson.id}-olympiad-${idx}`] ? "إغفاء الحل الذهبي" : "كشف السر الرياضي"}
                          </Button>

                          <AnimatePresence>
                            {revealedSolutions[`${lesson.id}-olympiad-${idx}`] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                                animate={{ height: "auto", opacity: 1, scale: 1 }}
                                exit={{ height: 0, opacity: 0, scale: 0.95 }}
                                className="overflow-hidden origin-top"
                              >
                                <div className="mt-8 p-10 rounded-3xl bg-black border border-amber-500/30 text-zinc-300 text-xl leading-relaxed whitespace-pre-wrap relative">
                                  <div className="flex items-center gap-3 text-amber-500 font-black mb-6 text-2xl">
                                    <ShieldCheck className="size-8" />
                                    المسار المنطقي:
                                  </div>
                                  {oq.solution}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
