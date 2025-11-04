import { useState } from "react";
import { ClipboardList, Target, FlaskConical, FileText, Link2 } from "lucide-react";

export default function OutputTabs({ data }) {
  const [tab, setTab] = useState("abstract");

  if (!data) {
    return (
      <section className="mx-auto mt-10 max-w-5xl px-6">
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
          اكتب عنوان البحث بالأعلى ثم اضغط على "أنشئ المسودة".
        </div>
      </section>
    );
  }

  const tabs = [
    { id: "abstract", label: "الملخص", icon: FileText },
    { id: "outline", label: "الخطة", icon: ClipboardList },
    { id: "aims", label: "الأهداف", icon: Target },
    { id: "methods", label: "المنهجية", icon: FlaskConical },
    { id: "refs", label: "مراجع مقترحة", icon: Link2 },
  ];

  return (
    <section className="mx-auto mt-8 max-w-5xl px-6">
      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
        <div className="flex flex-wrap items-center justify-end gap-2 border-b pb-3">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                  active
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon size={16} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6" dir="rtl">
          {tab === "abstract" && <Abstract data={data} />}
          {tab === "outline" && <Outline data={data} />}
          {tab === "aims" && <Aims data={data} />}
          {tab === "methods" && <Methods data={data} />}
          {tab === "refs" && <Refs data={data} />}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="mb-3 text-lg font-semibold text-gray-900">
      {children}
    </h3>
  );
}

function Abstract({ data }) {
  return (
    <div>
      <SectionTitle>الملخص</SectionTitle>
      <p className="leading-8 text-gray-700">{data.abstract}</p>
      <div className="mt-6">
        <SectionTitle>كلمات مفتاحية</SectionTitle>
        <div className="flex flex-wrap justify-end gap-2">
          {data.keywords.map((k) => (
            <span
              key={k}
              className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 ring-1 ring-indigo-200"
            >
              {k}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Outline({ data }) {
  return (
    <div>
      <SectionTitle>الخطة المقترحة</SectionTitle>
      <ol className="list-decimal pe-6 text-right leading-8 text-gray-700">
        {data.outline.map((item, idx) => (
          <li key={idx} className="mb-1">{item}</li>
        ))}
      </ol>
    </div>
  );
}

function Aims({ data }) {
  return (
    <div>
      <SectionTitle>أهداف البحث</SectionTitle>
      <ul className="list-disc pe-6 text-right leading-8 text-gray-700">
        {data.aims.map((aim, idx) => (
          <li key={idx} className="mb-1">{aim}</li>
        ))}
      </ul>
    </div>
  );
}

function Methods({ data }) {
  return (
    <div>
      <SectionTitle>المنهجية</SectionTitle>
      <ul className="list-disc pe-6 text-right leading-8 text-gray-700">
        {data.methods.map((m, idx) => (
          <li key={idx} className="mb-1">{m}</li>
        ))}
      </ul>
    </div>
  );
}

function Refs({ data }) {
  return (
    <div>
      <SectionTitle>مراجع مقترحة</SectionTitle>
      <ul className="space-y-3 text-right text-gray-700">
        {data.references.map((r, idx) => (
          <li key={idx} className="rounded-xl bg-gray-50 p-3 ring-1 ring-gray-200">
            <span className="font-semibold">{r.author}</span> ({r.year}). {r.title}. <em className="text-gray-600">{r.source}</em>.
          </li>
        ))}
      </ul>
    </div>
  );
}
