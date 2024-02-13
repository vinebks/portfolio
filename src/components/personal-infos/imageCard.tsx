import styled from "styled-components";
import { testPalletColors } from "../../../public/color-pallete";

const DivInfosCardStyle = styled.div`
  display: flex;
`;

const InfosCardStyle = styled.div`
  height: 30vh;
  opacity: 0.5;
  background-color: ${testPalletColors.secondColor};
  border-radius: 10px;
  width: 30vh;
  margin: 10px 0px 10px 0px;
`;

export const PersonalInfosCards = () => {
  return (
    <DivInfosCardStyle>
      <InfosCardStyle />
      <div>&nbsp;&nbsp;&nbsp;</div>
      <InfosCardStyle />
    </DivInfosCardStyle>
  );
};
