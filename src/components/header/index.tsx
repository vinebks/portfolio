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
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    max-width: 10vw;
    box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1024px) {
    max-width: 8vw;
    box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1280px) {
    max-width: 5vw;
    box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.5);
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
