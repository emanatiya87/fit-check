import Link from "next/link";
import Image from "next/image";
export default function LayoutHeader() {
  return (
    <div className="bg-background fixed top-0 w-dvw z-20">
      <Link href="/">
        <Image
          width="200"
          height="100"
          src="/logo.png"
          alt="logo FitCheck"
          className="  mx-auto pt-2 mb-1 "
        />
        <div className="h-px w-full rounded-full bg-linear-to-r from-primary via-[var(--color-primary)/20] to-primary"></div>
      </Link>
    </div>
  );
}
