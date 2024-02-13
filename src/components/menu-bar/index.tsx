import styled from "styled-components";
import MenuBarButton, { RoutesEnum } from "./butons";
import IconsComponent from "./icons";

const MenuBarStyle = styled.div`
  display: flex;
  width: 17vw;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`;

const MenuBar = () => {
  const buttonList: Array<keyof typeof RoutesEnum> = [
    "Página Inicial",
    "Carreira",
  ];

  return (
    <MenuBarStyle>
      <IconsComponent />
    </MenuBarStyle>
  );
};

export default MenuBar;
