import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";
import { MenuBar } from "../menu-bar/menuBarComponent";

export const HeaderApp = styled.div`
  display: flex;
  background-color: ${testPalletColors.secondColor};
  height: 8vh;
  align-items: center;
  justify-content: center;
`;

export const HeaderAppComponent = () => {
  return (
    <HeaderApp>
      <MenuBar />
    </HeaderApp>
  );
};
