"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Calculator, Github, Linkedin, ExternalLink, GraduationCap, Globe } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function AboutPage() {
  const achievements = [
    {
      icon: Brain,
      title: "رؤية في الذكاء الاصطناعي",
      description: "دمج الذكاء الاصطناعي مع الأطر التعليمية لخلق تجارب تعلم تكيفية متطورة تلبي احتياجات كل طالب بشكل فريد."
    },
    {
      icon: Shield,
      title: "خبير في الأمن السيبراني",
      description: "تطبيق مبادئ أمنية قوية في النمذجة الرياضية والأنظمة الرقمية لحماية البيانات والمستقبل الرقمي."
    },
    {
      icon: Calculator,
      title: "خبير استراتيجي رياضي",
      description: "استخدام الرياضيات المتقدمة لحل التحديات الحسابية والأمنية الأكثر تعقيداً في العصر الحديث."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] flex flex-col relative overflow-hidden" dir="rtl">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
      
      <main className="flex-grow container mx-auto px-4 py-16 max-w-[1152px] relative z-10">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00a3ff]/10 border border-[#00a3ff]/20 text-[#00a3ff] mb-8 shadow-[0_0_15px_rgba(0,163,255,0.1)]">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-[10px] font-black text-white">AG</div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Math Companion Pro</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                عبد الجليل قنيبر
                <span className="block text-2xl md:text-3xl text-[#94a3b8] mt-4 font-medium font-sans">Abdeldjalil Gouneiber</span>
              </h1>
              <p className="text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl font-medium text-justify">
                رؤية تجمع بين ذكاء الآلة، أمن الفضاء الرقمي، وعمق الرياضيات. يسعى عبد الجليل لتحويل التعليم التقني في الجزائر نحو آفاق احترافية جديدة، من خلال منصة متطورة تربط المفاهيم الأكاديمية بالتطبيقات العملية في سوق العمل العالمي.
              </p>
              
              <div className="flex gap-4 justify-start">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#1e293b] border border-[#334155] rounded-2xl hover:border-[#00a3ff] hover:text-[#00a3ff] transition-all group">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#1e293b] border border-[#334155] rounded-2xl hover:border-[#00a3ff] hover:text-[#00a3ff] transition-all group">
                  <Github className="w-6 h-6" />
                </a>
                <button className="flex items-center gap-2 px-8 py-4 bg-[#00a3ff] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                  تواصل مهنياً
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
            >
              <div className="absolute inset-0 bg-[#00a3ff]/20 rounded-[40px] blur-3xl animate-pulse"></div>
              <div className="relative h-full w-full bg-[#0f172a] border-2 border-[#1e293b] rounded-[40px] overflow-hidden flex items-center justify-center shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60 z-10" />
                
                {/* AG Professional Logo Design */}
                <div className="relative group/logo flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-[#00a3ff]/20 blur-[100px] rounded-full scale-150 animate-pulse"></div>
                  <div className="relative bg-[#020617] border-4 border-[#00a3ff] w-64 h-64 rounded-[40px] flex items-center justify-center shadow-[0_0_50px_rgba(0,163,255,0.3)] group-hover/logo:scale-105 transition-transform duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00a3ff]/10 to-transparent"></div>
                    <div className="relative flex items-baseline">
                      <span className="text-[120px] font-black leading-none text-white select-none drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">A</span>
                      <span className="text-[120px] font-black leading-none text-[#00a3ff] -ml-4 select-none drop-shadow-[0_0_20px_rgba(0,163,255,0.5)]">G</span>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col items-center gap-2">
                    <span className="text-2xl font-black uppercase tracking-[0.3em] text-white">G O U N E I B E R</span>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#00a3ff] to-transparent"></div>
                    <span className="text-sm font-bold text-[#00a3ff] uppercase tracking-[0.5em]">Mathematics & Security</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 z-20 bg-[#1e293b]/80 backdrop-blur-xl p-6 rounded-3xl border border-[#334155]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a3ff] mb-1">المسمى المهني</p>
                      <p className="text-lg font-bold">كبير الاستراتيجيين التقنيين</p>
                    </div>
                    <GraduationCap className="w-8 h-8 text-[#00a3ff]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Grid */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">فلسفة الابتكار</h2>
            <div className="w-24 h-1.5 bg-[#00a3ff] mx-auto rounded-full glow-text-primary"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#0f172a]/50 backdrop-blur-sm border border-[#1e293b] p-10 rounded-[32px] hover:border-[#00a3ff]/50 transition-all group text-right flex flex-col items-end"
              >
                <div className="w-16 h-16 bg-[#00a3ff]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00a3ff] group-hover:text-white transition-all shadow-inner">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#94a3b8] leading-relaxed font-medium text-justify">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy/Quote Section */}
        <section className="relative group">
          <div className="absolute inset-0 bg-[#00a3ff]/5 blur-3xl rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f172a]/40 backdrop-blur-2xl border border-[#1e293b] rounded-[60px] p-16 md:p-24 relative overflow-hidden text-right"
          >
            <div className="absolute -top-12 -left-12 opacity-[0.03] rotate-12">
              <Brain className="w-96 h-96" />
            </div>
            
            <div className="relative z-10 max-w-4xl mr-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-10 italic leading-tight text-white">
                "مستقبل الأمن يكتب <span className="text-[#00a3ff]">بالمعادلات الرياضية</span>، وليس فقط بالشيفرات البرمجية."
              </h2>
              <p className="text-xl text-[#94a3b8] leading-relaxed mb-12 font-medium text-justify">
                يؤمن عبد الجليل أن الرياضيات ليست مجرد مادة دراسية، بل هي لغة الكون الرقمي. من خلال إتقان المنطق الرياضي، يمكننا بناء أنظمة ذكية لا تكتفي برد الفعل، بل تتنبأ بالتهديدات وتتطور ذاتياً. مشروعه "Math Companion Pro" هو الخطوة الأولى لتمكين الطلاب الجزائريين من هذه الأدوات السيادية.
              </p>
              
              <div className="flex items-center gap-6 justify-end">
                <div className="text-right">
                  <p className="text-white font-bold text-lg">رؤية 2030</p>
                  <p className="text-[#00a3ff] text-sm font-bold uppercase tracking-widest">التحول الرقمي التعليمي</p>
                </div>
                <div className="w-16 h-px bg-[#334155]"></div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Signature Footer */}
      <footer className="py-12 border-t border-[#1e293b] text-center">
        <p className="text-[#94a3b8] text-sm font-medium">تم التصميم والتطوير بواسطة فريق عبد الجليل قنيبر &copy; 2024</p>
      </footer>
    </div>
  );
}
