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

  @media (min-width: 346px) {
    background-color: ${testPalletColors.fourthColor};
    flex-direction: column;
  }

  @media (min-width: 768px) {
    background-color: ${testPalletColors.thirdColor};
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    background-color: ${testPalletColors.secondColor};
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    background-color: ${testPalletColors.firstColor};
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
