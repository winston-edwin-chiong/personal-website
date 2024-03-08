import "./globals.css";
import { Exo } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import { MyThemeContextProvider } from "./contexts/ThemeContext";

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "Winston Chiong",
  description: "Winston's Personal Website :D",
};

export default function RootLayout({ children }) {
  return (
    <MyThemeContextProvider>
      <html lang="en" className="bg-secondary">
        <body
          className={exo.className + " bg-primary" + " text-primary-content"}
          data-theme="dark"
        >
          <div className="flex flex-col h-screen">
            <Navbar />
            <PageWrapper>
              {children}
            </PageWrapper>
            <Footer />
          </div>
        </body>
      </html>
    </MyThemeContextProvider>
  );
}
