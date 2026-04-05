import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Buildla - Renovering med fast pris och garanti",
  description:
    "Renovering av ditt hem med fast pris, garanterat resultat, 5 års garanti och personlig projektledning.",
  keywords: [
    "renovering",
    "badrum",
    "kök",
    "golv",
    "målning",
    "Sverige",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
