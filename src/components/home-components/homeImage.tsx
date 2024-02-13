import Image from "next/image";
import styled from "styled-components";

const HomeImageComponentStyle = styled.div`
  display: flex;
  height: 60%;
  max-width: 50%;
  margin: 30px;
  border-radius: 10px;
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
