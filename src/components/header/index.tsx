import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";
import MenuBar from "../menu-bar";

const HeaderStyle = styled.div`
  display: flex;
  background-color: ${testPalletColors.secondColor};
  height: 100vh;
  max-width: 5vw;
  align-items: start;
  z-index: 1;
  box-shadow: 0px 20px 40px 40px rgba(0, 0, 0, 0.5);

  @media (min-width: 346px) {
    max-width: 15vw;
  }

  @media (min-width: 768px) {
    max-width: 12vw;
  }

  @media (min-width: 1024px) {
    max-width: 8vw;
  }

  @media (min-width: 1280px) {
    max-width: 5vw;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <MenuBar />
    </HeaderStyle>
  );
};

export default Header;
