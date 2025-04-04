// import { auth } from "@/auth";
import Sidebar from "@/components/Sidebar";
// import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();

  // if (!session?.user?.id) redirect("/sign-in");
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="lg:pl-64">
        <main className="p-4 lg:p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default layout;
