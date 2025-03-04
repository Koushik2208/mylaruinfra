import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <div className="max-w-7xl">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default layout;
