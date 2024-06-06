import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const revalidate = 1;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} noSupport:hidden`}>
        <ThemeProvider attribute='class' enableSystem={true}>
          <Navbar />
          <main className='sm:mt-4 md:mt-8 lg:12'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
