"use client";

import CustomThemeProvider from "@/components/CustomThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gradient-to-tr from-[#eef5ff] to-[#f9ffeb] dark:from-[#141E30] dark:to-[#2a5298]">
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div id="modal-root" />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
