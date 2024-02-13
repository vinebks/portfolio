"use client";
import styled from "styled-components";
import { HeaderAppComponent } from "../components/header";
import { FooterApp } from "../components/footer";
import React from "react";
import { testPalletColors } from "../../public/color-pallete";

const Body = styled.body`
  margin: 0px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: ${testPalletColors.thirdColor};
`;

const Home = () => {
  return (
    <Div>
      <HeaderAppComponent />
      <Content />
      <FooterApp />
    </Div>
  );
};

export default Home;
