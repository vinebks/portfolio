import styled from "styled-components";
import { testPalletColors } from "../../public/color-pallete";
import { PersonalInfosDivider } from "@/components/personal-infos/infosDivider";
import React from "react";
import { HeaderAppComponent } from "@/components/header";
import { FooterApp } from "@/components/footer";

const PersonalInfoPage = styled.div``;

const PersonalInfoContent: React.FC = () => {
  return (
    <div>
      <HeaderAppComponent />
      <PersonalInfoPage>
        <PersonalInfosDivider />
      </PersonalInfoPage>
      <FooterApp />
    </div>
  );
};

export default PersonalInfoContent;
