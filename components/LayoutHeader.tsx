import Link from "next/link";

export default function LayoutHeader() {
  return (
    <Link href="/">
      <img
        src="/logo.png"
        alt="logo FitCheck"
        className="w-1/3 sm:w-1/5 mx-auto pt-2 mb-1 "
      />
      <div className="h-px w-full rounded-full bg-linear-to-r from-primary via-[var(--color-primary)/20] to-primary"></div>
    </Link>
  );
}
