import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-1490 flex flex-row justify-between py-6" id="home-top-id">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/images/logo-ale-otero-web-blanco-roboto.svg"
          width={180}
          height={1}
          alt="Logo"
        />
      </Link>
      <Link href={"#"} className="flex items-center">
        <Image
          src="/images/menu-icon-white.svg"
          width={25}
          height={1}
          alt="Menu Icon"
          className="menu-icon"
        />
      </Link>
    </div>
  );
}
