import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-center items-center mt-[1rem] rounded-lg overflow-hidden">
      <Image src={"/logoo.svg"} width={60} height={20} alt="logo" className="rounded-md" />

      {/* <Link href={"facebook.com"} className="btn-primary">
        Book a Call
      </Link> */}
    </nav>
  );
}

export default Navbar;
