import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./(components)/Footer"
const rw = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { StateContext } from "../context/StateContext";

export default function RootLayout({ children, modal }) {
  return (
    <html className={rw.className}>
      <StateContext>
        <body id="next" className=" bg-neutral-900 text-white">
          {children}
          {modal}
          <Footer/>
        </body>
        
      </StateContext>
    </html>
  );
}

