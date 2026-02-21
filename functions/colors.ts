export const getColorCode = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    اسود: "#000000",
    ابيض: "#FFFFFF",
    نبيتي: "#800000",
    زيتي: "#4b5320",
    بيج: "#EDE8D0",
    كحلي: "#000080",
    رمادي: "#808080",
    بني: "#A52A2A",
    موف: "#800080",
    مسطردة: "#E1AD01",
    أخضر: "#008000",
    ازرق: "#0000FF",
  };

  // لو اللون مش موجود في القائمة، هيرجع لون رمادي فاتح كـ Default
  return colorMap[colorName] || "#D1D5DB";
};
