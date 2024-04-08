import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(Components)/Header/Navbar";
import Footer from "./(Components)/Footer/Footer";
import Nav from "./(Components)/Header/Private/Nav";
import AppStore from "@/context/context";
import SubChild from "./subChild";
import CopyrightFooter from "./(Components)/CopyrightFooter/CopyrightFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AmiColo",
  description:
    "AmiColo is a potential startup based out of Concordia University, Montreal, Quebec. It is a web application tailored for students in Montreal, aiming to simplify their housing journey. Many students new to the city face challenges like navigating the local housing market, finding compatible roommates, and accessing reliable neighborhood information. In essence, AmiColo isn't just an application; it's a community platform designed to ease the transition of students in Montreal, ensuring they find suitable housing and build lasting connections.",
  // add favicon
  icons: "images/amicolo-logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppStore>
          <Navbar />
          <Nav />
          <SubChild data={children} />
          {/* All the other pages gets displayed here */}

          <Footer />
          <CopyrightFooter />
        </AppStore>

        {/* Navbar Common to All Pages */}
        {/* <script
          src="https://app.wonderchat.io/scripts/wonderchat.js"
          data-name="wonderchat"
          data-address="app.wonderchat.io"
          data-id="clsvcjdfl002zlg22aajxm3e0"
          data-widget-size="normal"
          data-widget-button-size="normal"
          defer
        ></script> */}
      </body>
    </html>
  );
}
