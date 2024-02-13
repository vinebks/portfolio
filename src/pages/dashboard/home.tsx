import RootLayout from "@/components/layout";
import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";
import HomeImageComponent from "@/components/home-components/homeImage";
import HomeDescriptionComponent from "@/components/home-components/personalDescription";

const HomeContent = styled.div`
  display: flex;
  height: 100vh;
  width: 95vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${testPalletColors.firstColor};

  @media (min-width: 346px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const Home = () => {
  return (
    <RootLayout>
      <HomeContent>
        <HomeImageComponent />
        <HomeDescriptionComponent />
      </HomeContent>
    </RootLayout>
  );
};

export default Home;
