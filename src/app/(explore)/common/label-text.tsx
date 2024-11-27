import { TextsPropType } from "../../../../types/common";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const LabelText = ({ children, className }: TextsPropType) => {
  return (
    <p
      className={`${lexendDeca.className} ${className} lowercase text-[14px] font-normal mobile:text-[10px] mobile:font-normal`}
    >
      {children}
    </p>
  );
};
