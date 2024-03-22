import { ThemeProvider } from "../components/ui/theme-provider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const customMetadata = {
  "google-site-verification": "6k0xE47wgmk_d1TWfoTpS8u-gA3HippZjIpXy1zM6UQ"
};

export const metadata: Metadata & typeof customMetadata = {
  title: "Mazin Jasim Portfolio",
  description: "Mazin Jasim' - Full Stack Web Developer Portfolio",
  ...customMetadata
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Add meta tag here */}
        <meta name="google-site-verification" content={metadata["google-site-verification"]} />
      </head>
      <body className={openSans.className}>
      
      <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
          themes={['light', 'dark']}
          >
          
          
              {children}
           
           
          </ThemeProvider>
      
          </body>
    </html>
  );
}
