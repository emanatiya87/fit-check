export default function Title({
  titleText,
  color,
}: {
  titleText: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 my-8">
      {/* <div className={`flex-1 h-[.5px] bg-${color}`}></div> */}
      <div className=" flex-1 h-px w-full rounded-full bg-linear-to-r from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
      <h2
        className={`text-lg md:text-2xl font-semibold whitespace-nowrap text-${color}`}
      >
        {titleText}
      </h2>
      <div className=" flex-1 h-px w-full rounded-full bg-linear-to-l from-transparent via-[var(--color-secondary)/20] to-secondary"></div>{" "}
      {/* <div className={`flex-1 h-[.5px] bg-${color}`}></div> */}
    </div>
  );
}
