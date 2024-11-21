import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

// const footerItems = [
//   {
//     item1: "For Guest",
//     item2: {
//       href: "/",
//       label: "Explore all spaces",
//     },
//     item3: {
//       href: "/booking-rules",
//       label: "Booking Rules",
//     },
//     item4: {
//       href: "/booking-rules",
//       label: "Cancellation and Refund",
//     },
//   },
//   {
//     item1: "About Spacez",
//     item2: {
//       href: "/about",
//       label: "About",
//     },
//     item3: {
//       href: "/",
//       label: "Blog",
//     },
//     item4: {
//       href: "/",
//       label: "Careers",
//     },
//   },
//   {
//     item1: "Support",
//     item2: {
//       href: "/contact",
//       label: "Contact Us",
//     },
//     item3: {
//       href: "/privacy-policy",
//       label: "Privacy Policy",
//     },
//     item4: {
//       href: "/terms-and-conditions",
//       label: "Terms and Condition",
//     },
//   },
// ];

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
  // {
  //  text: "download app",
  //  link: "/spacezapp",
  // },
];

export const Footer = () => {
  return (
    <footer className="bg-[#F5F3F2] overflow-x-hidden h-[588px] mobile:h-auto pt-24 mobile:pt-[50px] pb-12 mobile:pb-[50px]">
      <div className="px-[100px] mobile:px-[30px] w-full flex mobile:flex-col justify-between mobile:justify-normal h-[275px] mobile:h-auto">
        <div className="flex flex-col gap-y-6 mobile:justify-normal mobile:gap-y-5 mobile:w-full mobile:pt-6 mobile:pb-12 w-[400px]">
          <Image
            className="object-cover h-[45px] w-[200px] mobile:w-[200px] mobile:h-[45px]"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dz3tveb47/image/upload/v1726815168/spacez-header-logo_l86q9c.png"
            alt="Logo"
          />
          <span
            style={{ fontWeight: 300 }}
            className="font-[Sansation] mobile:text-justify text-[18px] leading-[20px] text-[#442208]"
          >
            Your journey to prime urban escapes and luxury stays begins with
            Spacez. Discover our homestays, hostels, and luxe hotels across
            India’s most sought-after locations. Your next profitable adventure
            awaits.
          </span>
        </div>

        <div className="flex mobile:flex-col mobile:gap-y-4 gap-x-6 mobile:gap-x-0">
          <div className="w-[130px] flex flex-col gap-y-6 mobile:gap-y-3">
            <h4 className="font-[Sansation] text-[#442208] text-[20px] mobile:text-[18px] font-medium mobile:font-normal">
              spacez
            </h4>
            <div className="flex flex-col gap-y-4 mobile:gap-y-2">
              {company.map((item) => (
                <Link
                  className="font-[Sansation] text-[#694B36] text-[16px] mobile:text-[12px] font-normal leading-[17.5px]"
                  href={item.link}
                  key={item.link}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px]" />

          <div className="w-[130px] flex flex-col gap-y-6 mobile:gap-y-3">
            <h4 className="font-[Sansation] text-[#442208] text-[20px] mobile:text-[18px] font-medium mobile:font-normal">
              support
            </h4>
            <div className="flex flex-col gap-y-4 mobile:gap-y-1">
              {support.map((item) => (
                <Link
                  className="font-[Sansation] text-[#694B36] text-[16px] mobile:text-[12px] font-normal leading-[17.5px]"
                  href={item.link}
                  key={item.link}
                >
                  {item.text}
                </Link>
              ))}
              <a
                className="font-[Sansation] text-[#694B36] text-[16px] mobile:text-[12px] font-normal leading-[17.5px]"
                href="/spacezapp"
              >
                download app
              </a>
            </div>
          </div>

          <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px]" />

          <div className="flex flex-col gap-y-5 mobile:gap-y-3 w-[200px]">
            <h4 className="font-[Sansation] text-[#442208] text-[20px] mobile:text-[18px] font-medium mobile:font-normal">
              contact
            </h4>
            <p className="font-[Sansation] text-[#442208] text-[16px] mobile:text-[12px] font-bold">
              hello@spacez.co
            </p>
            <p className="font-[Sansation] text-[#442208] text-[16px] mobile:text-[12px] font-bold">
              <span className="font-normal">call us:</span>
              <a href="tel:+918608600718" className="text-black">
                +91 860 8600 718
              </a>
            </p>
            <p className="font-[Sansation] text-[#442208] text-[16px] mobile:text-[12px] font-bold">
              <span className="font-normal">address:</span> 62/1, 9th Main Rd,
              Stage 2, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038
            </p>
          </div>

          <div className="hidden mobile:block bg-[#BCA390] w-full h-[0.5px]" />

          <div className="hidden pt-4 pb-6 mobile:flex justify-center items-center">
            <SocialMedia />
          </div>

          <div className="px-12 mobile:px-0 mobile:py-[20px]">
            <div className="flex items-center flex-col gap-y-4">
              <span className="font-[Sansation] font-bold text-[18px] leading-[20px] text-[#442208]">
                Download our app
              </span>
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
            </div>
          </div>
        </div>
      </div>

      <div className="hidden py-2 w-full mobile:flex flex-col items-center justify-center gap-y-3">
        <div className="flex items-center justify-center gap-x-4">
          <a
            href="/privacy-policy"
            className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
          >
            privacy policy
          </a>
          <div className="w-1 h-1 bg-[#3F3B42]" />
          <a
            href="/terms-and-conditions"
            className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
          >
            terms and conditions
          </a>
        </div>
        <span className="font-[Sansation] font-normal text-[11px] leading-[15px]">
          ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED.
        </span>
      </div>

      <div className="mobile:hidden mt-[100px] py-6 w-full border-t-[0.5px] border-[#B0B0B0]">
        <div className="px-[100px] flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <span className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left">
              ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED.
            </span>
            <div className="w-1 h-1 bg-[#3F3B42]" />
            <a
              href="/privacy-policy"
              className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
            >
              privacy policy
            </a>
            <div className="w-1 h-1 bg-[#3F3B42]" />
            <a
              href="/terms-and-conditions"
              className="font-[Sansation] text-[#3F3B42] text-[14px] font-normal leading-[20.16px] text-left"
            >
              terms and conditions
            </a>
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
        className="flex items-center justify-center w-[22px] h-[22px] bg-[#3F3B42] rounded-full"
        target="_blank"
        rel="nofollow"
      >
        <FaLinkedinIn size={13} color="white" />
      </Link>
      <Link
        href="https://wa.me/918608600718?text=Hi%20Spacez,%20I'm%20interested%20to%20know%20about%20something"
        className="flex items-center justify-center w-[22px] h-[22px] bg-[#3F3B42] rounded-full"
        target="_blank"
        rel="nofollow"
      >
        <FaWhatsapp size={16} color="white" />
      </Link>
      <Link
        href="https://www.instagram.com/spacez.luxe/"
        className="flex items-center justify-center w-[22px] h-[22px] bg-[#3F3B42] rounded-full"
        target="_blank"
        rel="nofollow"
      >
        <FaInstagram size={16} color="white" />
      </Link>
    </div>
  );
};

{
  /* <div className="flex mobile:flex-col mobile:gap-y-14 mobile:items-center mobile:w-[320px] mx-auto gap-[290px]">
    <h4 className="text-[17px] font-medium text-black">
      Explore the new luxe.
    </h4>
    <div className="flex mobile:flex-col mobile:items-center mobile:gap-y-14 gap-x-[64px]">
      {footerItems.map(({ item1, item2, item3, item4 }, index) => (
        <div
          key={index}
          className="flex flex-col mobile:items-center gap-y-2"
        >
          <span
            style={{ color: "rgba(0,0,0,.4)" }}
            className="font-medium text-[17px]"
          >
            {item1}
          </span>
          <Link
            href={item2.href}
            className="font-medium text-[17px] text-black hover:opacity-70"
          >
            {item2.label}
          </Link>
          <Link
            href={item3.href}
            className="font-medium text-[17px] text-black hover:opacity-70"
          >
            {item3.label}
          </Link>
          <Link
            href={item4.href}
            className="font-medium text-[17px] text-black hover:opacity-70"
          >
            {item4.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
  <h1
    className={`${sacramento.className} leading-[200px] h-[500px] mobile:leading-[180px] mobile:h-[250px] text-[500px] mobile:text-[180px] overflow-hidden text-black`}
  >
    spacez
  </h1>{" "}
  <p className="mt-10 mb-2 mr-8 text-base pl-6 mobile:text-xs text-black">
    ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED. All rights reserved
  </p> */
}
