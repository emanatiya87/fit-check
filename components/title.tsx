export default function Title({
  titleText,
  color,
}: {
  titleText: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className={`flex-1 h-[.5px] bg-${color}`}></div>

      <h2
        className={`text-lg md:text-2xl font-semibold whitespace-nowrap text-${color}`}
      >
        {titleText}
      </h2>

      <div className={`flex-1 h-[.5px] bg-${color}`}></div>
    </div>
  );
}
