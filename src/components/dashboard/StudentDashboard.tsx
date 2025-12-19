"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Trophy, 
  Zap, 
  Star, 
  Target, 
  LayoutDashboard, 
  BookOpen, 
  BarChart, 
  Settings,
  ChevronRight,
  TrendingUp,
  Award,
  LogOut,
  User as UserIcon,
  Clock,
  CheckCircle2
} from "lucide-react";
import { getUser, logout, User } from "@/lib/auth";
import AuthPortal from "@/components/auth/AuthPortal";

interface StudentStats {
  xp: number;
  level: number;
  rank: number;
  completedLessons: number;
  streak: number;
}

interface LeaderboardEntry {
  id: number;
  name: string;
  xp: number;
  level: number;
  avatar: string;
  isCurrentUser?: boolean;
}

const DEFAULT_STATS: StudentStats = {
  xp: 1250,
  level: 12,
  rank: 42,
  completedLessons: 24,
  streak: 5
};

const LEADERBOARD: LeaderboardEntry[] = [
  { id: 1, name: "عمر الفاروق", xp: 15400, level: 85, avatar: "OF" },
  { id: 2, name: "مريم العلمي", xp: 14200, level: 78, avatar: "MA" },
  { id: 3, name: "ياسين بن علي", xp: 13950, level: 76, avatar: "YB" },
  { id: 4, name: "سارة محمود", xp: 12100, level: 65, avatar: "SM" },
  { id: 5, name: "أحمد بن زهرة", xp: 11500, level: 62, avatar: "AZ" },
];

export default function StudentDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<StudentStats>(DEFAULT_STATS);
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getUser();
    if (currentUser) {
      setUser(currentUser);
    } else {
      router.push("/login");
    }

    const savedStats = localStorage.getItem("hercules_student_stats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    } else {
      localStorage.setItem("hercules_student_stats", JSON.stringify(DEFAULT_STATS));
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const nextLevelXP = 2000;
  const progressPercentage = (stats.xp / nextLevelXP) * 100;

  if (!user || user.role === "guest") {
    return <AuthPortal />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-background font-sans overflow-hidden" dir="rtl">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-l border-border bg-card/10 backdrop-blur-md p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-primary mb-6">
            <LayoutDashboard size={24} />
            <span className="text-xl font-bold">لوحة التحكم</span>
          </div>
          
          <nav className="flex flex-col gap-2">
            {[
              { id: "overview", label: "نظرة عامة", icon: BarChart },
              { id: "courses", label: "دروسي", icon: BookOpen },
              { id: "achievements", label: "الإنجازات", icon: Trophy },
              { id: "settings", label: "الإعدادات", icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,163,255,0.3)]" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-red-400 hover:bg-red-500/10 mt-4"
            >
              <LogOut size={20} />
              <span className="font-medium">تسجيل الخروج</span>
            </button>
          </nav>
        </div>

        <div className="mt-auto pt-6 border-t border-border">
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Zap size={16} fill="currentColor" />
              <span className="text-sm font-bold">تحدي اليوم</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">حل 5 تمارين في الأعداد المركبة للحصول على 50 XP إضافية.</p>
            <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-transform hover:scale-[1.02]">
              ابدأ الآن
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              مرحباً بك، {user?.name || "أيها البطل"}!
            </h1>
            <p className="text-muted-foreground">واصل رحلتك نحو التميز في الرياضيات لبكالوريا 2027.</p>
          </div>
          <div className="flex gap-4">
            <div className="glass-panel px-6 py-3 rounded-xl border border-border flex flex-col items-center">
              <span className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">الترتيب العالمي</span>
              <span className="text-2xl font-black text-primary glow-text">#{stats.rank}</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl border border-border flex flex-col items-center">
              <span className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">سلسلة التعلم</span>
              <span className="text-2xl font-black text-orange-500 flex items-center gap-1">
                {stats.streak} <Zap size={22} fill="currentColor" />
              </span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeTab === "overview" && (
            <>
              {/* Main Progress Section */}
              <section className="lg:col-span-2 space-y-8">
                {/* Level & XP Card */}
                <div className="glass-panel p-8 rounded-2xl border border-border relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.4)]">
                        <span className="text-2xl font-black text-white">{stats.level}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">المستوى الحالي</h3>
                        <p className="text-muted-foreground">أنت ضمن أفضل 5% من الطلاب</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground mb-1">نقاط الخبرة</div>
                      <div className="text-2xl font-black text-foreground">
                        <span className="text-primary">{stats.xp}</span>
                        <span className="text-muted-foreground/30 mx-1">/</span>
                        <span className="text-muted-foreground/60">{nextLevelXP}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-full h-4 bg-secondary rounded-full overflow-hidden border border-border/50">
                      <div 
                        className="h-full bg-gradient-to-l from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_15px_rgba(0,163,255,0.5)]"
                        style={{ width: `${progressPercentage}%` }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[progress-bar-stripes_1s_linear_infinite]"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-primary">XP {stats.xp} موثقة</span>
                      <span className="text-muted-foreground">باقي {nextLevelXP - stats.xp} XP للمستوى التالي</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-panel p-6 rounded-xl border border-border hover:border-primary/50 transition-colors flex items-center gap-5">
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                      <BookOpen size={28} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stats.completedLessons}</div>
                      <div className="text-sm text-muted-foreground">درساً مكتملًا</div>
                    </div>
                  </div>
                  <div className="glass-panel p-6 rounded-xl border border-border hover:border-primary/50 transition-colors flex items-center gap-5">
                    <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                      <Award size={28} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">14</div>
                      <div className="text-sm text-muted-foreground">وساماً محققاً</div>
                    </div>
                  </div>
                </div>

                {/* Recent Progress */}
                <div className="glass-panel p-6 rounded-2xl border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <TrendingUp className="text-primary" size={20} />
                      النشاط الأخير
                    </h3>
                    <button className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                      عرض الكل <ChevronRight size={14} className="rotate-180" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "التحويلات النقطية في المستوي", date: "اليوم، 10:30 صباحاً", xp: "+120 XP", type: "lesson" },
                      { title: "حل مسألة الدوال الأسية الشاملة", date: "أمس، 06:15 مساءً", xp: "+85 XP", type: "exercise" },
                      { title: "اختبار قياس المستوى السريع", date: "15 ماي، 2025", xp: "+250 XP", type: "quiz" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`}></div>
                          <div>
                            <div className="font-bold text-sm md:text-base">{item.title}</div>
                            <div className="text-xs text-muted-foreground">{item.date}</div>
                          </div>
                        </div>
                        <div className="text-primary font-bold text-sm">{item.xp}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Right Sidebar - Leaderboard */}
              <section className="space-y-8">
                <div className="glass-panel p-6 rounded-2xl border border-border h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Trophy size={22} />
                    </div>
                    <h3 className="text-xl font-bold">المتصدرون</h3>
                  </div>

                  <div className="space-y-3">
                    {LEADERBOARD.map((user, index) => (
                      <div 
                        key={user.id} 
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                          index === 0 
                            ? "bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(0,163,255,0.05)]" 
                            : "bg-white/5 border-transparent hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 font-black ${
                            index === 0 ? "text-primary text-lg" : 
                            index === 1 ? "text-slate-400" : 
                            index === 2 ? "text-amber-700" : "text-muted-foreground"
                          }`}>
                            #{index + 1}
                          </div>
                          <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold ring-2 ring-transparent group-hover:ring-primary/50 transition-all">
                            {user.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-sm">{user.name}</div>
                            <div className="text-[10px] text-muted-foreground uppercase">المستوى {user.level}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black text-foreground">{user.xp.toLocaleString()}</div>
                          <div className="text-[10px] text-primary font-bold">XP</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary border border-primary shadow-[0_0_25px_rgba(0,163,255,0.3)]">
                      <div className="flex items-center gap-4">
                        <span className="font-black text-white text-lg">#{stats.rank}</span>
                        <div>
                          <div className="font-bold text-sm text-white">أنت (حالياً)</div>
                          <div className="text-[10px] text-white/80 uppercase">المستوى {stats.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-white">{stats.xp.toLocaleString()}</div>
                        <div className="text-[10px] text-white/90 font-bold">XP</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3 border border-border rounded-xl text-muted-foreground text-sm font-bold hover:bg-white/5 transition-colors">
                    عرض كامل الترتيب
                  </button>
                </div>
              </section>
            </>
          )}

          {activeTab === "courses" && (
            <section className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "الأعداد المركبة", progress: 75, status: "in_progress" },
                  { title: "الدوال الأسية", progress: 100, status: "completed" },
                  { title: "المتتاليات العددية", progress: 30, status: "in_progress" },
                  { title: "الاحتمالات", progress: 0, status: "not_started" },
                ].map((course, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-border flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <BookOpen size={24} />
                      </div>
                      {course.status === "completed" && (
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full">مكتمل</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">التقدم</span>
                        <span className="font-bold">{course.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-500" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <button className="w-full py-3 mt-2 bg-secondary hover:bg-white/10 rounded-xl text-sm font-bold transition-colors">
                      {course.progress === 100 ? "مراجعة الدرس" : "مواصلة التعلم"}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "achievements" && (
            <section className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { title: "بداية قوية", desc: "أكملت أول درس لك", icon: Star, unlocked: true },
                  { title: "سيد المتتاليات", desc: "حل 50 تمرين في المتتاليات", icon: Target, unlocked: true },
                  { title: "ملك الوقت", desc: "دراسة لمدة 10 ساعات متواصلة", icon: Clock, unlocked: false },
                  { title: "بطل المسابقات", desc: "الفوز في تحدي مباشر", icon: Trophy, unlocked: false },
                  { title: "مثابر", desc: "سلسلة تعلم لمدة 7 أيام", icon: Zap, unlocked: true },
                ].map((achievement, idx) => (
                  <div key={idx} className={`glass-panel p-6 rounded-2xl border border-border flex flex-col items-center text-center gap-3 ${!achievement.unlocked && "opacity-50 grayscale"}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${achievement.unlocked ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                      <achievement.icon size={32} fill={achievement.unlocked ? "currentColor" : "none"} />
                    </div>
                    <h4 className="font-bold">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                    {!achievement.unlocked && <span className="text-[10px] font-bold uppercase tracking-widest mt-2">مقفل</span>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "settings" && (
            <section className="lg:col-span-3 max-w-2xl mx-auto w-full">
              <div className="glass-panel p-8 rounded-2xl border border-border space-y-8">
                <div className="flex items-center gap-4 border-b border-border pb-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-3xl font-black text-white">
                    {user?.name?.[0] || "U"}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{user?.name}</h3>
                    <p className="text-muted-foreground">{user?.email}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">
                      {user?.role}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-muted-foreground">الاسم الكامل</label>
                    <input type="text" defaultValue={user?.name} className="bg-white/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-muted-foreground">البريد الإلكتروني</label>
                    <input type="email" defaultValue={user?.email} disabled className="bg-white/5 border border-border rounded-xl px-4 py-3 opacity-50 cursor-not-allowed" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-border">
                    <div>
                      <h4 className="font-bold">تنبيهات البريد</h4>
                      <p className="text-xs text-muted-foreground">تلقي تحديثات عن دروسك وتقدمك</p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                  حفظ التغييرات
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      <style jsx global>{`
        @keyframes progress-bar-stripes {
          from { background-position: 40px 0; }
          to { background-position: 0 0; }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
    </div>
  );
}
