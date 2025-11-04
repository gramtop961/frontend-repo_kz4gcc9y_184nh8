import { GraduationCap, BookOpenText, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-5xl px-6 pt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
              <GraduationCap size={22} />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">باحث</h1>
              <p className="text-sm text-gray-500">مولِّد بحوث جامعية بالعنوان</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-indigo-600">
            <Sparkles size={18} />
            <span className="text-sm font-medium">ذكاء اصطناعي مساعد</span>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-6 ring-1 ring-black/5">
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-lg bg-white/70 p-2 shadow-sm ring-1 ring-black/5">
              <BookOpenText className="text-indigo-600" size={20} />
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-900">حوّل العنوان إلى مسودة بحثية متكاملة</h2>
              <p className="mt-1 text-sm text-gray-600">
                اكتب عنوان بحثك لنقترح عليك ملخصًا، أهدافًا، منهجية، ومحاور رئيسية مع مراجع مقترحة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
