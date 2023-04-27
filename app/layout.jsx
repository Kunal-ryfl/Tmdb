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
      <StateContext>
        <body id="next" className=" bg-neutral-900 text-white">
          {children}
        </body>
      </StateContext>
    </html>
  );
}
