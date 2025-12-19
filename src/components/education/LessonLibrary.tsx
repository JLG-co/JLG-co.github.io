// Math Companion Pro - Lesson Library Component
"use client";

import React, { useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

interface Lesson {
  id: string;
  title: string;
  category: "2AS" | "BAC 2027";
  summary: string;
  content: {
    theory: React.ReactNode;
    standardExercises: Exercise[];
    hardExercises: Exercise[];
  };
}

interface Exercise {
  id: number;
  question: string;
  mathQuestion?: string;
  solution: string;
  mathSolution?: string;
}

const lessons: Lesson[] = [
  {
    id: "l1",
    title: "الدوال والعمليات عليها",
    category: "2AS",
    summary: "دراسة تغيرات الدوال وتعيين مجموعات التعريف والعمليات الجبرية.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            لتكن f و g دالتين معرفتين على <InlineMath math="D_f" /> و <InlineMath math="D_g" /> على التوالي. نعرف مجموع الدالتين f+g كما يلي:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="(f+g)(x) = f(x) + g(x)" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            تكون مجموعة تعريف الدالة (f+g) هي تقاطع مجموعتي التعريف: <InlineMath math="D_{f+g} = D_f \cap D_g" />
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "عين مجموعة تعريف الدالة f المعرفة بـ:",
          mathQuestion: "f(x) = \frac{1}{x-2} + \sqrt{x+1}",
          solution: "يجب أن يكون المقام غير معدوم وما تحت الجذر موجباً أو معدوماً.\nأي x-2 ≠ 0 و x+1 ≥ 0\nوبالتالي x ≠ 2 و x ≥ -1\nمجموعة التعريف هي: Df = [-1, 2[ ∪ ]2, +∞[",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "تحدي: ادرس شفعية الدالة f المعرفة بـ:",
          mathQuestion: "f(x) = \frac{x^2 + 1}{|x|}",
          solution: "مجموعة التعريف هي R* وهي متناظرة بالنسبة للصفر.\nf(-x) = ((-x)^2 + 1) / |-x| = (x^2 + 1) / |x| = f(x)\nإذن الدالة f زوجية.",
        }
      ]
    }
  },
  {
    id: "l-der",
    title: "الاشتقاقية",
    category: "2AS",
    summary: "تعريف العدد المشتق، الدالة المشتقة وتطبيقاتها في دراسة التغيرات.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            نقول أن الدالة f قابلة للاشتقاق عند <InlineMath math="x_0" /> إذا كانت النهاية التالية موجودة ومنتهية:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} = f'(x_0)" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            العدد <InlineMath math="f'(x_0)" /> يسمى العدد المشتق للدالة f عند <InlineMath math="x_0" /> ويمثل ميل المماس عند تلك النقطة.
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "احسب مشتقة الدالة التالية:",
          mathQuestion: "f(x) = 3x^2 - 5x + 2",
          solution: "باستخدام قواعد الاشتقاق:\nf'(x) = 3(2x) - 5(1) + 0 = 6x - 5",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "أوجد معادلة المماس للمنحنى عند النقطة ذات الفاصلة 1 للدالة:",
          mathQuestion: "f(x) = \frac{x}{x+1}",
          solution: "أولاً نحسب f(1) = 1/(1+1) = 0.5\nثانياً نحسب f'(x) = (1(x+1) - 1(x)) / (x+1)^2 = 1/(x+1)^2\nf'(1) = 1/(1+1)^2 = 1/4 = 0.25\nمعادلة المماس: y = f'(1)(x-1) + f(1)\ny = 0.25(x-1) + 0.5 => y = 0.25x + 0.25",
        }
      ]
    }
  },
  {
    id: "l-prob",
    title: "الاحتمالات",
    category: "2AS",
    summary: "مبادئ العد، الاحتمالات المتساوية، والنمذجة العشوائية.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            في حالة تساوي الاحتمال، يحسب احتمال حادثة A بالقانون:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="P(A) = \frac{\text{عدد الحالات الملائمة}}{\text{عدد الحالات الممكنة}}" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            دائماً لدينا <InlineMath math="0 \leq P(A) \leq 1" />.
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "نرمي حجرة نرد متوازنة ذات 6 أوجه. ما احتمال الحصول على رقم زوجي؟",
          solution: "الحالات الممكنة: {1, 2, 3, 4, 5, 6} (عددها 6)\nالحالات الملائمة (زوجي): {2, 4, 6} (عددها 3)\nالاحتمال هو: P = 3/6 = 0.5",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "يحتوي كيس على 3 كرات حمراء و 2 خضراء. نسحب كرتين على التوالي بدون إرجاع. ما احتمال سحب كرتين من نفس اللون؟",
          solution: "عدد الحالات الممكنة: 5 × 4 = 20\nحالات (حمراء، حمراء): 3 × 2 = 6\nحالات (خضراء، خضراء): 2 × 1 = 2\nإجمالي الحالات الملائمة: 6 + 2 = 8\nالاحتمال: P = 8/20 = 0.4",
        }
      ]
    }
  },
  {
    id: "l-bar",
    title: "المرجح",
    category: "2AS",
    summary: "مرجح نقطتين، ثلاث نقاط وتطبيقاته الهندسية في المستوي.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            G هي مرجح الجملة المثقلة <InlineMath math="\{(A,\alpha), (B,\beta)\}" /> إذا وفقط إذا كان:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="\alpha \vec{GA} + \beta \vec{GB} = \vec{0}" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            بشرط أن يكون <InlineMath math="\alpha + \beta \neq 0" />.
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "لتكن A و B نقطتين حيث AB=4cm. عين موضع G مرجح (A,1) و (B,3).",
          solution: "باستخدام علاقة شال: AG = (β / (α+β)) AB\nAG = (3 / (1+3)) AB = 3/4 AB\nإذن G تبعد عن A بمسافة 3cm باتجاه B.",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "أثبت أن مرجح ثلاث نقاط A, B, C بأوزان متساوية هو مركز ثقل المثلث.",
          solution: "إذا كانت الأوزان متساوية (مثلاً 1)، فإن: GA + GB + GC = 0\nوهذا هو تعريف مركز ثقل المثلث حيث يتلاقى المتوسطات.",
        }
      ]
    }
  },
  {
    id: "l-lim",
    title: "النهايات",
    category: "2AS",
    summary: "حساب النهايات عند الأعداد وعند المالانهاية، وإزالة حالات عدم التعيين.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            نهاية دالة ناطقة عند <InlineMath math="\pm\infty" /> هي نهاية حاصل قسمة الحدين الأعلى درجة.
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="\lim_{x \to +\infty} \frac{ax^n + \dots}{bx^m + \dots} = \lim_{x \to +\infty} \frac{ax^n}{bx^m}" />
          </div>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "احسب النهاية التالية:",
          mathQuestion: "\lim_{x \to +\infty} \frac{2x^2 - 3}{x^2 + 5}",
          solution: "نأخذ أعلى درجة في البسط والمقام:\nlim (2x²/x²) = 2",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "أزل حالة عدم التعيين:",
          mathQuestion: "\lim_{x \to 1} \frac{x^2 - 1}{x - 1}",
          solution: "بالتحليل: x² - 1 = (x-1)(x+1)\nتصبح النهاية: lim (x-1)(x+1)/(x-1) = lim (x+1) = 1 + 1 = 2",
        }
      ]
    }
  },
  {
    id: "l-ang",
    title: "الزوايا الموجهة",
    category: "2AS",
    summary: "الراديان، الدائرة المثلثية، وخواص قيس زاوية موجهة.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            قيس زاوية موجهة لثنائية من الأشعة <InlineMath math="(\vec{u}, \vec{v})" /> يعطى بـ:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="(\vec{u}, \vec{v}) = \theta + 2k\pi \quad (k \in \mathbb{Z})" />
          </div>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "حول 60 درجة إلى الراديان.",
          solution: "القاعدة: π r = 180°\nالراديان = (60 × π) / 180 = π/3 rad",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "عين القيس الرئيسي للزاوية: 13π/4",
          solution: "13π/4 = (16π - 3π)/4 = 4π - 3π/4 = 2(2π) - 3π/4\nبما أن -3π/4 تنتمي للمجال ]-π, π]، فهي القيس الرئيسي.",
        }
      ]
    }
  },
  {
    id: "l-trans",
    title: "التحويلات النقطية",
    category: "2AS",
    summary: "الانسحاب، التحاكي، والدوران في المستوي الهندسبي.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            التحاكي الذي مركزه <InlineMath math="\Omega" /> ونسبته k يحول M إلى M' حيث:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="\vec{\Omega M'} = k \vec{\Omega M}" />
          </div>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "صورة نقطة A بالانسحاب الذي شعاعه v(2, 3) إذا كانت A(1, 1).",
          solution: "A'(1+2, 1+3) = A'(3, 4)",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "عين نسبة التحاكي الذي يحول مثلث مساحته 4cm² إلى مثلث مساحته 36cm².",
          solution: "النسبة بين المساحات هي k²\nk² = 36/4 = 9\nإذن k = 3 أو k = -3",
        }
      ]
    }
  },
  {
    id: "l-scal",
    title: "الجداء السلمي",
    category: "2AS",
    summary: "تعريف الجداء السلمي، خواصه، وتطبيقاته في حساب المسافات والزوايا.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            الجداء السلمي لشعاعين <InlineMath math="\vec{u}" /> و <InlineMath math="\vec{v}" /> هو:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="\vec{u} \cdot \vec{v} = \|\vec{u}\| \cdot \|\vec{v}\| \cdot \cos(\theta)" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            في معلم متعامد ومتجانس: <InlineMath math="\vec{u} \cdot \vec{v} = xx' + yy'" />
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "احسب الجداء السلمي لـ u(3, 4) و v(-2, 1).",
          solution: "u.v = (3 × -2) + (4 × 1) = -6 + 4 = -2",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "بين أن الشعاعين u(2, 3) و v(-6, 4) متعامدان.",
          solution: "نحسب الجداء السلمي: u.v = (2 × -6) + (3 × 4) = -12 + 12 = 0\nبما أن الجداء السلمي معدوم، فالشعاعان متعامدان.",
        }
      ]
    }
  },
  {
    id: "l-seq",
    title: "المتتاليات العددية",
    category: "2AS",
    summary: "المتتاليات الحسابية والهندسية، طرق التعريف، وحساب الحدود والمجاميع.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            الحد العام لمتتالية حسابية حدها الأول <InlineMath math="u_0" /> وأساسها r:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="u_n = u_0 + n \cdot r" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            مجموع الحدود: <InlineMath math="S_n = \frac{n+1}{2}(u_0 + u_n)" />
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "متتالية حسابية فيها u0=2 و r=3. احسب u10.",
          solution: "u10 = u0 + 10r = 2 + 10(3) = 2 + 30 = 32",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "متتالية هندسية حدها الأول 1 وأساسها 2. احسب مجموع أول 10 حدود.",
          solution: "S = u0 * (1 - q^n) / (1 - q)\nS = 1 * (1 - 2^10) / (1 - 2) = (1 - 1024) / -1 = 1023",
        }
      ]
    }
  },
  {
    id: "l-geo",
    title: "الهندسة في الفضاء",
    category: "2AS",
    summary: "المستقيمات والمستويات في الفضاء، التوازي والتعامد.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            يكون مستقيم (D) عامودياً على مستوى (P) إذا كان عامودياً على مستقيمين متقاطعين من (P).
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border flex justify-center">
             {/* 3D Geometry representation can go here */}
             <div className="w-full h-32 bg-primary/5 border border-dashed border-primary/30 flex items-center justify-center text-xs italic text-primary">
               تمثيل هندسي للفضاء ثلاثي الأبعاد
             </div>
          </div>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "في مكعب ABCDEFGH، ما هي الوضعية النسبية للمستقيمين (AB) و (CD)؟",
          solution: "المستقيمان (AB) و (CD) متوازيان لأنهما ضلعان متقابلان في المربع ABCD.",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "أثبت أن قطر المكعب (AG) يعامد المستوى (BDE) في مكعب طول ضلعه a.",
          solution: "يتطلب الإثبات استخدام الجداء السلمي في الفضاء أو مبرهنة الأعمدة الثلاثة، حيث نبين أن AG يعامد شعاعين غير متوازيين من المستوى BDE.",
        }
      ]
    }
  },
  {
    id: "l2",
    title: "الأعداد المركبة - الترميز الأسي",
    category: "BAC 2027",
    summary: "الانتقال من الشكل الجبري إلى الشكل الأسي وخصائص العمدة.",
    content: {
      theory: (
        <div className="space-y-4 text-right">
          <p className="text-muted-foreground leading-relaxed">
            كل عدد مركب غير معدوم z يكتب على الشكل الأسي:
          </p>
          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
            <BlockMath math="z = r e^{i\theta}" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            حيث <InlineMath math="r = |z|" /> هو الطويلة و <InlineMath math="\theta = \text{arg}(z)" /> هو العمدة.
          </p>
        </div>
      ),
      standardExercises: [
        {
          id: 1,
          question: "أكتب العدد المركب التالي على الشكل الأسي:",
          mathQuestion: "z = 1 + i",
          solution: "نحسب الطويلة: r = √(1² + 1²) = √2\nنجد العمدة: cos(θ) = 1/√2, sin(θ) = 1/√2\nإذن θ = π/4\nالشكل الأسي هو: z = √2 e^(iπ/4)",
        }
      ],
      hardExercises: [
        {
          id: 2,
          question: "التحدي الأكبر: حل في C المعادلة التالية واستنتج الشكل الأسي للحلول:",
          mathQuestion: "z^2 - 2\cos(\alpha)z + 1 = 0",
          solution: "نحسب المميز Δ = (2cosα)^2 - 4 = 4cos^2α - 4 = -4(1 - cos^2α) = -4sin^2α = (2isinα)^2\nالحلول هي: z = cosα ± isinα\nالشكل الأسي: z1 = e^(iα) و z2 = e^(-iα)",
        }
      ]
    }
  }
];

const ExerciseBlock = ({ exercise }: { exercise: Exercise }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card/10 mt-6 group">
      <div className="p-5 flex justify-between items-center bg-secondary/20">
        <h4 className="font-bold flex items-center gap-2 text-primary">
          <CheckCircle2 className="w-5 h-5" />
          تمرين {exercise.id}
        </h4>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-2 text-sm font-semibold bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg transition-colors"
        >
          {showSolution ? <><EyeOff className="w-4 h-4" /> إخفاء الحل</> : <><Eye className="w-4 h-4" /> عرض الحل</>}
        </button>
      </div>
        <div className="p-6 text-right space-y-3">
          <p className="text-foreground">{exercise.question}</p>
          {exercise.mathQuestion && (
            <div className="py-2 bg-secondary/20 p-3 rounded-lg flex justify-center">
              <InlineMath math={exercise.mathQuestion} />
            </div>
          )}
          
          {showSolution && (
            <div className="mt-4 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="bg-accent/5 p-4 rounded-lg border-r-4 border-primary">
                <span className="block text-primary font-bold mb-2">الحل النموذجي:</span>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {exercise.solution}
                </p>
                {exercise.mathSolution && (
                  <div className="mt-2 bg-secondary/20 p-3 rounded-lg flex justify-center">
                    <InlineMath math={exercise.mathSolution} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

    </div>
  );
};

export default function LessonLibrary() {
  const [activeCategory, setActiveCategory] = useState<"2AS" | "BAC 2027">("BAC 2027");
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[1]);

  const filteredLessons = lessons.filter(l => l.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-6xl mx-auto text-right">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            <span>مكتبة الدروس التفاعلية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            استكشف <span className="text-primary glow-text-primary">وحدات التعلم</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            محتوى تعليمي غني تم إعداده بدقة ليناسب منهاج السنة الثانية ثانوي وتحضيرات بكالوريا 2027.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-secondary/50 p-1 rounded-xl border border-border flex w-fit">
            {(["2AS", "BAC 2027"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const first = lessons.find(l => l.category === cat);
                  if (first) setSelectedLesson(first);
                }}
                className={`px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white glow-border-primary shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat === "2AS" ? "السنة الثانية ثانوي" : "بكالوريا 2027"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Nav */}
          <aside className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-4 glass-panel">
              <h3 className="text-sm font-bold text-muted-foreground px-4 mb-4 uppercase tracking-wider">الدروس المتوفرة</h3>
              <div className="space-y-2">
                {filteredLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLesson(lesson)}
                    className={`w-full text-right p-4 rounded-xl transition-all border group flex items-center justify-between ${
                      selectedLesson.id === lesson.id
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-transparent border-transparent text-muted-foreground hover:bg-white/5 hover:border-border"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-2">
                        {lesson.title}
                      </div>
                      <p className="text-xs opacity-70 line-clamp-1">{lesson.summary}</p>
                    </div>
                    <ChevronLeft className={`w-5 h-5 transition-transform ${selectedLesson.id === lesson.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <BookOpen className="w-16 h-16 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">هل تحتاج للمزيد؟</h4>
              <p className="text-sm text-muted-foreground mb-4">اشترك في الدورة الكاملة للحصول على تمارين إإضافية وملخصات PDF.</p>
              <button className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:brightness-110 transition-all shadow-md active:scale-95">
                تواصل معنا
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8 bg-card border border-border rounded-2xl p-6 md:p-10 glass-panel min-h-[600px] order-1 lg:order-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-border gap-4">
              <div className="text-right">
                <span className="text-xs bg-primary/20 text-primary font-bold px-3 py-1 rounded-full mb-2 inline-block">
                  {selectedLesson.category}
                </span>
                <h1 className="text-3xl font-extrabold text-foreground">{selectedLesson.title}</h1>
              </div>
              <div className="flex items-center gap-2">
                 <button className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"><ChevronRight className="w-5 h-5 text-muted-foreground" /></button>
                 <button className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"><ChevronLeft className="w-5 h-5 text-muted-foreground" /></button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 justify-end">
                المحتوى النظري
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              </h3>
              {selectedLesson.content.theory}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 justify-end">
                التمارين النموذجية (Standard)
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
              </h3>
              <div className="space-y-6">
                {selectedLesson.content.standardExercises.map((exercise) => (
                  <ExerciseBlock key={exercise.id} exercise={exercise} />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 justify-end">
                التحديات الكبرى (Hard Questions)
                <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
              </h3>
              <div className="space-y-6">
                {selectedLesson.content.hardExercises.map((exercise) => (
                  <ExerciseBlock key={exercise.id} exercise={exercise} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
