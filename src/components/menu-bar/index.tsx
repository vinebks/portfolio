import styled from "styled-components";
import IconsComponent from "./icons";

const MenuBarStyle = styled.div`
  display: flex;
  width: 17vw;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`;

const MenuBar = () => {
  return (
    <MenuBarStyle>
      <IconsComponent />
    </MenuBarStyle>
  );
};

export default MenuBar;
