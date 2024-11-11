import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../../../assets/lopn.png";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-white border-b border-[#eaeaea] py-8 px-6 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex mobile:justify-center justify-between items-center">
        {/* Logo Section */}
        <Link href={"/"}>
          <div className="flex items-center justify-center">
            <span className="ml-4 text-3xl text-[#4f3c31] font-semibold italic">
              <Image src={Logo} height={40} alt="logo" width={213} />
            </span>
          </div>
        </Link>
        {/* Contact Section - Visible only on Desktop */}
        <div className="flex">
          <Link href="https://www.spacez.co/" passHref>
            <div className="mobile:hidden border-2 mx-2 my-1 bg-white border-[#4f3c31] rounded-full p-3 py-2 px-6 flex items-center space-x-2 cursor-pointer">
              <span className="text-lg font-medium px-2 text-[#4f3c31]  leading-none">
                Book a Villa Now
              </span>
            </div>
          </Link>
          <Link href="https://wa.me/9380834941" passHref>
            <div className="mobile:hidden border-2 bg-white border-[#4f3c31] rounded-full p-3 py-2 px-6 flex items-center space-x-2 cursor-pointer">
              <FaWhatsapp className="text-[#4f3c31] align-middle" size={22} />
              <span className="text-lg font-medium px-2 text-[#4f3c31]  leading-none">
                9380834941
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
