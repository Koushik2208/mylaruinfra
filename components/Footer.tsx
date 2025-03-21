import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              About Mylaru Infra
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Mylaru Infra is a trusted name in construction and design,
              offering innovative solutions in residential, commercial, and
              industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                // { name: "Projects", link: "/projects" },
                // { name: "Blogs", link: "/blogs" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Address:</span>{" "}
                  O/no-D1, Sai Gold Plaza
                  <span className="block text-sm mt-1">
                    (Bharath Function Hall Area), Proddatur, AP - 516360, India
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+911234567890"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +91 72072 09227
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@mylaruinfra.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  mylaruinfra@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/mylaruinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mylaruinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mylaruinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Mylaru Infra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
