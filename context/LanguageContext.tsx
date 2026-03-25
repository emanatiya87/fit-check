import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  en: {
    // Navigation
    "nav.aboutUs": "About Us",
    "nav.contact": "Contact",
    "nav.tshirt": "T-Shirts",
    "nav.pants": "Pants",
    "nav.suits": "Suits",
    "nav.dresses": "Dresses",
    "nav.replacement": "Replacement Policy",

    // Home
    "home.banner": "Explore Summer Collection",
    "home.shopByCategory": "Shop By Category",
    "home.newProducts": "New Products",
    "home.outOfStock": "Out of Stock",
    "home.addToFavorites": "Add to Favorites",

    // Newsletter
    "newsletter.title": "Subscribe to Our Newsletter",
    "newsletter.description":
      "Get the latest updates on new products and special offers",
    "newsletter.placeholder": "Enter your email",
    "newsletter.button": "Subscribe",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.followUs": "Follow Us",
    "footer.rights": "© 2026 Fit Check. All rights reserved.",

    // Product Details
    "product.material": "Material",
    "product.availableColors": "Available Colors",
    "product.availableSizes": "Available Sizes",
    "product.sizeChart": "Size Chart",
    "product.orderWhatsapp": "Order on WhatsApp",
    "product.season": "Season",
    "product.inStock": "In Stock",
    "product.lastPiece": "Last Piece",

    // Category
    "category.filter": "Filter",
    "category.sort": "Sort By",
    "category.season": "Season",
    "category.winter": "Winter",
    "category.summer": "Summer",
    "category.stock": "Availability",
    "category.priceAsc": "Price: Low to High",
    "category.priceDesc": "Price: High to Low",
    "category.newest": "Newest First",

    // About
    "about.title": "About Fit Check",
    "about.description":
      "Welcome to Fit Check, your premier destination for trendy and stylish girls' clothing. We are passionate about providing high-quality fashion that makes every girl feel confident and beautiful.",
    "about.mission": "Our Mission",
    "about.missionText":
      "To deliver exceptional fashion experiences through carefully curated collections that blend style, comfort, and quality.",
    "about.vision": "Our Vision",
    "about.visionText":
      "To be the go-to fashion destination for girls who want to express their unique style and personality.",
    // About - Values
    "about.values": "Our Values",
    "about.valueQuality": "Quality",
    "about.valueQualityText":
      "We carefully select premium materials for all our products",

    "about.valueCustomer": "Customer Care",
    "about.valueCustomerText": "Your satisfaction is our top priority",

    "about.valueStyle": "Style",
    "about.valueStyleText":
      "Trendy designs that express your unique personality",
    // Contact
    "contact.title": "Get in Touch",
    "contact.description":
      "We'd love to hear from you! Reach out to us through any of these channels:",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.followUs": "Follow Us on Social Media",

    // Replacement
    "replacement.title": "Replacement & Return Policy",
    "replacement.intro":
      "At Fit Check, we want you to be completely satisfied with your purchase. Please read our policy carefully:",
    "replacement.section1": "Return Period",
    "replacement.section1Text":
      "Items can be returned within 7 days of delivery. Products must be unworn, unwashed, and in original packaging with all tags attached.",
    "replacement.section2": "Exchange Process",
    "replacement.section2Text":
      "To exchange an item, contact us on WhatsApp with your order details. We'll guide you through the exchange process.",
    "replacement.section3": "Refunds",
    "replacement.section3Text":
      "Refunds will be processed within 7-10 business days after we receive and inspect the returned item.",
    "replacement.section4": "Non-Returnable Items",
    "replacement.section4Text":
      "Sale items and final clearance products cannot be returned or exchanged unless defective.",
  },
  ar: {
    // Navigation
    "nav.aboutUs": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.tshirt": "تيشيرتات",
    "nav.pants": "بناطيل",
    "nav.suits": "أطقم",
    "nav.dresses": "فساتين",
    "nav.replacement": "سياسة الاستبدال",

    // Home
    "home.banner": "اكتشفي مجموعة الصيف",
    "home.shopByCategory": "تسوقي حسب الفئة",
    "home.newProducts": "المنتجات الجديدة",
    "home.outOfStock": "غير متوفر",
    "home.addToFavorites": "إضافة للمفضلة",

    // Newsletter
    "newsletter.title": "اشتركي في نشرتنا الإخبارية",
    "newsletter.description":
      "احصلي على آخر التحديثات حول المنتجات الجديدة والعروض الخاصة",
    "newsletter.placeholder": "أدخلي بريدك الإلكتروني",
    "newsletter.button": "اشتراك",

    // Footer
    "footer.quickLinks": "روابط سريعة",
    "footer.followUs": "تابعينا",
    "footer.rights": "© 2026 فت تشيك. جميع الحقوق محفوظة.",

    // Product Details
    "product.material": "الخامة",
    "product.availableColors": "الألوان المتاحة",
    "product.availableSizes": "المقاسات المتاحة",
    "product.sizeChart": "جدول المقاسات",
    "product.orderWhatsapp": "اطلبي عبر واتساب",
    "product.season": "الموسم",
    "product.inStock": "متوفر",
    "product.lastPiece": "آخر قطعة",

    // Category
    "category.filter": "تصفية",
    "category.sort": "ترتيب حسب",
    "category.season": "الموسم",
    "category.winter": "شتاء",
    "category.summer": "صيف",
    "category.stock": "التوفر",
    "category.priceAsc": "السعر: من الأقل للأعلى",
    "category.priceDesc": "السعر: من الأعلى للأقل",
    "category.newest": "الأحدث أولاً",

    // About
    "about.title": "عن فت تشيك",
    "about.description":
      "مرحباً بكِ في فت تشيك، وجهتك الأولى للأزياء العصرية والأنيقة للفتيات. نحن شغوفون بتقديم أزياء عالية الجودة تجعل كل فتاة تشعر بالثقة والجمال.",
    "about.mission": "مهمتنا",
    "about.missionText":
      "تقديم تجارب أزياء استثنائية من خلال مجموعات مختارة بعناية تجمع بين الأناقة والراحة والجودة.",
    "about.vision": "رؤيتنا",
    "about.visionText":
      "أن نكون الوجهة الأولى للأزياء للفتيات اللواتي يرغبن في التعبير عن أسلوبهن وشخصيتهن الفريدة.",
    // About - Values
    "about.values": "قيمنا",
    "about.valueQuality": "الجودة",
    "about.valueQualityText": "نختار بعناية خامات مميزة لجميع منتجاتنا",

    "about.valueCustomer": "العناية بالعملاء",
    "about.valueCustomerText": "رضاكِ هو أولويتنا الأولى",

    "about.valueStyle": "الأناقة",
    "about.valueStyleText": "تصاميم عصرية تعبر عن شخصيتكِ الفريدة",

    // Contact
    "contact.title": "تواصلي معنا",
    "contact.description":
      "نحب أن نسمع منكِ! تواصلي معنا عبر أي من هذه القنوات:",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.followUs": "تابعينا على وسائل التواصل الاجتماعي",

    // Replacement
    "replacement.title": "سياسة الاستبدال والإرجاع",
    "replacement.intro":
      "في فت تشيك، نريدك أن تكوني راضية تماماً عن مشترياتك. يرجى قراءة سياستنا بعناية:",
    "replacement.section1": "فترة الإرجاع",
    "replacement.section1Text":
      "يمكن إرجاع المنتجات خلال 7 أيام من التسليم. يجب أن تكون المنتجات غير مستخدمة وغير مغسولة وفي العبوة الأصلية مع جميع الملصقات.",
    "replacement.section2": "عملية الاستبدال",
    "replacement.section2Text":
      "لاستبدال منتج، تواصلي معنا عبر واتساب مع تفاصيل طلبك. سنرشدك خلال عملية الاستبدال.",
    "replacement.section3": "المبالغ المستردة",
    "replacement.section3Text":
      "سيتم معالجة المبالغ المستردة خلال 7-10 أيام عمل بعد استلام وفحص المنتج المرتجع.",
    "replacement.section4": "المنتجات غير القابلة للإرجاع",
    "replacement.section4Text":
      "منتجات التخفيضات والتصفية النهائية لا يمكن إرجاعها أو استبدالها ما لم تكن معيبة.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
