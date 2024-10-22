import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orus Studio",
  description: "#1 software solutions agency, providing top notch service from design to development and deployment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#F5F7F8", position: "relative", overflowX: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
