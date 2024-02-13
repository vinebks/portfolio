"use client";
import StyledComponentsRegistry from "../../lib/registry";
import Header from "./header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <Header />
      {children}
    </StyledComponentsRegistry>
  );
}
