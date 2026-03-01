self.addEventListener("install", function (event) {
  console.log("SW installed");
});

self.addEventListener("fetch", function (event) {
  // هنا ممكن تضيفي كاش لو حابة قدام، بس خليه كدة دلوقتي عشان ميحصلش مشاكل
});
