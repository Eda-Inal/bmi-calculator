
import "./globals.css";
import Navbar from "./components/navbar"




export default function RootLayout({children})
{
  return (
    <html lang="en">
      <Navbar/>
      <body>{children}</body>
    </html>
  );
}
