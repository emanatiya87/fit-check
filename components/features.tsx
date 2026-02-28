import Title from "./title";

export default function Features() {
  return (
    <>
      <Title titleText="Features" color="primary" />
      <section>
        <div className="container mx-auto px-4">
          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {/* Free Shipping */}
            <div className="group border p-4 mb-2 rounded-xl flex flex-col items-center transition-all hover:shadow-md">
              <div className="overflow-hidden mb-3">
                <img
                  src="/features/f1.png"
                  alt="Online Order"
                  className="w-full transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
              <h6 className="w-full text-center py-1 px-2 rounded-lg text-sm font-bold text-white shadow-sm bg-[#8adae3]">
                Online Order
              </h6>
            </div>

            {/* Online Order */}
            <div className="group border p-4 mb-2 rounded-xl flex flex-col items-center transition-all hover:shadow-md">
              <div className="overflow-hidden mb-3">
                <img
                  src="/features/f2.png"
                  alt="Fast Shipping"
                  className="w-full transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
              <h6 className="w-full text-center py-1 px-2 rounded-lg text-sm font-bold text-white shadow-sm bg-[#e189bc]">
                Fast Shipping
              </h6>
            </div>

            {/* Happy Sell */}
            <div className="group border p-4 mb-2 rounded-xl flex flex-col items-center transition-all hover:shadow-md">
              <div className="overflow-hidden mb-3">
                <img
                  src="/features/f5.png"
                  alt="Happy Sell"
                  className="w-full transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
              <h6 className="w-full text-center py-1 px-2 rounded-lg text-sm font-bold text-white shadow-sm bg-[#a28fda]">
                Happy Sell
              </h6>
            </div>

            {/* Save Money */}
            <div className="group border p-4 mb-2 rounded-xl flex flex-col items-center transition-all hover:shadow-md">
              <div className="overflow-hidden mb-3">
                <img
                  src="/features/f3.png"
                  alt="Save Money"
                  className="w-full transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
              <h6 className="w-full text-center py-1 px-2 rounded-lg text-sm font-bold text-white shadow-sm bg-[#b8dd7f]">
                Save Money
              </h6>
            </div>

            {/* Giveaways */}
            <div className="group border p-4 mb-2 rounded-xl flex flex-col items-center transition-all hover:shadow-md">
              <div className="overflow-hidden mb-3">
                <img
                  src="/features/f4.png"
                  alt="Giveaways"
                  className="w-full transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
              <h6 className="w-full text-center py-1 px-2 rounded-lg text-sm font-bold text-white shadow-sm bg-[#89bfe1]">
                Giveaways
              </h6>
            </div>

            {/* 24H Support */}
            <div className="group border p-4 mb-2 rounded-xl flex flex-col items-center transition-all hover:shadow-md">
              <div className="overflow-hidden mb-3">
                <img
                  src="/features/f6.png"
                  alt="24H Support"
                  className="w-full transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
              <h6 className="w-full text-center py-1 px-2 rounded-lg text-sm font-bold text-white shadow-sm bg-[#e5aa8b]">
                24H Support
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
