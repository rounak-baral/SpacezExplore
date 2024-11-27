import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { LabelText } from "../common/label-text";
import { TitleText } from "../common/title-text";
import { PopularSearches } from "./popular-searches";

const company = [
  {
    text: "home",
    link: "/",
  },
  //{ text: "our story", link: "our-story" },
  {
    text: "partner with us",
    link: "/list-home",
  },
  //{
  //text: "events",link: "/events",
  // },
  // {
  // text: "why choose us?",
  //link: "/why-choose-us",
  // },
  {
    text: "compliance",
    link: "/privacy-policy",
  },
  {
    text: "FAQ",
    link: "/terms-and-conditions",
  },
];

const support = [
  {
    text: "cancellation and refund",
    link: "/privacy-policy",
  },
  {
    text: "contact",
    link: "/contact",
  },
];

const contact = [
  {
    link: "#",
    text: "hello@spacez.co",
  },
  {
    link: "#",
    text: "call us: +91 860 8600 718",
  },
  {
    link: "#",
    text: "address: 62/1, 9th Main Rd, Stage 2, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#F5F3F2] overflow-x-hidden w-full h-auto mobile:h-auto pt-24 mobile:pt-[50px] pb-12 mobile:pb-[50px]">
      <div className="px-[75px] mobile:px-[40px] w-full flex mobile:flex-col justify-between mobile:justify-normal h-[275px] mobile:h-auto">
        <div className="flex flex-col gap-y-6 mobile:justify-normal mobile:gap-y-5 mobile:w-full mobile:pt-6 mobile:pb-12 w-[400px]">
          <Image
            className="object-cover h-[46px] w-[175px] mobile:w-[175px] mobile:h-[45px]"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dz3tveb47/image/upload/v1728571285/spacez_logo_btftvj.png"
            alt="Logo"
          />
          <LabelText className="text-primaryB7 mobile:!font-normal mobile:!text-[14px]">
            the page ends here, but your journey to prime urban escapes and
            luxury stays begins with spacez. discover our homestays, hostels,
            and luxe hotels across india&apos;s most sought-after locations.
            your next profitable adventure awaits you.
          </LabelText>
        </div>

        <div className="flex mobile:flex-col mobile:gap-y-4 gap-x-6 mobile:gap-x-0">
          <div className="w-[130px] flex flex-col gap-y-6 mobile:gap-y-3">
            <TitleText className="text-[16px] font-semibold text-neutralN7">
              spacez
            </TitleText>
            <div className="flex flex-col">
              {company.map((item, index) => (
                <Link href={item.link} key={item.link + index}>
                  <LabelText className="text-neutralN8 mobile:!font-normal mobile:!text-[14px]">
                    {item.text}
                  </LabelText>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px]" />

          <div className="w-[130px] flex flex-col gap-y-6 mobile:gap-y-3">
            <TitleText className="text-[16px] font-semibold text-neutralN7">
              support
            </TitleText>
            <div className="flex flex-col">
              {support.map((item, index) => (
                <Link href={item.link} key={item.link + index}>
                  <LabelText className="text-neutralN8 mobile:!font-normal mobile:!text-[14px]">
                    {item.text}
                  </LabelText>
                </Link>
              ))}
              <a href="/spacezapp">
                <LabelText className="text-neutralN8 mobile:!font-normal mobile:!text-[14px]">
                  download app
                </LabelText>
              </a>
            </div>
          </div>

          <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px]" />

          <div className="flex flex-col gap-y-6 mobile:gap-y-3 w-[200px]">
            <TitleText className="text-[16px] font-semibold text-neutralN7">
              contact
            </TitleText>
            <div className="flex flex-col gap-y-3 mobile:gap-y-2">
              {contact.map((item, index) => (
                <Link href={item.link} key={item.link + index}>
                  <LabelText className="text-neutralN8 mobile:!font-normal mobile:!text-[14px]">
                    {item.text}
                  </LabelText>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden mobile:block">
            <PopularSearches />
          </div>

          <div className="hidden pt-4 pb-6 mobile:flex justify-center items-center">
            <SocialMedia />
          </div>

          <div className="px-12 mobile:px-0 mobile:py-[20px]">
            <div className="flex items-center flex-col gap-y-4">
              <TitleText className="text-neutralN7 lowercase !text-[16px] !font-semibold">
                Download our app
              </TitleText>

              <div className="flex items-center gap-x-4">
                <Link href="https://play.google.com/store/apps/details?id=com.spacez.luxe">
                  <Image
                    className="object-cover h-[25px] mobile:h-[45px] w-[83px] mobile:w-[150px]"
                    width={1000}
                    height={1000}
                    src="https://res.cloudinary.com/dz3tveb47/image/upload/v1726815164/PlayStore_whnwzz.png"
                    alt="QR code"
                  />
                </Link>
                <Link href="https://apps.apple.com/app/spacez-luxury-villas-hostel/id6670251013">
                  <Image
                    className="object-cover h-[25px] mobile:h-[45px] w-[83px] mobile:w-[150px]"
                    width={1000}
                    height={1000}
                    src="https://res.cloudinary.com/dz3tveb47/image/upload/v1726815156/AppleStore_qgk5rm.png"
                    alt="QR code"
                  />
                </Link>
              </div>

              <div className="relative h-[180px] w-[180px] mobile:hidden">
                <Image
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                  src="https://res.cloudinary.com/dz3tveb47/image/upload/v1726815164/qr-code_d41kjt.png"
                  alt="QR code"
                />
                <Image
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[35px] h-[35px] object-cover"
                  width={1000}
                  height={1000}
                  src="https://res.cloudinary.com/dz3tveb47/image/upload/v1726815167/spacez-footer-logo_t9wfhk.png"
                  alt="QR code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden py-2 w-full mobile:flex flex-col items-center justify-center gap-y-3">
        <div className="flex items-center justify-center gap-x-4">
          <Link
            href="/privacy-policy"
            className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
          >
            privacy policy
          </Link>
          <div className="w-1 h-1 bg-[#3F3B42]" />
          <Link
            href="/terms-and-conditions"
            className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
          >
            terms and conditions
          </Link>
        </div>
        <LabelText className="text-primaryB5">
          ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED.
        </LabelText>
      </div>

      <div className="w-full px-[100px] mx-auto text-center flex flex-col items-center justify-center mobile:hidden">
        <PopularSearches />
      </div>

      <div className="mobile:hidden mt-[100px] py-6 w-full border-t-[0.5px] border-[#B0B0B0]">
        <div className="px-[100px] flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <LabelText className="text-neutralN8">
              ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED.
            </LabelText>
            <div className="w-1 h-1 bg-[#3F3B42]" />
            <a
              href="/privacy-policy"
              className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
            >
              <LabelText className="text-neutralN8">privacy policy</LabelText>
            </a>
            <div className="w-1 h-1 bg-[#3F3B42]" />
            <Link href="/terms-and-conditions">
              <LabelText className="text-neutralN8">
                terms and conditions
              </LabelText>
            </Link>
          </div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Link
        href="https://www.linkedin.com/company/spacezluxe/"
        className="flex items-center justify-center w-[22px] h-[22px] bg-primaryB7 rounded-full"
        target="_blank"
        rel="nofollow"
      >
        <FaLinkedinIn size={13} color="white" />
      </Link>
      <Link
        href="https://wa.me/918608600718?text=Hi%20Spacez,%20I'm%20interested%20to%20know%20about%20something"
        className="flex items-center justify-center w-[22px] h-[22px] bg-primaryB7 rounded-full"
        target="_blank"
        rel="nofollow"
      >
        <FaWhatsapp size={16} color="white" />
      </Link>
      <Link
        href="https://www.instagram.com/spacez.luxe/"
        className="flex items-center justify-center w-[22px] h-[22px] bg-primaryB7 rounded-full"
        target="_blank"
        rel="nofollow"
      >
        <FaInstagram size={16} color="white" />
      </Link>
    </div>
  );
};