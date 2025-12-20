"use client"

import React from "react"
import Link from "next/link"
import { AGSeal } from "@/components/ui/AGSeal"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
    const CONTACT_LINK = "https://solo.to/jlg-ps"

    return (
      <footer className="relative mt-20 border-t border-white/5 bg-black py-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-4">
              <AGSeal />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">Math Companion Pro</span>
                <span className="text-xs text-neon-cyan font-semibold uppercase tracking-widest">Gouneiber Edition</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href={CONTACT_LINK} className="text-zinc-500 hover:text-neon-cyan transition-colors">
                <Github className="size-5" />
              </Link>
              <Link href={CONTACT_LINK} className="text-zinc-500 hover:text-neon-cyan transition-colors">
                <Twitter className="size-5" />
              </Link>
              <Link href={CONTACT_LINK} className="text-zinc-500 hover:text-neon-cyan transition-colors">
                <Linkedin className="size-5" />
              </Link>
              <Link href={CONTACT_LINK} className="text-zinc-500 hover:text-neon-cyan transition-colors">
                <Mail className="size-5" />
              </Link>
            </div>
          </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/5 py-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">الدروس</h4>
            <Link href="/lessons" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">الرياضيات 2AS</Link>
            <Link href="/lessons" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">الرياضيات 3AS</Link>
            <Link href="/lessons" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">الفيزياء 2AS</Link>
            <Link href="/lessons" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">الفيزياء 3AS</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">الأدوات</h4>
            <Link href="/tools" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">رسم الدوال</Link>
            <Link href="/tools" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">حساب النهايات</Link>
            <Link href="/tools" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">الأعداد المركبة</Link>
            <Link href="/tools" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">الميكانيك</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">المجتمع</h4>
            <Link href="/insights" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">رؤى احترافية</Link>
            <Link href="/challenges" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">تحديات كبرى</Link>
            <Link href="/blog" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">مقالات علمية</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">عن الموقع</h4>
            <Link href="/about" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">المدير التنفيذي</Link>
            <Link href="/contact" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">اتصل بنا</Link>
            <Link href="/privacy" className="text-zinc-500 hover:text-neon-cyan text-sm transition-colors">سياسة الخصوصية</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          <p className="text-zinc-600 text-xs">
            Conceptualized and Developed by <span className="text-zinc-400 font-bold">Abdeldjalil Gouneiber (عبدالجليل قنيبر)</span> | © 2025
          </p>
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
            Architecting the Future of Algerian STEM
          </p>
        </div>
      </div>
    </footer>
  )
}
