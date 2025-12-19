"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Book, Activity, Cpu, ShieldAlert, Binary, Network, Fingerprint } from 'lucide-react';

export default function InsightsPage() {
  const articles = [
    {
      id: "math-med",
      title: "تقاطع الرياضيات البحتة في التشخيص الطبي والهندسة الإنشائية",
      author: "عبد الجليل قنيبر",
      date: "ديسمبر 2024",
      icon: Activity,
      abstract: "تستكشف هذه الورقة الدور الحاسم للنمذجة الرياضية كجسر بين المجالات التقنية المتباينة. من خلال تحليل تطبيق العمليات العشوائية والمعادلات التفاضلية، نوضح كيف ترتبط الصرامة الرياضية الضرورية للتصوير التشخيصي الطبي ارتباطاً جوهرياً بتقييمات السلامة الإنشائية.",
      keywords: ["النمذجة العشوائية", "دقة التشخيص", "المسائل العكسية"],
      content: [
        {
          heading: "أولاً. الأسس الرياضية في التشخيص الطبي",
          text: "يتجذر تطور التشخيص الطبي غير الجراحي بعمق في تحويل رادون وتحليل فورييه. إن القدرة على إعادة بناء هيكل داخلي ثلاثي الأبعاد من إسقاطات أحادية البعد هي انتصار رياضي خالص يربط بين الفيزياء والطب الجزيئي."
        },
        {
          heading: "ثانياً. التآزر الهندسي",
          text: "في الهندسة، يتم تطبيق نفس المعادلات التفاضلية المستخدمة لنمذجة تدفق الدم لتحليل توزيع الإجهاد في الدعامات المعمارية. يعمل علم الرياضيات كمترجم عالمي يسمح للمهندسين بتطبيق أنماط التحسين البيولوجي على الهياكل الميكانيكية."
        }
      ]
    },
    {
      id: "ai-cyber",
      title: "الذكاء الاصطناعي في الأمن السيبراني: آفاق الدفاع الذاتي",
      author: "عبد الجليل قنيبر",
      date: "يناير 2025",
      icon: ShieldAlert,
      abstract: "نحلل في هذا المقال كيف يغير الذكاء الاصطناعي قواعد اللعبة في الأمن السيبراني. نركز على التحول من الأنظمة الدفاعية القائمة على القواعد إلى الأنظمة الذاتية القادرة على التعلم من السلوكيات البشرية واكتشاف التهديدات قبل وقوعها باستخدام الجبر الخطي المتقدم.",
      keywords: ["التعلم الآلي", "كشف الشذوذ", "تشفير ما بعد الكم"],
      content: [
        {
          heading: "أولاً. من القواعد الثابتة إلى التعلم المستمر",
          text: "الأمن التقليدي يعتمد على التوقيعات (Signatures)، لكن الذكاء الاصطناعي يعتمد على الأنماط (Patterns). من خلال معالجة مليارات نقاط البيانات، يمكن للنماذج العصبية تحديد السلوكيات المشبوهة التي قد تغيب عن العين البشرية أو الخوارزميات التقليدية."
        },
        {
          heading: "ثانياً. الرياضيات خلف الجدران النارية الذكية",
          text: "تعتمد قوة نماذجنا على فضاءات المتجهات عالية الأبعاد. يتم تمثيل كل حركة في الشبكة كنقطة في هذا الفضاء، وأي انحراف عن 'العنقود' الطبيعي يتم تصنيفه فوراً كتهديد محتمل، مما يسمح برد فعل في أجزاء من الثانية."
        },
          {
            heading: "ثالثاً. مستقبل التشفير في عصر الذكاء الاصطناعي",
            text: "مع ظهور الحوسبة الكمومية، نعمل على تطوير خوارزميات تشفير تعتمد على مشكلات رياضية معقدة مثل 'التعلم مع الأخطاء' (LWE)، والتي تظل عصية على الكسر حتى أمام أقوى النماذج الحاسوبية المستقبلية."
          },
            {
              heading: "رابعاً. الأخلاقيات والذكاء الاصطناعي الدفاعي",
              text: "لا تقتصر مهمتنا على بناء أنظمة قوية، بل بناء أنظمة عادلة وشفافة. إن مفهوم 'الذكاء الاصطناعي القابل للتفسير' (XAI) في الأمن السيبراني يضمن أننا نفهم لماذا تم تصنيف نشاط ما كتهديد، مما يقلل من التحيز البرمجي والإنذارات الكاذبة."
            },
            {
              heading: "خامساً. نحو استقلالية رقمية شاملة",
              text: "إن دمج الذكاء الاصطناعي في ترسانتنا الدفاعية ليس ترفاً تقنياً، بل هو ضرورة لتحقيق السيادة الرقمية. نحن نهدف إلى بناء بيئة تعليمية تخرج أجيالاً قادرة على ابتكار حلول أمنية جزائرية المنشأ، تساهم في حماية البنية التحتية الحيوية وتدفع عجلة الابتكار في الفضاء السيبراني العالمي."
            }
          ]
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
      
      <main className="flex-grow container mx-auto px-4 py-16 max-w-[1000px] relative z-10">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-[#00a3ff]/10 text-[#00a3ff] rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#00a3ff]/20"
          >
            المجلة العلمية
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">رؤى تكنولوجية</h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto font-medium">
            استكشاف أعمق للتقاطع بين الرياضيات، الذكاء الاصطناعي، والأمن الرقمي.
          </p>
        </header>

        <div className="space-y-24">
          {articles.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0f172a]/40 backdrop-blur-xl border border-[#1e293b] p-8 md:p-16 rounded-2xl relative group hover:border-[#00a3ff]/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <article.icon className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 border-b border-[#1e293b] pb-8">
                  <div className="text-right">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{article.title}</h2>
                    <div className="flex gap-6 text-sm text-[#94a3b8]">
                      <span className="flex items-center gap-2"><Binary className="w-4 h-4 text-[#00a3ff]" /> {article.author}</span>
                      <span className="flex items-center gap-2"><Network className="w-4 h-4 text-[#00a3ff]" /> {article.date}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                  <div className="md:col-span-4 space-y-8">
                    <div className="p-6 bg-[#00a3ff]/5 border-r-2 border-[#00a3ff] rounded-l-lg italic text-[#94a3b8] text-sm leading-relaxed text-justify">
                      {article.abstract}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.keywords.map(kw => (
                        <span key={kw} className="px-3 py-1 bg-[#1e293b] text-[10px] font-bold uppercase rounded-md text-[#f8fafc] border border-[#334155]">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-12 text-right">
                    {article.content.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <h3 className="text-lg font-bold text-[#00a3ff] flex items-center justify-end gap-3">
                          {section.heading}
                          <div className="w-2 h-2 rounded-full bg-[#00a3ff]" />
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-lg text-justify font-medium">
                          {section.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-16 border-t border-[#1e293b] text-center"
        >
          <div className="bg-[#00a3ff] text-white p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl font-black mb-6 relative z-10">هل ترغب في المساهمة البحثية؟</h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10 text-lg font-medium">
              نحن نبحث دائماً عن عقول شغوفة لاستكشاف حدود المعرفة الرياضية والتقنية.
            </p>
            <button className="bg-white text-[#00a3ff] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform relative z-10 flex items-center gap-2 mx-auto">
              تواصل مع المؤسس
              <Fingerprint className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
