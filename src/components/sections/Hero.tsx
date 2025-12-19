"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, Calculator, LogIn, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { getUser, User } from "@/lib/auth";
import Link from "next/link";

const Hero = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const isGuest = !user || user.role === "guest";
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden bg-[#020617]">
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

      <div className="container max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-[#f8fafc] leading-tight tracking-tight"
            >
              <span className="block mb-4">الدقة الرياضية</span>
              <span 
                className="block text-[#00a3ff] glow-text-primary"
                style={{ textShadow: "0 0 15px rgba(0, 163, 255, 0.6)" }}
              >
                تبني التميز المهني
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed font-medium"
            >
              منصة متقدمة لتعليم الرياضيات للسنة الثانية ثانوي وشهادة البكالوريا 2027
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            {isGuest ? (
              <>
                <Link href="/login">
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer bg-[#00a3ff] text-white hover:bg-[#00a3ff]/90 h-[60px] rounded-lg px-10 text-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ boxShadow: "0 0 15px rgba(0, 163, 255, 0.4)" }}
                  >
                    إنشاء حساب جديد
                    <UserPlus className="w-5 h-5 mr-1" />
                  </button>
                </Link>
                
                <Link href="/login">
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer bg-[#1e293b] text-[#f8fafc] hover:bg-[#1e293b]/80 h-[60px] rounded-lg px-10 text-lg transition-all duration-200 hover:scale-105 active:scale-95 border border-[#1e293b]"
                  >
                    تسجيل الدخول
                    <LogIn className="w-5 h-5 mr-1" />
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/lessons">
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer bg-[#00a3ff] text-white hover:bg-[#00a3ff]/90 h-[60px] rounded-lg px-10 text-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ boxShadow: "0 0 15px rgba(0, 163, 255, 0.4)" }}
                  >
                    ابدأ التعلم
                    <BookOpen className="w-5 h-5 mr-1" />
                  </button>
                </Link>
                
                <Link href="/dashboard">
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer bg-[#1e293b] text-[#f8fafc] hover:bg-[#1e293b]/80 h-[60px] rounded-lg px-10 text-lg transition-all duration-200 hover:scale-105 active:scale-95 border border-[#1e293b]"
                  >
                    لوحة التحكم
                    <Calculator className="w-5 h-5 mr-1" />
                  </button>
                </Link>
              </>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16"
          >
            {[
              { id: "2AS", title: "السنة الثانية ثانوي", desc: "محتوى شامل ومنظم" },
              { id: "BAC", title: "بكالوريا 2027", desc: "تحضير متقدم ومكثف" },
              { id: "AI", title: "أدوات ذكية", desc: "تقنيات حديثة للتعلم" }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group bg-[#0f172a]/30 backdrop-blur-md border border-[#1e293b] rounded-lg p-8 transition-all duration-300 hover:border-[#00a3ff] hover:bg-[#0f172a]/50"
              >
                <div className="text-[#00a3ff] text-4xl font-bold mb-3 tracking-wider group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.id}
                </div>
                <h3 className="text-xl font-bold text-[#f8fafc] mb-2">{feature.title}</h3>
                <p className="text-[#94a3b8] font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
