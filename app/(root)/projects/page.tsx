import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home, Factory } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    description:
      "A state-of-the-art office complex featuring sustainable design and smart building technology.",
    image:
      "https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?q=80&w=2070",
    icon: Building2,
  },
  {
    title: "Luxury Residential Villa",
    category: "Residential",
    description:
      "A custom-designed luxury villa with premium finishes and modern amenities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    icon: Home,
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    description:
      "A large-scale industrial warehouse with advanced logistics infrastructure.",
    image:
      "https://images.unsplash.com/photo-1565636298446-3b0c0c0c0c0c?q=80&w=2070",
    icon: Factory,
  },
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    description:
      "A prestigious corporate headquarters building with LEED certification.",
    image:
      "https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?q=80&w=2070",
    icon: Building2,
  },
  {
    title: "Modern Apartment Complex",
    category: "Residential",
    description:
      "A multi-unit residential complex with contemporary design and amenities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    icon: Home,
  },
  {
    title: "Manufacturing Facility",
    category: "Industrial",
    description:
      "A specialized manufacturing facility with custom industrial requirements.",
    image:
      "https://images.unsplash.com/photo-1565636298446-3b0c0c0c0c0c?q=80&w=2070",
    icon: Factory,
  },
];

const categories = ["All", "Commercial", "Residential", "Industrial"];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070"
            alt="Our Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various sectors.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="group text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button className="group/btn p-2">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our
            expertise and dedication.
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

export default ProjectsPage;
