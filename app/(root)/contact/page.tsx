import React from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mt-2">
          We would love to hear from you! Reach out to us for inquiries,
          collaborations, or project discussions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Left Side - Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <MapPin size={20} className="text-secondary" /> Our Office
            </h3>
            <p className="mt-2 text-gray-700">
              <strong>Mylaru Infra</strong>
            </p>
            <p className="text-gray-600">
              O/no-D1, Sai Gold Plaza
              <span className="text-sm">(Bharath Function Hall Area)</span>,
              Proddatur, AP - 516360, India
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 flex items-center gap-2">
              <Phone size={20} className="text-secondary" /> Contact Details
            </h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+911234567890"
                  className="text-secondary hover:underline"
                >
                  +91 72072 09227
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:mylaruinfra@gmail.com"
                  className="text-secondary hover:underline"
                >
                  mylaruinfra@gmail.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.mylaruinfra.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  www.mylaruinfra.in
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 flex items-center gap-2">
              <Clock size={20} className="text-secondary" /> Business Hours
            </h3>
            <ul className="mt-2 text-gray-700">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>

            {/* Social Media Links */}
            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.facebook.com/mylaruinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-secondary transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/mylaruinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-secondary transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/mylaruinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-secondary transition duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Send Us a Message
            </h3>
            <form
              action="your-form-handler-url"
              method="POST"
              className="mt-4 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary text-white hover:bg-secondary-dark transition duration-300"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
