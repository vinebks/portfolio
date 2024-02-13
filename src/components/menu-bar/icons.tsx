import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import styled from "styled-components";

export enum RoutesEnum {
  "Página Inicial" = "/dashboard/home",
  "Carreira" = "/dashboard/career",
}
export const IconsDiv = styled.div`
  color: white;
  background-color: transparent;
  transition: font-size 0.3s;
  font-size: 1.3vw;

  &:hover {
    cursor: pointer;
    font-size: 1.4vw;
    filter: blur(1px);
  }

  @media (min-width: 346px) {
    font-size: 6.5vw;

    &:hover {
      font-size: 6.6vw;
    }
  }

  @media (min-width: 768px) {
    font-size: 4.5vw;

    &:hover {
      font-size: 4.6vw;
    }
  }

  @media (min-width: 1024px) {
    font-size: 3.5vw;

    &:hover {
      font-size: 3.6vw;
    }
  }

  @media (min-width: 1280px) {
    font-size: 2.5vw;

    &:hover {
      font-size: 2.6vw;
    }
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
