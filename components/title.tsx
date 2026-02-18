export default function Title() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-[.5px] bg-primary"></div>

      <h2 className="text-lg md:text-2xl font-semibold whitespace-nowrap text-primary">
        Featured Products
      </h2>

      <div className="flex-1 h-[.5px] bg-primary"></div>
    </div>
  );
}
