"use client";
import StyledComponentsRegistry from "../../lib/registry";
import Home from "../pages/home";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        <StyledComponentsRegistry>
          <Home />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
