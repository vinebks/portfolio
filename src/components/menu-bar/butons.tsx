import { useRouter } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";

interface IMenuBarButton {
  name: keyof typeof RoutesEnum;
}

export enum RoutesEnum {
  "Página Inicial" = "/dashboard/home",
  "Carreira" = "/dashboard/career",
}
export const Button = styled.button<IMenuBarButton>`
  color: white;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  transition: font-size 0.3s;
  font-size: 1.4vw;

  &:hover {
    cursor: pointer;
    font-size: 1.5vw;
  }
`;

const MenuBarButton = (props: IMenuBarButton) => {
  const router = useRouter();

  const handleChangeRoute = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  return (
    <Button
      name={props.name}
      onClick={() => {
        handleChangeRoute(RoutesEnum[props.name]);
      }}
    >
      {props.name}
    </Button>
  );
};

export default MenuBarButton;
