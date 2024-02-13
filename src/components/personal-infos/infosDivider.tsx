import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { PersonalInfosCards } from "./imageCard";
import { testPalletColors } from "../../../public/color-pallete";

const PersonalInfosDividerStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${testPalletColors.thirdColor};
`;

interface IPersonalInfosCards {
  title: string;
  description: string;
  image: string;
  side: "left" | "right";
}

export const PersonalInfosDivider: React.FC = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/api/personal-infos", {
      method: "GET",
    });
    const responseData = await response.json();

    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PersonalInfosDividerStyle>
      <PersonalInfosCards />
    </PersonalInfosDividerStyle>
  );
};
