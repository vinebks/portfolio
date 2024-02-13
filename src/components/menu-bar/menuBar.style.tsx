import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";
export const MenuBarButtonStyle = styled.button`
  display: flex;
  background-color: transparent;
  min-height: 5vh;
  width: 10vh;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: color 0.5s;
  color: ${testPalletColors.fourthColor};

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const MenuBarButton = () => {
  return <MenuBarButtonStyle />;
};
