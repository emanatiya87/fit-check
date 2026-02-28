export default function Newsletter() {
  return (
    <section className="bg-[#020002] bg-linear-to-l from-[#4c535e] to-[#010205] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Sign Up for newsletters
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Get e-mail updates about our latest shop and{" "}
            <span className="text-yellow-400 font-medium">special offers</span>
          </p>
        </div>

        {/* Form - Powered by Formspree */}
        <div className="w-full md:w-auto flex justify-center items-center">
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // استبدل YOUR_FORM_ID بالكود اللي هتاخده من الموقع
            method="POST"
            className="flex w-full max-w-md bg-white rounded-lg overflow-hidden p-1 shadow-lg"
          >
            <input
              type="email"
              name="email" // مهم جداً عشان Formspree يعرف الداتا
              placeholder="Enter your email"
              className="grow px-4 py-3 outline-none text-gray-700 text-sm border-none focus:ring-0"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
