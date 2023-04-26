import "./globals.css";
import { Inter } from "next/font/google";
const rw = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { StateContext } from "../context/StateContext";

export default function RootLayout({ children, Popular }) {
  return (
    <html className={rw.className}>
      <head />
      <body id="next" className=" bg-neutral-900 text-white">
        <StateContext>
                    {children}
                  
          </StateContext> 
      </body>
    </html>
  );
}
