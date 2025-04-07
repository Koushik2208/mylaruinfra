import { auth } from "@/auth";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session?.user?.id) redirect("/sign-in");
  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        <div className="hidden lg:block w-64 shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <main className="p-4 lg:p-6 bg-muted/5">
            <div className="max-w-[1600px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default layout;
