"use client";
import styled from "styled-components";
import StyledComponentsRegistry from "../../lib/registry";
import Header from "./header";

const DivRoot = styled.div`
  display: flex;
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <DivRoot>
        <Header />
        {children}
      </DivRoot>
    </StyledComponentsRegistry>
  );
}
