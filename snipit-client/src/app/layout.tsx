import type { Metadata } from "next";
import { Inter,Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { AuthProvider } from "./context/ContextAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnipIt",
  description: "Snipit",
};

const roboto_init = Roboto({
  subsets:['latin'],
  weight :['100','300','400','500','700'],
  variable:'--font-roboto'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <ClerkProvider>
       <AuthProvider>
    <html lang="en">
      <body className={`${inter.className} ${roboto_init.variable}`}>{children}</body>
    </html></AuthProvider>
    </ClerkProvider>

  );
}
