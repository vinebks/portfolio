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
    font-size: 4.2vw;
  }

  @media (min-width: 768px) {
    font-size: 3.2vw;
  }

  @media (min-width: 1024px) {
    font-size: 2.2vw;
  }

  @media (min-width: 1280px) {
    font-size: 1.2vw;
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
          Com quatro anos de experiência em desenvolvimento de software, aprendi
          muito e cresci. De estagiário a desenvolvedor de software de nível
          médio, trabalhei com JavaScript, ReactJs, NodeJs, Sequelize ORM e
          muito mais. Ampliei minhas habilidades para incluir NestJs, RabbitMQ,
          AWS, TypeScript, MongoDB, Docker e Jest. E tive experiência em
          projetos Web com pilha JavaScript. Gosto de pensar que me desenvolver
          enquanto resolvo problemas.
        </HomeDescriptionText>
      </HomeDescriptionContext>
    </HomeDescriptionComponentStyle>
  );
};

export default HomeDescriptionComponent;
