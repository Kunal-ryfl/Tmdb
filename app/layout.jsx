import "./globals.css";
import { Open_Sans } from "next/font/google";
const rw = Open_Sans({
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
});

import { StateContext } from "../context/StateContext";
import Trending from "./(components)/Trending";

export default function RootLayout({ children, Popular }) {
  return (
    <html className={rw.className}>
      <head />
      <body id="next" className=" bg-black text-white">
        <StateContext>
                    {children}
          </StateContext>
      </body>
    </html>
  );
}
