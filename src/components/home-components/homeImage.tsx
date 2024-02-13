import Image from "next/image";
import styled from "styled-components";

const HomeImageComponentStyle = styled.div`
  display: flex;
  height: 60%;
  max-width: 50%;
  margin: 30px;
  border-radius: 10px;

  @media (min-width: 346px) {
    height: 20%;
  }

  @media (min-width: 768px) {
    height: 30%;
  }

  @media (min-width: 1024px) {
    height: 50%;
  }

  @media (min-width: 1280px) {
    height: 60%;
  }
`;

const HomeImageComponent = () => {
  return (
    <HomeImageComponentStyle>
      <Image
        src="/static/Student.png"
        alt="Description of the image"
        width={500}
        height={700}
        layout="responsive"
        style={{ borderRadius: "10px", display: "flex" }}
      />
    </HomeImageComponentStyle>
  );
};

export default HomeImageComponent;
