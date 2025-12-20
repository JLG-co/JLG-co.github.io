"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { curriculum } from "@/data/curriculum"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ChevronLeft, GraduationCap, Atom } from "lucide-react"
import Link from "next/link"

export default function LessonsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".lesson-card", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-12 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">المناهج التعليمية المطورة</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">تصفح الدروس والوحدات التعليمية لمادة الرياضيات والفيزياء (2AS & 3AS)</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {curriculum.map((grade) => (
          <div key={grade.id} className="space-y-8">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
              <GraduationCap className="size-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white">{grade.title}</h2>
            </div>

            {grade.subjects.map((subject) => (
              <Card key={subject.id} className="bg-zinc-900/50 border-white/5 lesson-card overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-electric-blue/10 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-xl flex items-center gap-2">
                        {subject.id === "math" ? <BookOpen className="size-5" /> : <Atom className="size-5" />}
                        {subject.title}
                      </CardTitle>
                      <CardDescription>{subject.modules.length} وحدات تعليمية</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {subject.modules.map((module) => (
                      <Link 
                        key={module.id} 
                        href={`/lessons/${grade.id}/${subject.id}/${module.id}`}
                        className="group flex items-center justify-between p-4 rounded-xl bg-black border border-white/5 hover:border-neon-cyan/30 transition-all"
                      >
                        <span className="text-zinc-300 group-hover:text-white transition-colors">{module.title}</span>
                        <ChevronLeft className="size-4 text-zinc-600 group-hover:text-neon-cyan transition-all transform group-hover:-translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
