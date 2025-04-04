"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1 p-4 space-y-2">
      {sidebarLinks.map((link) => {
        const isSelected =
          (link.route !== "/dashboard" &&
            pathname?.includes(link.route) &&
            link.route.length > 0) ||
          pathname === link.route;

        return (
          <Link
            key={link.text}
            href={link.route}
            className={cn(
              "flex items-center p-3 rounded-lg transition-colors duration-200",
              isSelected
                ? "bg-sidebar-accent/80 text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/10"
            )}
          >
            <Image
              src={link.img}
              alt={link.text}
              width={20}
              height={20}
              className={cn(
                "mr-3 transition-colors duration-200",
                isSelected ? "brightness-0 invert opacity-100" : "brightness-0 invert opacity-70"
              )}
            />
            <span className="text-sm font-medium">{link.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
