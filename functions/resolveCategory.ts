type CategoryKey = "dresses" | "pants" | "tshirts" | "tops" | "suits";

export function resolveCategory(category: string) {
  const map: Record<CategoryKey, { route: string; label: string }> = {
    dresses: { route: "dresses", label: "فساتين وعبايات" },
    pants: { route: "pants", label: "بنطلونات" },
    tshirts: { route: "tops", label: "توبات وبلوزات" },
    tops: { route: "tops", label: "توبات وبلوزات" },
    suits: { route: "suits", label: "بدل" },
  };

  // لو القيمة مش موجودة في الماب
  if (!(category in map)) {
    return { route: category, label: category };
  }

  // نعمل cast عشان TS يفهم
  return map[category as CategoryKey];
}
