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
    <div className="flex-1 p-4 space-y-3">
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
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
              "text-foreground/80 hover:text-foreground",
              isSelected
                ? "bg-primary text-primary-foreground font-medium shadow-sm"
                : "hover:bg-muted/50"
            )}
          >
            <Image
              src={link.img}
              alt={link.text}
              width={20}
              height={20}
              className={cn(
                "transition-all duration-200",
                isSelected
                  ? "brightness-0 invert opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              )}
            />
            <span className="text-sm">{link.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
