import { ReactNode } from "react";
import { Header } from "./components/unique/Header";
import { Footer } from "./components/unique/Footer";

export default async function RootLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
