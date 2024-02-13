import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import styled from "styled-components";

export enum RoutesEnum {
  "Página Inicial" = "/dashboard/home",
  "Carreira" = "/dashboard/career",
}
export const IconsDiv = styled.div`
  color: white;
  background-color: transparent;
  transition: font-size 0.3s;
  font-size: 2.3vw;

  &:hover {
    cursor: pointer;
    font-size: 2.4vw;
    filter: blur(1px);
  }
`;

const IconsComponent = () => {
  const router = useRouter();

  const handleSocialMedia = useCallback((path: string) => {
    const newTab = window.open(path);
    newTab?.focus();
  }, []);

  return (
    <div>
      <IconsDiv>
        <FaLinkedin
          onClick={() => {
            handleSocialMedia(
              "https://www.linkedin.com/in/vinicius-jesus-024774184/"
            );
          }}
        />
      </IconsDiv>
      <IconsDiv>
        <FaGithub
          onClick={() => {
            handleSocialMedia("https://github.com/vinebks");
          }}
        />
      </IconsDiv>
    </div>
  );
};

export default IconsComponent;
