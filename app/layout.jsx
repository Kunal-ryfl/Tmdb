import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./(components)/Footer"
const rw = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { StateContext } from "../context/StateContext";

export default function RootLayout({ children, Popular }) {
  return (
    <html className={rw.className}>
        <body id="next" className=" bg-neutral-900 text-white">
      <StateContext>
          {children}
      </StateContext>
          <Footer/>
        </body>
    </html>
  );
}

