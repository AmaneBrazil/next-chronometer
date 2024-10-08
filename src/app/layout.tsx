import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cronômetro do Next da massa",
  description: "Cronônometro da senhorita Amane para o Next da massa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
