import { ShieldCheck, AlertCircle, RefreshCcw, Truck } from "lucide-react";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-secondary mb-4">
            سياسة الاستبدال والاسترجاع
          </h1>
          <p className="text-gray-500">
            شفافيتنا هي سر ثقتكم.. دليلكم الكامل للتعامل مع حالات الديفو
          </p>
        </div>

        <div className="grid gap-8">
          {/* Section 1: Definition */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-secondary">
              <AlertCircle size={28} />
              <h2 className="text-xl font-bold">يعني إيه "ديفو"؟</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              الديفو هو وجود مشكلة فنية واضحة في القطعة، مثل:{" "}
              <span className="font-bold text-red-500">
                تنسيل في القماش، قطع، أو مشكلة كبيرة في الخياطة
              </span>{" "}
              تجعل القطعة غير قابلة للاستخدام بشكلها الطبيعي.
            </p>
          </div>

          {/* Section 2: When we accept */}
          <div className="bg-green-50 p-6 md:p-8 rounded-3xl border border-green-100">
            <div className="flex items-center gap-3 mb-4 text-[#546E3C]">
              <RefreshCcw size={28} />
              <h2 className="text-xl font-bold">متى يتم قبول الاستبدال؟</h2>
            </div>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>
                إذا كان العيب مأثراً بشكل مباشر على شكل القطعة (تنسيل أو قطع ليس
                له علاج).
              </li>
              <li>
                <span className="font-bold">الإجراء:</span> يتم شحن القطعة لنا،
                ويضاف البديل في أوردرك القادم مباشرة (لا يوجد إلغاء نهائي).
              </li>
              <li>
                <span className="font-bold">التكلفة:</span> يتم خصم قيمة شحن هذه
                القطعة من أوردرك القادم.
              </li>
              <li className="text-red-600 font-bold bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                شرط أساسي: التبليغ عن الديفو خلال ٢٤ ساعة من الاستلام، ويتم
                الشحن لنا في اليوم التالي مباشرة.
              </li>
            </ul>
          </div>

          {/* Section 3: When we don't accept */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <ShieldCheck size={28} />
              <h2 className="text-xl font-bold text-secondary">
                حالات لا تعتبر "ديفو" تستحق الشحن
              </h2>
            </div>
            <div className="space-y-6">
              {/* <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gray-300 shrink-0"></div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800 italic">
                    فكة خياطة بسيطة:
                  </span>{" "}
                  إذا كانت القطعة تحتاج خياطة بسيطة (تكلفة من 5 لـ 10 جنيه)، يتم
                  إصلاحها ومعوضتك بخصم التكلفة من أوردرك القادم فوراً.
                </p>
              </div> */}
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-gray-300 shrink-0"></div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800 italic">
                    عيوب الطباعة الطفيفة:
                  </span>{" "}
                  الأجزاء الصغيرة جداً التي لا تؤثر على المظهر العام للقطعة لا
                  تعتبر ديفو، نظراً لأن أسعارنا "على قد الإيد".
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center py-6">
            <p className="text-secondary font-medium italic" dir="rtl">
              "نحن نراجع كل قطعة بكل حب ودقة، ونادراً ما تصل قطعة بها مشكلة..
              دعواتكم لنا بالاستمرار على هذا المستوى وافضل. "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
