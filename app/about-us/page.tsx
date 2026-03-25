"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-right" dir="rtl">
      {/* قسم المحتوى الأساسي */}
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-4xl mx-auto leading-relaxed text-lg text-gray-700 space-y-10">
        {/* مين إحنا؟ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">مين إحنا؟</h2>
          <p>
            في Fit Check، بدأنا بمهمة واحدة بسيطة: إن كل بنت تستحق تلبس شيك،
            مميزة، وجودتها عالية، والأهم من ده كله.. بسعر معقول.
            <br />
            <br />
            إحنا هنا عشان نكسر معادلة (الغالي تمنه فيه) ونخلي الأناقة متاحة لكل
            البنات بكليكة واحدة! 🖱️💖
          </p>
        </section>

        {/* ليه تشتري من الويب سايت؟ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ليه تشتري من الويب سايت بتاعنا؟
          </h2>

          <ul className="list-disc pr-6 space-y-3">
            <li>
              كل الشغل في مكان واحد: مش هتضطري تدوري في بوستات قديمة، كل
              الكوليكشن قدامك ومنظم.
            </li>
            <li>
              شفافية 100%: بنعرض لكِ القطع بـ ألوانها الحقيقية ومن غير فلاتر،
              وبنوضح نوع الخامات بالتفصيل.
            </li>
            <li>
              مقاسك بالمللي: بنكتب لكِ تفاصيل المقاسات بالظبط عشان تطلبي وإنتي
              واثقة إن القطعة هتيجي "Fit" عليكي.
            </li>
            <li>أسعار واضحة: مفيش "السعر إنبوكس"، كل حاجة معلنة بكل وضوح.</li>
          </ul>
        </section>

        {/* خدمة العملاء */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            إحنا معاكي دايماً 💬
          </h2>
          <p>
            ثقتك هي رأس مالنا، وعشان كدة خدمة العملاء عندنا متوفرة 24 ساعة. لو
            عندك أي سؤال عن مقاس، خامة، أو حتى محتاجة نصيحة في التنسيق (Styling
            Tips)، فريقنا جاهز يرد عليكي في أي وقت.
          </p>
        </section>

        {/* السوشيال ميديا */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            خليكي قريبة من عيلة Fit Check 🌸
          </h2>

          <p className="mb-4">
            تابعينا على كل المنصات عشان تشوفي آراء البنات وتعرفي الكوليكشنز
            الجديدة أول بأول:
          </p>

          <ul className="space-y-3">
            <li>
              <span className="font-semibold">Facebook Page:</span>
              <span className="text-pink-600">
                <a
                  href="https://www.facebook.com/profile.php?id=61582168142997"
                  target="_blank"
                >
                  [لينك الصفحة]
                </a>
              </span>
            </li>

            <li>
              <span className="font-semibold">Facebook Group:</span>
              <a
                href="https://www.facebook.com/groups/750706561027930"
                target="_blank"
              >
                <span className="text-pink-600">
                  {" "}
                  [لينك الجروب - حيث تكتمل العيلة!]{" "}
                </span>
              </a>
            </li>
            <li>
              <span className="font-semibold">Whatsapp Group:</span>
              <a
                href="https://chat.whatsapp.com/ErWfitTkYae94R1nadG77L?mode=gi_t"
                target="_blank"
              >
                <span className="text-pink-600">
                  {" "}
                  [لينك الجروب - حيث تكتمل العيلة!]{" "}
                </span>
              </a>
            </li>

            <li>
              <span className="font-semibold">WhatsApp:</span>
              <span className="text-pink-600">
                {" "}
                <a href="https://wa.me/201097541307" target="_blank">
                  {" "}
                  [لينك الواتساب للطلب السريع]{" "}
                </a>
              </span>
            </li>
            <li>
              <span className="font-semibold">Instagram:</span>
              <span className="text-pink-600">
                <a
                  href="https://www.instagram.com/fitcheck.justclick/"
                  target="_blank"
                >
                  {" "}
                  [ @fitcheck.justclick]{" "}
                </a>{" "}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
