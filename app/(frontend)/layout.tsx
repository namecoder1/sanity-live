import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";

import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Memo App",
  description: "My memo app",
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  );
}
