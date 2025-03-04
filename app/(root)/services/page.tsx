"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

const Services: React.FC = () => {
  const services: ServiceCategory[] = [
    {
      category: "Planning & Design",
      items: [
        {
          title: "Architectural Planning",
          description: "Creative and functional designs.",
        },
        {
          title: "Structural Design",
          description: "Engineering for durability.",
        },
        {
          title: "Landscape Architecture",
          description: "Outdoor space design.",
        },
        {
          title: "Temple Design",
          description: "Traditional and modern temples.",
        },
        {
          title: "Interior Design",
          description: "Innovative and customized interiors.",
        },
        {
          title: "MEP Services",
          description: "Mechanical, electrical, plumbing.",
        },
        {
          title: "Building Plan Approvals",
          description: "Assistance with local approvals.",
        },
      ],
    },
    {
      category: "Residential Construction",
      items: [
        {
          title: "Custom Home Building",
          description: "Personalized home designs.",
        },
        {
          title: "Apartment Complexes",
          description: "High-quality developments.",
        },
        { title: "Villa Projects", description: "Luxury villa architecture." },
        {
          title: "Residential Renovations",
          description: "Modern space upgrades.",
        },
      ],
    },
    {
      category: "Commercial Construction",
      items: [
        { title: "Office Buildings", description: "Functional workspaces." },
        { title: "Shopping Complexes", description: "Retail space design." },
        {
          title: "Hotels and Restaurants",
          description: "Elegant hospitality projects.",
        },
        {
          title: "Educational Institutions",
          description: "Learning space design.",
        },
      ],
    },
    {
      category: "Infrastructure Development",
      items: [
        {
          title: "Road Construction",
          description: "Quality road and highway build.",
        },
        {
          title: "Industrial Parks",
          description: "Spaces for industrial growth.",
        },
        {
          title: "Public Infrastructure",
          description: "Bridges, buildings, etc.",
        },
      ],
    },
    {
      category: "Builders & Project Management",
      items: [
        {
          title: "General Contracting",
          description: "Full-scale project management.",
        },
        { title: "Turnkey Projects", description: "End-to-end solutions." },
        {
          title: "Real Estate Development",
          description: "Large-scale property development.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="section-padding py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-primary text-3xl font-extrabold animate-pulse">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Discover how we can transform your vision into reality.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {services.map((serviceCategory, index) => (
            <div key={index} className="w-full md:w-1/2 p-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCategory(serviceCategory.category)}
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {serviceCategory.category}
                  </h3>
                  {openCategory === serviceCategory.category ? (
                    <ChevronUp className="text-primary" />
                  ) : (
                    <ChevronDown className="text-primary" />
                  )}
                </div>
                <div
                  className={`mt-4 space-y-4 transition-all duration-300 overflow-hidden ${
                    openCategory === serviceCategory.category
                      ? "max-h-[500px]"
                      : "max-h-0"
                  }`}
                >
                  {serviceCategory.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-secondary/20 rounded-lg p-3 hover:bg-secondary/30 transition-colors duration-300"
                    >
                      <strong className="block text-secondary">
                        {item.title}
                      </strong>
                      <span className="block text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
