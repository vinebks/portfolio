import RootLayout from "@/components/layout";
import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";
import HomeImageComponent from "@/components/home-components/homeImage";
import HomeDescriptionComponent from "@/components/home-components/personalDescription";

const HomeContent = styled.div`
  display: flex;
  height: 100vh;
  widht: 6vw;
  background-color: ${testPalletColors.firstColor};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
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
