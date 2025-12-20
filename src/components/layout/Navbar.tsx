"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { AGSeal } from "@/components/ui/AGSeal"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الأدوات", href: "/tools" },
  { name: "الدروس", href: "/lessons" },
  { name: "رؤى", href: "/insights" },
  { name: "من نحن", href: "/about" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    const CONTACT_LINK = "https://solo.to/jlg-ps"

    return (
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "glass-morphism py-2 shadow-lg border-neon-cyan/10" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo / AG Seal */}
          <Link href="/" className="flex items-center gap-2">
            <AGSeal />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-none">Math Companion Pro</span>
              <span className="text-[10px] text-neon-cyan font-medium uppercase tracking-widest">Gouneiber Edition</span>
            </div>
          </Link>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-neon-cyan relative group",
                  pathname === link.href ? "text-neon-cyan" : "text-zinc-400"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                  />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300 opacity-50" />
              </Link>
            ))}
            <Link href={CONTACT_LINK}>
              <Button variant="outline" className="neon-border text-neon-cyan hover:bg-neon-cyan/10 border-neon-cyan/30">
                انضم إلينا
              </Button>
            </Link>
          </div>
  
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-deep-charcoal border-neon-cyan/10 text-white">
                <SheetHeader className="text-right">
                  <SheetTitle className="text-neon-cyan font-bold text-xl mb-8">القائمة</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-xl font-bold flex items-center justify-between group",
                        pathname === link.href ? "text-neon-cyan" : "text-zinc-400"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronLeft className={cn(
                        "size-5 transition-transform group-hover:-translate-x-2",
                        pathname === link.href ? "text-neon-cyan" : "text-zinc-600"
                      )} />
                    </Link>
                  ))}
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <Link href={CONTACT_LINK}>
                      <Button className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold">
                        انضم إلينا
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    )
  }
