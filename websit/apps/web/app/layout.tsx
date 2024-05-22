import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chuncks",
  description: "Learning English by Chuncks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body style={{ background: "linear-gradient(rgb(206, 229, 253), rgb(255, 255, 255))" }} className={inter.className}>
        <Providers>
          <main className="xl:w-[1200px] xl:m-auto xl:px-0 lg:px-20 sm:px-5 px-2 2xl:px-30 pb-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
