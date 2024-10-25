import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="d-flex align-items-center gap-3">
        <Image src={"/logo.png"} height={60} width={60} alt="logo" />
      </Link>
    </>
  );
}
