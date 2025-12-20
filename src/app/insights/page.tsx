"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Stethoscope, ShieldAlert, Cpu, Lightbulb, TrendingUp, Zap, ArrowLeftCircle } from "lucide-react"

export default function InsightsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".insight-card", {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-12 min-h-screen">
      <header className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            رؤى مهنية: <span className="text-neon-cyan">لماذا ندرس هذا؟</span>
          </h1>
          <p className="text-zinc-500 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            نحن لا ندرس الرياضيات والفيزياء لمجرد النجاح، بل لصناعة العقل الذي سيقود الجيل القادم من الابتكار التقني والطبي.
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 gap-16 mb-20">
        {/* Article 1: Medicine */}
        <section className="insight-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900/30 p-8 rounded-[3rem] border border-white/5">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-rose-500">
              <Stethoscope className="size-12" />
              <h2 className="text-3xl font-black">الطب والعلوم الحيوية</h2>
            </div>
            <h3 className="text-xl text-white font-bold">الدقة الجراحية والنمذجة الأسيّة</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              في الطب الحديث، لا مكان للصدفة. فهم <span className="text-rose-400 font-bold">الدوال الأسية واللوغاريتمية</span> هو ما يسمح للأطباء والباحثين بفهم كيفية انتشار الأوبئة أو سرعة تحلل الدواء في دم المريض (Pharmacokinetics).
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              أما في الفيزياء الطبية، فإن دراسة <span className="text-rose-400 font-bold">النشاط الإشعاعي</span> هي جوهر علاج الأورام وتصوير الجسم بالرنين المغناطيسي. الطبيب الناجح هو "رياضياتي" يطبق المنطق على جسم الإنسان.
            </p>
            <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl text-rose-200 text-sm">
              💡 الربط المنهجي: تصفية الدم، تنظيم ضربات القلب، وتقدير جرعات التخدير كلها "معادلات تفاضلية" حية.
            </div>
          </div>
          <div className="bg-black/50 rounded-[2rem] h-full min-h-[300px] border border-white/5 flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-center space-y-4 relative z-10">
              <div className="text-6xl font-black text-white/10 group-hover:text-rose-500/20 transition-colors">f(t) = Ce^(-kt)</div>
              <div className="text-zinc-500 font-mono text-sm">نموذج تركيز الدواء في البلازما</div>
            </div>
          </div>
        </section>

        {/* Article 2: Cybersecurity */}
        <section className="insight-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900/30 p-8 rounded-[3rem] border border-white/5">
          <div className="lg:order-2 space-y-6">
            <div className="flex items-center gap-4 text-amber-500">
              <ShieldAlert className="size-12" />
              <h2 className="text-3xl font-black">الأمن السيبراني والذكاء الاصطناعي</h2>
            </div>
            <h3 className="text-xl text-white font-bold">الأعداد الأولية: حراس العالم الرقمي</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              هل تساءلت يوماً لماذا تدرس <span className="text-amber-400 font-bold">القواسم والمضاعفات والأعداد الأولية</span>؟ في عالم الأمن السيبراني، تعتمد خوارزميات التشفير العالمية (مثل RSA) على حقيقة أن ضرب عددين أوليين كبيرين جداً هو أمر سهل، لكن "تفكيك" النتيجة إلى عواملها الأولية مستحيل عملياً بدون "المفتاح".
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              أيضاً، <span className="text-amber-400 font-bold">الاحتمالات والإحصاء</span> هي المحرك الفعلي لأنظمة كشف الاختراق وتدريب نماذج التعلم الآلي (AI) لتوقع الهجمات قبل حدوثها.
            </p>
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-amber-200 text-sm">
              🛡️ القاعدة التقنية: إذا كنت تريد أن تكون "هكر" أخلاقي محترف، عليك أولاً أن تكون "جبرياً" متمكناً.
            </div>
          </div>
          <div className="lg:order-1 bg-black/50 rounded-[2rem] h-full min-h-[300px] border border-white/5 flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-mono text-xs text-amber-500/40 grid grid-cols-4 gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i}>{Math.random().toString(16).slice(2, 8)}</div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-black text-2xl tracking-[0.5em] bg-black px-4 py-2 border border-white/10">ENCRYPTED</span>
            </div>
          </div>
        </section>

        {/* Article 3: Engineering */}
        <section className="insight-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900/30 p-8 rounded-[3rem] border border-white/5">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-electric-blue">
              <Cpu className="size-12" />
              <h2 className="text-3xl font-black">الهندسة والتكنولوجيا</h2>
            </div>
            <h3 className="text-xl text-white font-bold">من القذيفة إلى المحطة الفضائية</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              دراسة <span className="text-blue-400 font-bold">الميكانيك والكهرباء</span> ليست مجرد قوانين جافة. المهندس الذي يصمم "منصات إطلاق الصواريخ" يحتاج لفهم دقيق لـ <span className="text-blue-400 font-bold">حساب التفاضل والتكامل</span> لضمان وصول القذيفة لهدفها، وتوازن القوى في الهياكل المعدنية.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              بدون فهم <span className="text-blue-400 font-bold">الأعداد المركبة</span>، لم يكن بالإمكان تصميم الدارات الكهربائية المعقدة أو أنظمة الاتصالات اللاسلكية التي تستخدمها الآن في هاتفك المحمول.
            </p>
            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl text-blue-200 text-sm">
              🏗️ الرؤية الهندسية: أنت لا تبني جداراً، بل تبني "نظاماً" يطيع قوانين الفيزياء والرياضيات.
            </div>
          </div>
          <div className="bg-black/50 rounded-[2rem] h-full min-h-[300px] border border-white/5 flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 w-full max-w-xs h-48 border-b-2 border-l-2 border-white/20 flex items-end p-4">
              <motion.div 
                className="w-full h-full border-t-4 border-r-4 border-neon-cyan/50 rounded-tr-[100%] border-dashed"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute bottom-4 left-4 text-white/20 font-bold">α = 45°</div>
            </div>
          </div>
        </section>
      </div>

      <section className="insight-card p-12 rounded-[4rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Zap className="size-64 text-neon-cyan" />
        </div>
        <div className="max-w-4xl relative z-10 mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan mb-4">
            <Lightbulb className="size-5" />
            <span className="font-bold uppercase tracking-[0.2em] text-xs">رسالة المؤسس الاستراتيجية</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            العلم ليس عبئاً، بل <span className="text-neon-cyan">سلطة معرفية</span>
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
            عزيزي الطالب، كلما زادت صعوبة المسألة التي تحلها اليوم، زادت قدرة عقلك على تحليل "الفوضى" في العالم الحقيقي غداً. تذكر دائماً أن القادة لا يهربون من التحدي المنطقي، بل يصنعون منه حلولاً تغير حياة الملايين.
          </p>
          <div className="pt-8">
            <div className="flex items-center justify-center gap-4 text-white font-bold text-lg">
              <TrendingUp className="size-6 text-neon-cyan" />
              <span>استمر في الصعود، المنصة هنا لدعمك.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
