"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { User, LogIn, UserPlus, ShieldCheck, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import { loginUser, registerUser, loginAsGuest } from "@/lib/auth";

type AuthMode = "login" | "signup";

export default function AuthPortal() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "login") {
        const user = loginUser(email, password);
        if (user) {
          router.push("/dashboard");
        } else {
          setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
        }
      } else {
        if (!name.trim()) {
          setError("يرجى إدخال اسمك الكامل");
          setLoading(false);
          return;
        }
        const user = registerUser(email, password, name);
        if (user) {
          router.push("/dashboard");
        } else {
          setError("لا يمكن إنشاء حساب بهذا البريد");
        }
      }
    } catch (err) {
      setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    router.push("/");
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-20 min-h-[calc(100vh-160px)]">
      <div className="w-full max-w-md">
        <div className="glass-panel rounded-lg overflow-hidden glow-border-primary/20 bg-card/40 backdrop-blur-md border border-border shadow-2xl transition-all duration-300">
          <div className="flex border-b border-border bg-slate-900/40">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all ${
                mode === "login"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all ${
                mode === "signup"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>حساب جديد</span>
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold glow-text-primary">مرحباً بك مجدداً</h3>
              <p className="text-sm text-muted-foreground">
                {mode === "login" 
                  ? "يرجى تسجيل الدخول للوصول إلى محتواك التعليمي" 
                  : "انضم إلى مجتمعنا التعليمي المتميز اليوم"}
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground pr-1" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-md py-2.5 pr-10 pl-4 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-medium text-foreground" htmlFor="password">
                    كلمة المرور
                  </label>
                  {mode === "login" && (
                    <a href="#" className="text-xs text-primary hover:underline font-medium">نسيت كلمة المرور؟</a>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-md py-2.5 pr-10 pl-10 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {mode === "signup" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground pr-1">الاسم الكامل</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="w-full bg-secondary/50 border border-border rounded-md py-2.5 pr-10 pl-4 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-primary text-primary-foreground font-bold py-3 rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] glow-border-primary flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "جاري التحميل..." : mode === "login" ? "تسجيل الدخول" : "إنشاء الحساب"}
                {!loading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0f172a] px-2 text-muted-foreground">أو</span>
              </div>
            </div>

            <button 
              onClick={handleGuestLogin}
              className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-border rounded-md hover:bg-white/5 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <User className="w-4 h-4" />
              تصفح كزائر (محدود)
            </button>
          </div>

          <div className="bg-slate-900/60 p-4 flex items-center justify-center gap-2 border-t border-border">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-muted-foreground">بياناتك محمية بتشفير من طرف لآخر</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground/60 select-none">
            جزء من منصة <span className="text-primary font-semibold">Math Companion Pro</span> الحديثة
          </p>
        </div>
      </div>
    </div>
  );
}
