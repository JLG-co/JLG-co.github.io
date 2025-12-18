/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/*.{html,js}",
      "./index.html",
      "./*.html",
      "./js/**/*.js"
    ],
    theme: {
      extend: {
        colors: {
          // Primary Colors - Deep Academic Foundation
          primary: {
            DEFAULT: "#1E293B", // slate-800
            50: "#F8FAFC", // slate-50
            100: "#F1F5F9", // slate-100
            200: "#E2E8F0", // slate-200
            300: "#CBD5E1", // slate-300
            400: "#94A3B8", // slate-400
            500: "#64748B", // slate-500
            600: "#475569", // slate-600
            700: "#334155", // slate-700
            800: "#1E293B", // slate-800
            900: "#0F172A", // slate-900
          },
          // Secondary Colors - Subtle Content Elevation
          secondary: {
            DEFAULT: "#334155", // slate-700
            50: "#F8FAFC", // slate-50
            100: "#F1F5F9", // slate-100
            200: "#E2E8F0", // slate-200
            300: "#CBD5E1", // slate-300
            400: "#94A3B8", // slate-400
            500: "#64748B", // slate-500
            600: "#475569", // slate-600
            700: "#334155", // slate-700
            800: "#1E293B", // slate-800
            900: "#0F172A", // slate-900
          },
          // Accent Colors - Mathematical Precision
          accent: {
            DEFAULT: "#3B82F6", // blue-500
            50: "#EFF6FF", // blue-50
            100: "#DBEAFE", // blue-100
            200: "#BFDBFE", // blue-200
            300: "#93C5FD", // blue-300
            400: "#60A5FA", // blue-400
            500: "#3B82F6", // blue-500
            600: "#2563EB", // blue-600
            700: "#1D4ED8", // blue-700
            800: "#1E40AF", // blue-800
            900: "#1E3A8A", // blue-900
          },
          // Background Colors - Focused Concentration Environment
          background: {
            DEFAULT: "#0F172A", // slate-900
            light: "#1E293B", // slate-800
            lighter: "#334155", // slate-700
          },
          // Surface Colors - Gentle Content Separation
          surface: {
            DEFAULT: "#475569", // slate-600
            light: "#64748B", // slate-500
            lighter: "#94A3B8", // slate-400
          },
          // Text Colors - Crystal Clear Readability
          "text-primary": "#F8FAFC", // slate-50
          "text-secondary": "#CBD5E1", // slate-300
          "text-tertiary": "#94A3B8", // slate-400
          "text-muted": "#64748B", // slate-500
          // Success Colors - Positive Reinforcement
          success: {
            DEFAULT: "#10B981", // emerald-500
            50: "#ECFDF5", // emerald-50
            100: "#D1FAE5", // emerald-100
            200: "#A7F3D0", // emerald-200
            300: "#6EE7B7", // emerald-300
            400: "#34D399", // emerald-400
            500: "#10B981", // emerald-500
            600: "#059669", // emerald-600
            700: "#047857", // emerald-700
            800: "#065F46", // emerald-800
            900: "#064E3B", // emerald-900
          },
          // Warning Colors - Helpful Attention
          warning: {
            DEFAULT: "#F59E0B", // amber-500
            50: "#FFFBEB", // amber-50
            100: "#FEF3C7", // amber-100
            200: "#FDE68A", // amber-200
            300: "#FCD34D", // amber-300
            400: "#FBBF24", // amber-400
            500: "#F59E0B", // amber-500
            600: "#D97706", // amber-600
            700: "#B45309", // amber-700
            800: "#92400E", // amber-800
            900: "#78350F", // amber-900
          },
          // Error Colors - Constructive Guidance
          error: {
            DEFAULT: "#EF4444", // red-500
            50: "#FEF2F2", // red-50
            100: "#FEE2E2", // red-100
            200: "#FECACA", // red-200
            300: "#FCA5A5", // red-300
            400: "#F87171", // red-400
            500: "#EF4444", // red-500
            600: "#DC2626", // red-600
            700: "#B91C1C", // red-700
            800: "#991B1B", // red-800
            900: "#7F1D1D", // red-900
          },
        },
        fontFamily: {
          headline: ['Inter', 'sans-serif'],
          body: ['Source Sans Pro', 'sans-serif'],
          cta: ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.75rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1.16' }],
          '6xl': ['3.75rem', { lineHeight: '1.16' }],
        },
        spacing: {
          'xs': '0.25rem',
          'sm': '0.5rem',
          'md': '1rem',
          'lg': '1.5rem',
          'xl': '2rem',
          '2xl': '3rem',
          '3xl': '4rem',
        },
        borderRadius: {
          'sm': '0.25rem',
          'md': '0.375rem',
          'lg': '0.5rem',
          'xl': '0.75rem',
        },
        boxShadow: {
          'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'academic': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        transitionDuration: {
          'fast': '150ms',
          'base': '300ms',
          'slow': '500ms',
        },
        transitionTimingFunction: {
          'in-out': 'ease-in-out',
        },
        animation: {
          'fade-in': 'fadeIn 300ms ease-in-out',
          'slide-up': 'slideUp 300ms ease-in-out',
          'slide-down': 'slideDown 300ms ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }