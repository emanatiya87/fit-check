export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#fff9f5]">
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <img
            src="/logo.png"
            alt="FitCheck"
            className="w-64 animate-pulse-slow"
          />

          <div className="w-32 h-0.5 bg-[#e8a8a0] overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ce7f73] animate-slide-left"></div>
          </div>
        </div>
      </div>
    </>
  );
}
