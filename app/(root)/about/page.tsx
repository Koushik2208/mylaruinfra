import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Clock } from "lucide-react";
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

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070"
            alt="About Mylaru Infra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building dreams into reality with expertise, innovation, and
            dedication.
          </p>
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

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mylaru Infra has grown from a small construction company to a
                leading name in the industry. Our journey is marked by
                continuous innovation, unwavering commitment to quality, and a
                passion for excellence.
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

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Quality
              </h3>
              <p className="text-muted-foreground">
                We maintain the highest standards of quality in every project,
                ensuring durability and excellence.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                We embrace new technologies and methods to deliver cutting-edge
                solutions.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Integrity
              </h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty, building trust with
                our clients and partners.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work Together?
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

export default AboutPage;
