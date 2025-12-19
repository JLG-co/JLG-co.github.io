"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, LayoutDashboard, BookOpen, Calculator, Map, LogIn, MessageCircle, Award, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getUser, User } from '@/lib/auth';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUser());
    const savedTheme = localStorage.getItem("hercules_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("hercules_theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

    const navLinks = [
      { href: "/lessons", label: "مكتبة الدروس", icon: BookOpen },
      { href: "/about", label: "عن المؤسس", icon: Award },
      { href: "/insights", label: "رؤى مهنية", icon: FileText },
      { href: "/tools", label: "الأدوات الرياضية", icon: Calculator },
      { href: "/roadmap", label: "BAC 2027", icon: Map },
      { href: "https://solo.to/jlg-ps", label: "اتصل بنا", icon: MessageCircle, external: true },
    ];

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 w-full transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 max-w-[1152px]">
        <div className="flex items-center justify-between gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0 group"
          >
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-colors"></div>
              <div className="relative bg-background border-2 border-primary rounded-lg flex items-center justify-center w-full h-full shadow-[0_0_15px_rgba(var(--primary),0.3)] group-hover:scale-105 transition-transform">
                <span className="text-primary font-bold text-lg">AG</span>
              </div>
            </div>
            <div className="text-right hidden xs:block">
              <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">Math Companion Pro</h2>
              <p className="text-[10px] text-muted-foreground">نسخة قنيبر</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all hover:bg-primary/10 h-9 rounded-md px-4 text-foreground hover:text-primary">
                    {link.label}
                  </button>
                </a>
              ) : (
                <Link key={link.href} href={link.href}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all hover:bg-primary/10 h-9 rounded-md px-4 text-foreground hover:text-primary">
                    {link.label}
                  </button>
                </Link>
              )
            ))}
            
            <div className="h-4 w-px bg-border mx-2" />
            
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
              <Link href={!user || user.role === "guest" ? "/login" : "/dashboard"} className="ml-2">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all bg-primary text-primary-foreground hover:brightness-110 h-9 rounded-md px-4 shadow-lg shadow-primary/20 active:scale-95">
                  {!user || user.role === "guest" ? (
                    <>
                      <LogIn className="w-4 h-4" />
                      تسجيل الدخول
                    </>
                  ) : (
                    <>
                      <LayoutDashboard className="w-4 h-4" />
                      لوحة التحكم
                    </>
                  )}
                </button>
              </Link>

          </nav>

          {/* Mobile Toggle Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-accent transition-colors z-[60]"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-card border-l border-border z-50 md:hidden shadow-2xl p-6 pt-20"
            >
              <div className="flex flex-col gap-4">
                <div className="text-right mb-6">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">التنقل</h3>
                    <div className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        link.external ? (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-primary/10 text-foreground hover:text-primary transition-all group"
                          >
                            <span className="font-bold">{link.label}</span>
                            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                          </a>
                        ) : (
                          <Link 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-primary/10 text-foreground hover:text-primary transition-all group"
                          >
                            <span className="font-bold">{link.label}</span>
                            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                          </Link>
                        )
                      ))}
                    </div>
                </div>

                <div className="h-px bg-border my-2" />

                <Link 
                  href="/dashboard" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
                    <LayoutDashboard className="w-5 h-5" />
                    لوحة التحكم
                  </button>
                </Link>

                <Link 
                  href="/login" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="w-full flex items-center justify-center gap-2 border border-border text-foreground font-bold py-4 rounded-xl hover:bg-accent transition-all">
                    <LogIn className="w-5 h-5" />
                    تسجيل الدخول
                  </button>
                </Link>

                <div className="mt-auto text-center pt-10">
                  <p className="text-xs text-muted-foreground">Math Companion Pro v1.0</p>
                  <p className="text-[10px] text-muted-foreground/50 mt-1">نسخة قنيبر - 2024</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
