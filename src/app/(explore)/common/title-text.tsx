import { TextsPropType } from "../../../../types/common";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const TitleText = ({ children, className }: TextsPropType) => {
  return (
    <h5
      className={`${lexendDeca.className} ${className} lowercase text-[24px] font-medium mobile:text-[16px] mobile:font-semibold mobile:leading-[20px]`}
    >
      {children}
    </h5>
  );
};
