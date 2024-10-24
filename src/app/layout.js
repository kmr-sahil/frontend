import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head component
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orus Studio",
  description: "#1 software solutions agency, providing top notch service from design to development and deployment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
        <meta
          property="og:title"
          content={metadata.title}
        />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content="Orus Studio" />
        <meta property="og:url" content="https://orus.studio/" />
        <meta property="og:image" content="/favicon.png" />
        <meta name="twitter:card" content="summary"></meta>
        <link rel="icon" href={metadata.icons.icon[0].href} />
      </Head>
      <body
        className={inter.className}
        style={{ backgroundColor: "#F5F7F8", position: "relative", overflowX: "hidden" }}
      >
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-H2XF2KQB0E"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H2XF2KQB0E');`}
        </Script>
      </body>
    </html>
  );
}
