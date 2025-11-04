import { useState } from "react";
import { Wand2, Loader2 } from "lucide-react";

export default function ResearchForm({ onGenerate }) {
  const [title, setTitle] = useState("");
  const [discipline, setDiscipline] = useState("عام");
  const [lang, setLang] = useState("ar");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    // Simulate async generation
    setTimeout(() => {
      onGenerate(generateResearch(title.trim(), discipline, lang));
      setLoading(false);
    }, 600);
  };

  return (
    <section className="mx-auto mt-8 max-w-5xl px-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5"
      >
        <div className="flex flex-col gap-4 sm:flex-row-reverse">
          <input
            type="text"
            dir="rtl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="اكتب عنوان البحث (مثال: أثر الذكاء الاصطناعي في التعليم الجامعي)"
            className="flex-1 rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-right text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <div className="flex gap-3">
            <select
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none"
            >
              <option>عام</option>
              <option>تقنية معلومات</option>
              <option>تربية</option>
              <option>إدارة</option>
              <option>علوم إنسانية</option>
              <option>طب وصحة</option>
            </select>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-4 py-3 text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={18} />
                  جاري الإنشاء
                </>
              ) : (
                <>
                  <Wand2 className="ml-2" size={18} />
                  أنشئ المسودة
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

// Lightweight client-side generator for demo purposes
function generateResearch(title, discipline, lang) {
  const now = new Date().getFullYear();
  const t = title;

  const keywords = extractKeywords(t);

  const outline = [
    "المقدمة",
    "الإطار النظري والدراسات السابقة",
    "المنهجية والإجراءات",
    "النتائج والمناقشة",
    "الخاتمة والتوصيات",
  ];

  const aims = [
    `تحليل ${t} ضمن سياق ${discipline}.`,
    `استكشاف التحديات والفرص المرتبطة بـ ${t}.`,
    `اقتراح إطار تطبيقي أو توصيات عملية لتعزيز ${t}.`,
  ];

  const methods = [
    "منهج وصفي تحليلي",
    "مراجعة أدبية منهجية",
    "استبيانات ومقابلات شبه مقننة (عند الحاجة)",
  ];

  const abstractAr = `يتناول هذا البحث ${t} عبر عرض تمهيدي للمفهوم وأهميته، ثم مراجعة أدبية موجزة لأبرز الدراسات ذات الصلة. يعتمد البحث منهجًا وصفيًا تحليليًا مدعومًا بأمثلة تطبيقية حيثما أمكن. تشير النتائج الأولية إلى وجود اتجاهات مؤثرة تتطلب إطارًا تنظيميًا وتوصيات عملية لتعظيم الفائدة وتقليل المخاطر.`;

  const abstractEn = `This study explores ${t}, outlining its significance and surveying related literature. A descriptive-analytical approach is adopted, supported by illustrative examples. Preliminary insights indicate meaningful trends that call for structured frameworks and practical recommendations.`;

  const refs = makeReferences(keywords, now);

  return {
    title: t,
    discipline,
    lang,
    outline,
    aims,
    methods,
    abstract: lang === "ar" ? abstractAr : abstractEn,
    keywords,
    references: refs,
  };
}

function extractKeywords(text) {
  return Array.from(
    new Set(
      text
        .replace(/[\u0600-\u06FFa-zA-Z0-9]+/g, (w) => w)
        .split(/\s|[،,:؛().\-]+/)
        .filter((w) => w && w.length > 2)
    )
  )
    .slice(0, 7)
    .map((w) => w.toLowerCase());
}

function makeReferences(keywords, year) {
  const base = keywords.slice(0, 3).map((k, i) => ({
    author: i === 0 ? "Smith, J." : i === 1 ? "Al-Rashid, M." : "Chen, L.",
    year: year - i,
    title: `A study on ${k} in higher education`,
    source: i % 2 === 0 ? "Journal of Educational Technology" : "International Review of Research",
  }));

  return base.concat([
    {
      author: "UNESCO",
      year: year - 1,
      title: "Guidelines on Research Integrity in Universities",
      source: "UNESCO Publications",
    },
  ]);
}
