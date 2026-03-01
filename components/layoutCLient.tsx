"use client";
import { useEffect } from "react";

export default function LayoutClient() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // بنسجل الـ Service Worker أول ما الصفحة تحمل
      navigator.serviceWorker.register("/sw.js").then(
        (reg) => console.log("PWA ServiceWorker registered"),
        (err) => console.log("SW registration failed: ", err),
      );
    }
  }, []);

  return null; // لازم يرجع null عشان ميظهرش أي حاجة في الصفحة
}
