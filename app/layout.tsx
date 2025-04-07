import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mylaru Infra - Construction & Design Solutions",
  description:
    "Mylaru Infra provides comprehensive construction and design solutions for residential, commercial, and industrial projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
