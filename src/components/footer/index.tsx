import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";

const FooterStyle = styled.div`
  display: flex;
  background-color: ${testPalletColors.firstColor};
  min-height: 10vh;
  flex: 1;
`;

const Footer = () => {
  return <FooterStyle />;
};

export default Footer;
