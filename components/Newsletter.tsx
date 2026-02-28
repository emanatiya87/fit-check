export default function Newsletter() {
  return (
    <section className=" py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-secondary text-2xl md:text-3xl font-bold mb-2">
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
            action="https://formspree.io/f/mqedjvgn"
            method="POST"
            className="flex flex-col sm:flex-row w-full max-w-md bg-white rounded-lg overflow-hidden p-1 shadow-lg gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="grow px-4 py-3 outline-none text-gray-700 text-sm border-none focus:ring-0 w-full"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 whitespace-nowrap w-full sm:w-auto"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
