"use client";
import Image from "next/image";
import { Footer, FooterDivider, FooterIcon } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export function Contacts() {
  return (
    <Footer container>
      <div className="w-full">
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Image
            src="/logo.png"
            width={100}
            height={10}
            alt="Picture of the author"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              target="_blank"
              href="https://www.facebook.com/groups/750706561027930/?ref=share&mibextid=NSMWBT"
              icon={BsFacebook}
            />
            <FooterIcon href="#" icon={BsInstagram} />
            {/* <FooterIcon href="#" icon={BsTwitter} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}
