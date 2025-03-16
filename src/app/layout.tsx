import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AYINDE Lab",
  description: "At the intersection of advanced AI engineering and groundbreaking neuroscientific research on human learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="flex flex-col min-h-screen">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-teal-600">AYINDE Lab</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-teal-500">
                    Home
                  </a>
                  <a href="/cohort" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-teal-500">
                    Cohort 1
                  </a>
                  <a href="/research" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-teal-500">
                    Research
                  </a>
                  <a href="/contact" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-teal-500">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
