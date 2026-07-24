import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import "./globals.css";

const heading = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "../public/fonts/OTF/LGEIHeadline-Thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/OTF/LGEIHeadline-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/OTF/LGEIHeadline-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/OTF/LGEIHeadline-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/OTF/LGEIHeadline-Bold.otf", weight: "700", style: "normal" },
  ],
});

const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "../public/fonts/OTF/LGEIText-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/OTF/LGEIText-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/OTF/LGEIText-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/OTF/LGEIText-Bold.otf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Consistent For Life",
  description:
    "Products built to stay with you, reliable companions for every chapter of home life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
