import styled from "styled-components";
import { HeaderApp } from "../components/header";
import { FooterApp } from "../components/footer";
import React, { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => {
  const [useDarkMode, setDarkModeState] = useState(false);

  return (
    <Wrapper>
      <HeaderApp darkMode={useDarkMode} />
      <Content>
        <button
          onClick={() => {
            setDarkModeState(!useDarkMode);
          }}
        >
          Clique Aqui
        </button>
      </Content>
      <FooterApp darkMode={useDarkMode} />
    </Wrapper>
  );
};

export default App;
