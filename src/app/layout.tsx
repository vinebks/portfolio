"use client";
import StyledComponentsRegistry from "../../lib/registry";
import App from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        <StyledComponentsRegistry>
          <App />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
