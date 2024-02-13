import { setGlobalState } from "@/hooks/globalState";
import { MenuBarButtonStyle } from "./menuBar.style";
import { useRouter } from "next/navigation";
import styled from "styled-components";

enum ButtonsListEnum {
  "Home" = "/home",
  "Personal Infos" = "/personal-infos",
  "Articles" = "/articles",
}

export const MenuBar = () => {
  const buttonsList: Array<keyof typeof ButtonsListEnum> = [
    "Home",
    "Personal Infos",
  ];

  const router = useRouter();

  const handleUpdateRoute = (routePath: string) => {
    router.push(routePath);
  };

  const MenuBarStyle = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <MenuBarStyle>
      {buttonsList.map((buttonItem, index) => (
        <MenuBarButtonStyle
          key={index}
          onClick={() => {
            handleUpdateRoute(ButtonsListEnum[buttonItem]);
          }}
        >
          {buttonItem}
        </MenuBarButtonStyle>
      ))}
    </MenuBarStyle>
  );
};
