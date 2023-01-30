import './globals.css'
import {Raleway} from '@next/font/google'
const rw = Raleway({
  weight:['400','500','800','900'],
  preload:false
})

import { StateContext } from "../context/StateContext";

export default function RootLayout({ children }) {
  
  return (
    <html className={rw.className}>
      <head />
      <body>
        <StateContext>
     

        {children}
  
     
        </StateContext>
        </body>
    </html>
  )
}
