"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Target, 
  Layers, 
  RefreshCw, 
  ChevronLeft, 
  CheckCircle2, 
  AlertCircle,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const ComplexNumbersModule = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "عمدة العدد المركب (Argument)",
      icon: Target,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      content: "دراسة الزاوية θ التي يصنعها شعاع العدد المركب مع محور الفواصل، وقواعد استنتاج العمدة في الأرباع الأربعة.",
      details: [
        "الربع الأول: arg(z) = α",
        "الربع الثاني: arg(z) = π - α",
        "الربع الثالث: arg(z) = -π + α",
        "الربع الرابع: arg(z) = -α"
      ]
    },
    {
      title: "التحويلات بين الأشكال (Form Transitions)",
      icon: RefreshCw,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      content: "الاحتراف في الانتقال السلس بين الشكل الجبري، المثلثي، والأسس باستخدام الطويلة والعمدة.",
      details: [
        "الجبري: z = x + iy",
        "المثلثي: z = r(cosθ + isinθ)",
        "الأسي: z = re^(iθ)"
      ]
    },
    {
      title: "هندسة الطويلة (Modulus Geometry)",
      icon: Layers,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      content: "تفسير الطويلة كمسافة بين نقطتين وتحديد المجموعات النقطية (دوائر، مستقيمات).",
      details: [
        "|z - zA| = R : دائرة مركزها A",
        "|z - zA| = |z - zB| : محور القطعة [AB]",
        "تطبيقات المسافات في المثلثات"
      ]
    },
    {
      title: "التحقق من الأخطاء (Error Checking)",
      icon: ShieldCheck,
      color: "text-red-400",
      bg: "bg-red-400/10",
      content: "استراتيجيات Gouneiber للتحقق الفوري من النتائج وتفادي أخطاء الإشارات والحسابات.",
      details: [
        "التحقق بواسطة الآلة الحاسبة",
        "اختبار التناظر في المستوي",
        "التأكد من الربع قبل تحديد العمدة"
      ]
    }
  ];

  return (
    <div className="py-20 bg-background min-h-screen text-right" dir="rtl">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center md:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
            <Zap className="w-4 h-4" />
            <span>وحدة التميز الأكاديمي</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground">
            الأعداد المركبة <span className="text-primary glow-text-primary">($Z$)</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl md:mr-0 md:ml-auto">
            دليل استراتيجي شامل لاتقان محور الأعداد المركبة وفق "أركان الاستراتيجية الأربعة".
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.button
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setActivePillar(idx)}
                className={`p-6 rounded-2xl border text-right transition-all duration-300 ${
                  activePillar === idx 
                    ? "bg-secondary border-primary shadow-[0_0_20px_rgba(0,163,255,0.2)]" 
                    : "bg-card/30 border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.content}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Pillar Detail Section */}
        <div className="glass-panel rounded-3xl border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8 bg-secondary/20">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-foreground flex items-center gap-3">
                  <span className={`w-2 h-8 rounded-full ${pillars[activePillar].bg.replace('bg-', 'bg-').split(' ')[0]} bg-primary`}></span>
                  {pillars[activePillar].title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {pillars[activePillar].content}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  النقاط الجوهرية:
                </h4>
                <ul className="space-y-3">
                  {pillars[activePillar].details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-4">
                <AlertCircle className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm text-red-200/80 leading-relaxed">
                  <span className="font-bold text-red-400 block mb-1">تنبيه Gouneiber:</span>
                  تجنب الوقوع في فخ الزوايا الشهيرة قبل التأكد من إشارة x و y. رسم الدائرة المثلثية ولو ذهنياً هو نصف الحل.
                </p>
              </div>
            </div>

            <div className="relative bg-slate-950 flex items-center justify-center p-12 min-h-[400px]">
               {/* Decorative Math Elements */}
               <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                  <div className="absolute top-10 left-10 text-6xl font-serif text-white rotate-12">e^(iθ)</div>
                  <div className="absolute bottom-20 right-20 text-7xl font-serif text-white -rotate-12">z = x+iy</div>
                  <div className="absolute top-1/2 left-1/4 text-5xl font-serif text-white opacity-20">arg(z)</div>
               </div>
               
               <div className="relative z-10 w-full max-w-sm aspect-square rounded-full border-2 border-primary/30 flex items-center justify-center animate-spin-slow">
                  <div className="absolute top-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(0,163,255,1)]"></div>
                  <div className="w-1/2 h-1 bg-gradient-to-l from-primary to-transparent rounded-full rotate-45 transform origin-right"></div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-primary glow-text-primary mb-2">r</div>
                    <div className="text-xl font-bold text-muted-foreground">الطويلة</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-3xl p-10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">هل أنت مستعد لمواجهة التحدي؟</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">تطبيق عملي على الأعداد المركبة بانتظارك في مكتبة الدروس مع حلول استراتيجية مفصلة.</p>
          <a href="/lessons">
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/30 flex items-center gap-3 mx-auto">
              انتقل إلى التمارين الاستراتيجية
              <ChevronLeft size={20} />
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ComplexNumbersModule;
