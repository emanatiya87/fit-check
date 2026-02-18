export default function Banner() {
  return (
    <div className="banner-bg pe-8 h-[25dvh] lg:h-[50dvh] md:gap-20 flex items-center justify-start text-light w-full">
      <img
        src="/fanos.png"
        alt="fanos ramadan"
        className="max-h-full  w-1/3 self-start"
      />
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <p className="title-bg text-2xl md:text-4xl font-bold px-5 text-center">
          خصومات رمضان المميزة
        </p>
        <h2 className="text-3xl md:text-6xl text-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold">
          حتى %50
        </h2>
        <button
          type="button"
          className="border-backgroung border-backgroung border bg-primary hover:bg-secondary focus:bg-secondary shadow-[0_7px_5px_-4px_var(--color-primary)]  text-white text-xl bg-brand box-border  hover:bg-brand-strong  font-medium leading-5 rounded-full px-5 py-3 "
        >
          تسوقي الان
        </button>
      </div>
    </div>
  );
}
