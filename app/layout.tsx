import { ThemeProvider } from "../components/ui/theme-provider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Mazin Jasim",
  description: "Website Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
      
      <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          themes={['light', 'dark']}
          >
          
          
              {children}
           
           
          </ThemeProvider>
      
          </body>
    </html>
  );
}
