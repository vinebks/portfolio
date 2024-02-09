import styled from "styled-components";
import {
  darkColorPallete,
  lightColorPallete,
} from "../../../public/color-pallete";

interface IHeader {
  darkMode: boolean;
}

export const HeaderApp = styled.div<IHeader>`
  background: ${(props) =>
    props.darkMode ? lightColorPallete.primary : darkColorPallete.primary};
  color: white;
  height: 200px;
`;
