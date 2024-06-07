import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./forms.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vape Lounge",
  description: "Website for selling electronic cigarettes and smoking products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex gap-2 items-stretch">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
