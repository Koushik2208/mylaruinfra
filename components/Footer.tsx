import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            About Mylaru Infra
          </h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Mylaru Infra is a trusted name in construction and design, offering
            innovative solutions in residential, commercial, and industrial
            projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {[
              { name: "About Us", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Projects", link: "/projects" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="mt-3">
            <strong className="text-white">Address:</strong> O/no-D1, Sai Gold
            Plaza
            <span className="text-sm">(Bharath Function Hall Area)</span>,
            Proddatur, AP - 516360, India
          </p>
          <p>
            <strong className="text-white">Phone:</strong>{" "}
            <a
              href="tel:+911234567890"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              +91 72072 09227
            </a>
          </p>
          <p>
            <strong className="text-white">Email:</strong>{" "}
            <a
              href="mailto:info@mylaruinfra.com"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              mylaruinfra@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-white">Follow Us</h3>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.facebook.com/mylaruinfra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/mylaruinfra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/mylaruinfra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mylaru Infra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
