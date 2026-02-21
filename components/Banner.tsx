import Image from "next/image";
export default function Banner() {
  return (
    <div className=" pe-8 md:gap-20 flex items-center justify-start text-light w-full relative overflow-hidden">
      <Image
        src="/bgBanner.png"
        alt="fanos ramadan"
        width={1000}
        height={500}
        priority
        className="absolute h-dvh w-dvw -z-10"
      />
      <div className="w-1/3 self-start relative">
        <Image
          src="/fanos.png"
          alt="fanos ramadan"
          width={500}
          height={500}
          priority
          className="max-h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 md:gap-8 py-3">
        <p className="title-bg text-2xl md:text-5xl font-bold px-5 text-center">
          خصومات رمضان المميزة
        </p>
        <h2 className="text-3xl md:text-7xl text-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold">
          حتى %50
        </h2>
        <button
          type="button"
          className="border-backgroung border bg-primary hover:bg-secondary focus:bg-secondary shadow-[0_7px_5px_-4px_var(--color-primary)] text-white text-sm md:text-2xl font-medium leading-5 rounded-full px-5 py-3"
        >
          تسوقي الان
        </button>
      </div>
    </div>
  );
}
