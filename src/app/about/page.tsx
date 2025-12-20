"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Award, Code, BookOpen, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".about-element", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, { scope: containerRef })

  const CONTACT_LINK = "https://solo.to/jlg-ps"

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-12 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Profile Sidebar */}
        <div className="lg:col-span-4 space-y-8 about-element">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center border border-white/10">
              <div className="text-8xl font-black text-white/10 select-none">AG</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <h2 className="text-2xl font-bold text-white">عبدالجليل قنيبر</h2>
                <p className="text-neon-cyan font-medium">مهندس أنظمة ومطور محتوى</p>
              </div>
            </div>
          </div>

          <Card className="bg-zinc-900/50 border-white/5 p-6 space-y-6">
            <div className="flex justify-center gap-4">
              <SocialButton icon={<Github className="size-5" />} href={CONTACT_LINK} />
              <SocialButton icon={<Linkedin className="size-5" />} href={CONTACT_LINK} />
              <SocialButton icon={<Mail className="size-5" />} href={CONTACT_LINK} />
            </div>
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 text-zinc-400">
                <Star className="size-4 text-yellow-500" />
                <span className="text-sm">متخصص في المناهج الجزائرية</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Code className="size-4 text-electric-blue" />
                <span className="text-sm">مطوّر أدوات تعليمية تقنية</span>
              </div>
            </div>
            <Link href={CONTACT_LINK} className="block w-full">
              <Button className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-6 rounded-xl transition-all">
                تواصل معي مباشرة
              </Button>
            </Link>
          </Card>
        </div>

        {/* Biography Content */}
        <div className="lg:col-span-8 space-y-12 about-element">
          <section className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              الرؤية خلف <br />
              <span className="text-neon-cyan">Math Companion Pro</span>
            </h1>
            <div className="h-1 w-24 bg-electric-blue rounded-full"></div>
            <p className="text-zinc-400 text-lg leading-relaxed text-justify">
              أنا عبدالجليل قنيبر، مهندس شغوف بالربط بين دقة الرياضيات وجمالية البرمجة. ولدت هذه المنصة من رؤية واضحة: التعليم لا يجب أن يكون مجرد تلقين، بل يجب أن يكون نظاماً متكاملاً يبني التفكير المنطقي لدى الطالب.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed text-justify">
              في Math Companion Pro، قمت بتطوير أدوات تفاعلية تتيح للطلبة رؤية الجمال الرياضي خلف المعادلات، وفهم القوانين الفيزيائية كنماذج حية للمستقبل المهني في الطب، الهندسة، والأمن السيبراني.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Award className="size-6 text-neon-cyan" />}
              title="الخبرة الأكاديمية"
              desc="تحليل شامل للمناهج الجزائرية (2AS & 3AS) مع التركيز على متطلبات البكالوريا."
            />
            <FeatureCard 
              icon={<BookOpen className="size-6 text-electric-blue" />}
              title="المنهجية المبتكرة"
              desc="تحويل الدروس الجافة إلى تجارب بصرية وتحديات منطقية تحاكي الأولمبيادات."
            />
          </div>

          <section className="p-10 rounded-3xl bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20">
            <h3 className="text-2xl font-bold text-white mb-4">رسالة إلى الطلبة</h3>
            <p className="text-zinc-300 italic leading-relaxed">
              "النجاح في البكالوريا هو خطوة أولى، لكن التميز الحقيقي يبدأ عندما تدرك أن كل دالة تدرسها وكل قانون فيزيائي تفهمه هو سلاح في يدك لتبني به عالم الغد."
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 text-zinc-400 hover:text-neon-cyan transition-all">
      {icon}
    </Button>
  )
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
      <div className="mb-4">{icon}</div>
      <h4 className="text-white font-bold mb-2">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
