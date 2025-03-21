"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Home,
  Factory,
  Award,
  Users,
  Target,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    icon: Award,
    title: "Years of Experience",
    value: "4+",
  },
  {
    icon: Users,
    title: "Happy Clients",
    value: "30+",
  },
  {
    icon: Target,
    title: "Projects Completed",
    value: "30+",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    value: "95%",
  },
];

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom homes and residential projects built with quality materials and expert craftsmanship.",
    icon: Home,
    image: "/images/residential.png",
  },
  {
    title: "Commercial Projects",
    description:
      "Modern office spaces, retail outlets, and commercial buildings designed for success.",
    icon: Building2,
    image: "/images/commercial.png",
  },
  {
    title: "Infrastructure Development",
    description:
      "Sustainable infrastructure projects, including roads, bridges, and water supply systems.",
    icon: Factory,
    image: "/images/infrastructure.png",
  },
];

const HomePage = () => {
  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Mylaru Infra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Building Dreams into Reality
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive construction and design solutions for residential,
            commercial, and industrial projects.
          </p>
          <Button size="lg" className="group" onClick={scrollToAbout}>
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2014, Mylaru Infra has grown from a small
                construction company to a leading name in the industry. Our
                journey is marked by continuous innovation, unwavering
                commitment to quality, and a passion for excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in building not just structures, but lasting
                relationships with our clients. Our team of experienced
                professionals brings together expertise from various fields to
                deliver exceptional results.
              </p>
              <Button className="group">
                Learn More About Our Journey
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button className="group/btn" asChild>
                    <Link href="/services" className="hover:text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
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

export default HomePage;
