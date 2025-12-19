'use client';

import React, { useState } from 'react';
import { CheckCircle2, Circle, GraduationCap, Brain, Layout, Lightbulb, Trophy, ChevronDown, BookOpen, ClipboardCheck } from 'lucide-react';

interface Lesson {
  title: string;
  topics: string[];
  explanation: string;
  exercises: string[];
}

interface RoadmapItem {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: React.ReactNode;
  date: string;
  lessons?: Lesson[];
}

const roadmapData: RoadmapItem[] = [
  {
    title: "تأسيس المفاهيم الأساسية",
    description: "مراجعة شاملة للمكتسبات القبلية من السنة الثانية ثانوي مع التركيز على الدوال والنهايات.",
    status: "completed",
    icon: <Brain className="w-6 h-6" />,
    date: "سبتمبر - أكتوبر"
  },
  {
    title: "برنامج مادة الرياضيات - السنة الثانية ثانوي",
    description: "دراسة شاملة للمحاور الأساسية مع تمارين وحلول تطبيقية",
    status: "current",
    icon: <Layout className="w-6 h-6" />,
    date: "2AS",
    lessons: [
      {
        title: "الدوال",
        topics: [
          "التعميمات حول الدوال",
          "دراسة خاصيات الدالة (التزايد، التناقص، التطرفات)",
          "دراسة شاملة للدالة وتمثيلها البياني"
        ],
        explanation: "دراسة معمقة لخصائص الدوال الحقيقية بما في ذلك مجال التعريف، الإشتقاقية، التغيرات، والتمثيل البياني.",
        exercises: [
          "إيجاد مجال تعريف دوال معقدة",
          "دراسة رتابة الدوال باستخدام المشتقة",
          "رسم منحنى دالة بعد دراسة كاملة"
        ]
      },
      {
        title: "الاستمرارية",
        topics: [
          "تعريف الاستمرارية عند نقطة",
          "الاستمرارية على مجال",
          "عدم الاستمرارية والقفزات"
        ],
        explanation: "فهم مفهوم استمرارية الدوال وتطبيقاته في حل المسائل الرياضية.",
        exercises: [
          "إثبات استمرارية دالة عند نقطة",
          "تحديد نقاط عدم الاستمرارية",
          "دراسة استمرارية دوال معرفة بأكثر من عبارة"
        ]
      },
      {
        title: "الاحتمالية",
        topics: [
          "مفاهيم أساسية في الاحتمالات",
          "قوانين الاحتمالات",
          "الاحتمال الشرطي"
        ],
        explanation: "دراسة مبادئ الاحتمالات وتطبيقاتها في حل المسائل العملية.",
        exercises: [
          "حساب احتمالات أحداث بسيطة ومركبة",
          "تطبيق قوانين الجمع والضرب",
          "حل مسائل الاحتمال الشرطي"
        ]
      },
      {
        title: "المرجح",
        topics: [
          "تعريف المرجح ونقطة التطبيق",
          "خصائص المرجح",
          "تطبيقات هندسية للمرجح"
        ],
        explanation: "استخدام المرجح في حل المسائل الهندسية وإثبات العلاقات المتجهية.",
        exercises: [
          "حساب إحداثيات مركز الثقل لنقاط",
          "إثبات علاقات باستخدام المرجح",
          "حل مسائل هندسية معقدة"
        ]
      },
      {
        title: "التعابيد",
        topics: [
          "الجداء السلمي",
          "الجداء المتجهي",
          "تطبيقات التعابيد"
        ],
        explanation: "دراسة العمليات المتجهية وتطبيقاتها في الهندسة.",
        exercises: [
          "حساب الجداء السلمي بين متجهين",
          "إيجاد المسافة بين نقطتين",
          "حل معادلات متجهية"
        ]
      },
      {
        title: "الزوايا الموجهة",
        topics: [
          "تعريف الزاوية الموجهة",
          "قياس الزوايا الموجهة",
          "العلاقات المثلثية في الزوايا الموجهة"
        ],
        explanation: "فهم مفهوم الزوايا الموجهة وخصائصها وتطبيقاتها الهندسية.",
        exercises: [
          "حساب قياس زاوية موجهة",
          "إثبات علاقات بين زوايا موجهة",
          "تطبيقات في المثلثات والدائرة"
        ]
      },
      {
        title: "التعويدات المثلثية",
        topics: [
          "الدوال المثلثية الأساسية",
          "المتطابقات المثلثية",
          "حل المعادلات المثلثية"
        ],
        explanation: "التعمق في الدوال المثلثية والعلاقات بينها.",
        exercises: [
          "تبسيط عبارات مثلثية",
          "حل معادلات مثلثية",
          "إثبات متطابقات مثلثية"
        ]
      },
      {
        title: "أجداء السلمي في المستوي",
        topics: [
          "تعريف الجداء السلمي",
          "خصائص الجداء السلمي",
          "تطبيقات هندسية"
        ],
        explanation: "استخدام الجداء السلمي في حل المسائل الهندسية في المستوي.",
        exercises: [
          "حساب الجداء السلمي بطرق مختلفة",
          "إثبات تعامد وتوازي مستقيمات",
          "إيجاد معادلة مستقيم ودائرة"
        ]
      },
      {
        title: "المتتاليات العددية",
        topics: [
          "تعريف المتتالية",
          "المتتاليات الحسابية والهندسية",
          "دراسة تقارب المتتاليات"
        ],
        explanation: "دراسة معمقة للمتتاليات العددية وخصائصها.",
        exercises: [
          "تحديد طبيعة متتالية (حسابية أو هندسية)",
          "حساب حدود ومجموع متتالية",
          "دراسة رتابة ونهاية متتالية"
        ]
      },
      {
        title: "الهندسة في الفضاء",
        topics: [
          "الأشعة والنقاط في الفضاء",
          "المستويات والمستقيمات",
          "التعامد والتوازي في الفضاء"
        ],
        explanation: "دراسة الأشكال الهندسية في الفضاء ثلاثي الأبعاد.",
        exercises: [
          "تحديد معادلة مستوي في الفضاء",
          "إثبات توازي أو تعامد مستقيمات ومستويات",
          "حساب المسافات والزوايا في الفضاء"
        ]
      }
    ]
  },
  {
    title: "وحدات الفصل الأول",
    description: "التعمق في المتتاليات العددية، الدوال الأسية واللوغاريتمية مع حل تمارين نموذجية.",
    status: "upcoming",
    icon: <Layout className="w-6 h-6" />,
    date: "نوفمبر - جانفي"
  },
  {
    title: "الاستعداد للمسابقة التجريبية",
    description: "حل مواضيع بكالوريا سابقة ومحاكاة ظروف الامتحان الرسمي لقياس المستوى.",
    status: "upcoming",
    icon: <Lightbulb className="w-6 h-6" />,
    date: "فيفري - مارس"
  },
  {
    title: "المراجعة النهائية والتميز",
    description: "التركيز على الأعداد المركبة، الهندسة الفضائية، والإحتمالات لضمان العلامة الكاملة.",
    status: "upcoming",
    icon: <GraduationCap className="w-6 h-6" />,
    date: "أفريل - ماي"
  },
  {
    title: "اجتياز بكالوريا 2027",
    description: "الوصول إلى قمة الجاهزية النفسية والعلمية لتحقيق التفوق المنشود.",
    status: "upcoming",
    icon: <Trophy className="w-6 h-6" />,
    date: "جوان 2027"
  }
];

const BacRoadmap = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden" dir="rtl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            خارطة الطريق نحو <span className="text-primary glow-text-primary">BAC 2027</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            خطوات مدروسة ومنظمة ترافقك من البداية وحتى تحقيق حلمك في النجاح والتميز الرياضي.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%] mr-16 md:mr-0">
                  <div className={`p-6 rounded-xl glass-panel border border-border group-hover:border-primary/50 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(0,163,255,0.15)]`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-primary/80 uppercase tracking-wider bg-primary/5 px-2 py-1 rounded border border-primary/20">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    {/* Lessons Expansion */}
                    {item.lessons && (
                      <div className="mt-4">
                        <button
                          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>{expandedIndex === index ? 'إخفاء الدروس' : 'عرض الدروس المفصلة'}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedIndex === index && (
                          <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                            {item.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="p-4 rounded-lg bg-card/50 border border-border/50">
                                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                  <span className="text-primary">•</span>
                                  {lesson.title}
                                </h4>
                                
                                <div className="mb-3">
                                  <p className="text-sm text-muted-foreground mb-2">{lesson.explanation}</p>
                                  <div className="text-xs font-semibold text-primary/70 mb-1">المحاور:</div>
                                  <ul className="space-y-1">
                                    {lesson.topics.map((topic, topicIndex) => (
                                      <li key={topicIndex} className="text-xs text-muted-foreground mr-4">
                                        ◦ {topic}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="mt-3 p-3 rounded bg-primary/5 border border-primary/10">
                                  <div className="flex items-center gap-2 mb-2">
                                    <ClipboardCheck className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold text-primary">تمارين تطبيقية:</span>
                                  </div>
                                  <ul className="space-y-1">
                                    {lesson.exercises.map((exercise, exerciseIndex) => (
                                      <li key={exerciseIndex} className="text-xs text-muted-foreground mr-4">
                                        ✓ {exercise}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute right-6 md:right-1/2 md:translate-x-1/2 flex items-center justify-center">
                  <div className={`z-20 flex items-center justify-center w-5 h-5 rounded-full border-2 bg-background transition-all duration-300 ${
                    item.status === 'completed' 
                    ? 'border-primary bg-primary text-white shadow-[0_0_10px_rgba(0,163,255,0.6)]' 
                    : item.status === 'current'
                    ? 'border-primary animate-pulse shadow-[0_0_15px_rgba(0,163,255,0.4)]'
                    : 'border-muted-foreground/30'
                  }`}>
                    {item.status === 'completed' && <CheckCircle2 className="w-3 h-3" />}
                    {item.status === 'current' && <Circle className="w-2 h-2 fill-primary" />}
                  </div>
                </div>
                
                {/* Empty space for alternative side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-1 px-4 rounded-full border border-border bg-card/30 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-sm font-medium text-muted-foreground">
              التحديث القادم: مراجعة شاملة لإختبارات الفصل الثاني
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BacRoadmap;