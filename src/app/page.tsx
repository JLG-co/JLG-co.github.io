"use client"

import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Terminal } from "@/components/ui/Terminal"
import { MathParticles } from "@/components/ui/MathParticles"
import { Button } from "@/components/ui/button"
import { ChevronLeft, GraduationCap, Zap, Target, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
  }, { scope: containerRef })

  const CONTACT_LINK = "https://solo.to/jlg-ps"

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <MathParticles />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-bold uppercase tracking-[0.2em]"
          >
            <Zap className="size-3 fill-neon-cyan" />
            نظام المهندس عبدالجليل قنيبر المطور
          </motion.div>
          
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            الدقة الرياضية <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-cyan neon-glow">
              تبني التميز المهني
            </span>
          </h1>
          
          <p className="reveal text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            المنصة الشاملة لإتقان الرياضيات والفيزياء وفق أدق المعايير الأكاديمية. 
            صممت خصيصاً لطلبة 2AS و 3AS للعبور نحو التميز في بكالوريا 2027.
          </p>

          <div className="reveal mb-16">
            <Terminal />
          </div>

            <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/lessons">
                <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_20px_rgba(0,123,255,0.4)] transition-all transform hover:scale-105">
                  ابدأ رحلة التميز الآن
                  <ChevronLeft className="mr-2 size-5" />
                </Button>
              </Link>
              <Link href={CONTACT_LINK}>
                <Button size="lg" variant="outline" className="neon-border text-white hover:bg-white/5 h-14 px-8 rounded-xl transition-all">
                  تواصل مع المطور
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ركائز النظام التعليمي</h2>
            <div className="h-1 w-20 bg-neon-cyan rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CapabilityCard 
              icon={<GraduationCap className="size-8 text-neon-cyan" />}
              title="التحليل الرياضي"
              desc="دراسة الدوال، النهايات، الاشتقاقية، والتكامل بأسلوب هندسي احترافي."
            />
            <CapabilityCard 
              icon={<Target className="size-8 text-electric-blue" />}
              title="الفيزياء الحديثة"
              desc="الميكانيك، الكهرباء، والتحولات النووية من المبدأ إلى التطبيق."
            />
            <CapabilityCard 
              icon={<Zap className="size-8 text-yellow-400" />}
              title="أدوات ذكية"
              desc="محرك رسومي متطور لتحليل الدوال وحل المعادلات لحظياً."
            />
            <CapabilityCard 
              icon={<BookOpen className="size-8 text-green-400" />}
              title="تحديات كبرى"
              desc="مسائل بمستوى الأولمبياد لتدريب العقل على التفكير النقدي."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">هل أنت مستعد لتكون مهندس المستقبل؟</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            انضم إلى مئات الطلبة الذين اختاروا الدقة والاحترافية مع عبدالجليل قنيبر.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-bold h-16 px-12 text-xl rounded-2xl transition-transform hover:scale-105">
            سجل الآن مجاناً
          </Button>
        </div>
      </section>
    </div>
  )
}

function CapabilityCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-neon-cyan/30 transition-all group"
    >
      <div className="mb-6 p-4 rounded-xl bg-black border border-white/5 inline-block group-hover:neon-border transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}
