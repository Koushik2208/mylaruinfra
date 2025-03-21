"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Ruler,
  Wrench,
  Zap,
  Building2,
  Home,
  Trees,
  PaintBucket,
  Factory,
  Droplets,
  Flame,
  FileText,
  Lightbulb,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const engineeringServices = [
  {
    title: "Civil Engineering",
    icon: Building2,
    services: [
      {
        category: "Surveying",
        // items: [
        //   "Land survey",
        //   "Topographical survey",
        //   "Total station survey",
        //   "Road survey",
        //   "Contour survey",
        //   "As-built survey",
        //   "Layout marking",
        //   "Estimating earth work volumes",
        //   "Landscape survey",
        // ],
        icon: Ruler,
      },
      {
        category: "Interior Designing",
        icon: Home,
      },
      {
        category: "Construction",
        icon: Factory,
      },
      {
        category: "Landscape Architecture",
        icon: Trees,
      },
      {
        category: "Architectural Planning",
        icon: PaintBucket,
      },
      {
        category: "Structural Designs",
        icon: LayoutGrid,
      },
    ],
  },
  {
    title: "Mechanical Engineering",
    icon: Wrench,
    services: [
      {
        category: "Plumbing",
        icon: Droplets,
      },
      {
        category: "HVAC",
        icon: Flame,
      },
      {
        category: "Fire fighting",
        icon: Flame,
      },
      {
        category: "Drafting",
        icon: FileText,
      },
    ],
  },
  {
    title: "Electrical Engineering",
    icon: Zap,
    services: [
      {
        category: "Electrical",
        icon: Lightbulb,
      },
      {
        category: "Electrical floor plan layout",
        icon: LayoutGrid,
      },
      {
        category: "Branch circuit & panel scheduling",
        icon: FileText,
      },
    ],
  },
];

const ServiceCategory = ({
  service,
}: {
  service: { category: string; icon: React.ElementType; items?: string[] };
}) => {
  return (
    <div className="group">
      <div className="flex items-center gap-3 mb-2">
        <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        <h3 className="text-lg font-semibold text-foreground">
          {service.category}
        </h3>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070"
            alt="Engineering Expertise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Engineering Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engineeringServices.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-6">
                  {category.services.map((service, serviceIndex) => (
                    <ServiceCategory key={serviceIndex} service={service} />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Engineering Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your engineering vision to life
            with our expertise and dedication.
          </p>
          <Button size="lg" className="group" asChild>
            <Link href="/contact" className="hover:text-white ">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
