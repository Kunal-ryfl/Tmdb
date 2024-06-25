import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

const rw = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { StateContext } from "../context/StateContext";

export default function RootLayout({ children, modal }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html className={rw.className}>
        <StateContext>
          <body id="next" className=" bg-neutral-900 text-white">
            {children}
            <Toaster/>
            {modal}
            <Footer />
          </body>
        </StateContext>
      </html>
    </ClerkProvider>
  );
}
