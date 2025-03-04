"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white/30 px-5 py-3 backdrop-blur-md xs:px-10 md:px-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <p className="text-2xl font-semibold text-primary-dark max-sm:text-lg uppercase">
          <span className="text-secondary-dark">Mylaru</span> Infra
        </p>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-8">
        {[
          { href: "/about", label: "About Us" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact Us" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href
                ? "text-primary-light font-semibold"
                : "text-primary-dark"
            } transition-colors duration-200`}
          >
            {label}
          </Link>
        ))}

        <Link href="/">
          <Button className="rounded-md bg-secondary-dark shadow-md transition-shadow hover:shadow-primary-dark/50">
            Enquiry
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-primary-dark"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X color="white" size={28} />
        ) : (
          <Menu color="white" size={28} />
        )}
      </button>

      {/* Mobile Menu (Dropdown Style) */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {[
          { href: "/about", label: "About Us" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact Us" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-primary-dark text-lg font-medium"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {label}
          </Link>
        ))}

        {/* Enquiry Button (Only for Mobile Menu) */}
        <Link href="/enquiry">
          <Button
            className="rounded-md bg-secondary-dark shadow-md transition-shadow hover:shadow-primary-dark/50"
            onClick={() => setMenuOpen(false)}
          >
            Enquiry
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
