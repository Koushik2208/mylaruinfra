import Link from "next/link";
import React from "react";
// import { Button } from "./ui/button";
// import { signOut } from "@/auth";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Sidebar = () => {
  return (
    <MobileMenu>
      <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
        <div className="p-4 border-b border-sidebar-border">
          <Link
            href="/"
            className="text-lg font-semibold text-sidebar-foreground"
          >
            Mylaru Infra
          </Link>
        </div>

        <NavLinks />

        {/* <div className="p-4 mt-auto border-t border-sidebar-border">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button 
              className="w-full bg-sidebar-accent hover:bg-sidebar-accent/90 text-sidebar-accent-foreground" 
              type="submit"
            >
              Sign Out
            </Button>
          </form>
        </div> */}
      </div>
    </MobileMenu>
  );
};

export default Sidebar;
