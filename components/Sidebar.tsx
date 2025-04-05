import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/auth";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <MobileMenu>
      <div className="flex flex-col h-full bg-background border-r border-border/20">
        <div className="p-6 border-b border-border/20">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-lg font-bold text-foreground group transition-all duration-200 hover:scale-105"
          >
            <span className="text-primary">Mylaru</span>
            <span className="text-foreground/80">Infra</span>
          </Link>
        </div>

        <NavLinks />

        <div className="p-4 mt-auto border-t border-border/20">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              variant="outline"
              className="w-full group text-primary-foreground/80 hover:text-primary-foreground border-primary-foreground/20"
              type="submit"
            >
              <LogOut className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    </MobileMenu>
  );
};

export default Sidebar;
