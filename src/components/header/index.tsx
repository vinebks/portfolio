import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";
import MenuBar from "../menu-bar";

const HeaderStyle = styled.div`
  position: fixed;
  display: flex;
  background-color: ${testPalletColors.secondColor};
  height: 100vh;
  width: 6vw;
  max-width: 100px;
  align-items: start;
  flex: 1;
  box-shadow: 0px 20px 40px 40px rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  return (
    <HeaderStyle>
      <MenuBar />
    </HeaderStyle>
  );
};

export default Header;
