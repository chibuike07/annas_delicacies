import { FiStar, FiTruck, FiShield } from "react-icons/fi";
import * as S from "./Footer.styles";
import type { IFooterProps } from "./Footer.interface";

export default function Footer({}: IFooterProps) {
  return (
    <S.FooterWrapper id="contact">
      <div className="footer-icons">
        <FiStar /> Premium picks · <FiTruck /> Fast delivery · <FiShield />
        Secure checkout
      </div>
      <div className="footer-note">
        Secure shopping experience with encrypted WhatsApp communication.
      </div>
    </S.FooterWrapper>
  );
}
