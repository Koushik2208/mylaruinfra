"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    // { href: "/projects", label: "Projects" },
    // { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group transition-transform hover:scale-105"
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="transition-transform "
            />
            <p className="text-2xl font-semibold text-foreground max-sm:text-lg uppercase tracking-wider">
              <span className="text-primary">Mylaru</span>{" "}
              <span className="text-secondary">Infra</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-base font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-100 transition-transform duration-300" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
