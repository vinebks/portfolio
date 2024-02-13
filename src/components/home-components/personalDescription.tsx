import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";

const HomeDescriptionComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 40%;
  margin: 30px;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0px 20px 100px 5px rgba(0, 0, 0, 0.3);

  @media (min-width: 346px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const HomeDescriptionTitle = styled.div`
  display: flex;
  height: vh;
  width: 75%;
  margin: 30px;
  border-radius: 10px;
`;

const HomeDescriptionContext = styled.div`
  display: flex;
  height: fit-content;
  width: 90%;
  margin-bottom: 30px;
  border-radius: 10px;
`;

const HomeTitleText = styled.text`
  font-size: 2.5vw;
  color: white;

  @media (min-width: 346px) {
    font-size: 5.5vw;
  }

  @media (min-width: 768px) {
    font-size: 4.5vw;
  }

  @media (min-width: 1024px) {
    font-size: 3.5vw;
  }

  @media (min-width: 1280px) {
    font-size: 2.5vw;
  }
`;

const HomeDescriptionText = styled.text`
  margin: 10px;
  font-size: 1.2vw;
  color: white;

  @media (min-width: 346px) {
    font-size: 3.5vw;
  }

  @media (min-width: 768px) {
    font-size: 2.5vw;
  }

  @media (min-width: 1024px) {
    font-size: 2vw;
  }

  @media (min-width: 1280px) {
    font-size: 1.5vw;
  }
`;

const HomeDescriptionComponent = () => {
  return (
    <HomeDescriptionComponentStyle>
      <HomeDescriptionTitle>
        <HomeTitleText>Sobre mim</HomeTitleText>
      </HomeDescriptionTitle>
      <HomeDescriptionContext>
        <HomeDescriptionText>
          Meu nome Vinícius. Trabalho á quatro anos como Desenvolvedor, comecei
          como estagiário e consegui alcançar o cargo de Desenvolvedor Pleno.
          <p />
          Durante a maior parte da minha carreira trabalhei a maior parte com
          ferramentas da stack de JavaScript algumas delas são{" "}
          <b>TypeScript, NodeJs, ReactJs, Express, NestJs</b>. Participei de
          varios projetos em sua maioria front-end integrado com back-end. Mas
          meu ❤️ é Back-end.
          <p />
          Hoje continuo buscando cada vez mais conhecimento pelos locais por
          onde passo, e tento aplicar tudo que aprendi pelo caminho.
        </HomeDescriptionText>
      </HomeDescriptionContext>
    </HomeDescriptionComponentStyle>
  );
};

export default HomeDescriptionComponent;
