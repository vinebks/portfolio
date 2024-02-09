import styled from "styled-components";
import {
  darkColorPallete,
  lightColorPallete,
} from "../../../public/color-pallete";

interface IFooter {
  darkMode: boolean;
}

export const FooterApp = styled.div<IFooter>`
  background: ${(props) =>
    props.darkMode ? lightColorPallete.secondary : darkColorPallete.secondary};
  color: white;
  height: 200px;
`;
