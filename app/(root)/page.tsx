import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const services = [
    { name: "Planning & Design", image: "/images/planning.png" },
    { name: "Residential Construction", image: "/images/residential.png" },
    { name: "Commercial Construction", image: "/images/commercial.png" },
    { name: "Infrastructure Development", image: "/images/infrastructure.png" },
    { name: "Builders & Project Management", image: "/images/builders.png" },
  ];

  return (
    <div className="flex flex-col gap-14 pb-20 bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Hero Section */}
      <section className="relative bg-cover bg-no-repeat bg-center bg-image">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative min-h-screen flex items-center justify-center text-center px-6 md:px-16">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
              Building Dreams, Crafting Legacies.
            </h1>
            <div className="mt-4 text-white text-lg md:text-xl bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md inline-block">
              Creating spaces where innovation meets craftsmanship,
              <br className="hidden md:inline" /> and every structure tells a
              story.
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding px-6 md:px-16">
        <h1 className="text-3xl font-bold text-center mb-6">We are...</h1>
        <Card className="intersect-once intersect:motion-preset-slide-up motion-delay-150 p-6 bg-primary-foreground shadow-lg">
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Welcome to <span className="font-bold">Mylaru Infra</span>, where
              we bring your visions to life with quality craftsmanship,
              innovative solutions, and expert design services. As a dynamic and
              growing construction company, we go beyond just building—we help
              shape ideas, refine concepts, and transform them into reality. Our
              team of skilled professionals, including architects, engineers,
              and designers, works with precision and creativity to deliver
              well-planned, aesthetically appealing, and structurally sound
              projects. Whether it&apos;s residential or commercial spaces, we
              provide end-to-end solutions, from design consultation and
              planning to execution and completion.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Our Services Section */}
      <section className="section-padding px-6 md:px-16">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <li
              key={index}
              className="relative overflow-hidden bg-white cursor-pointer shadow-lg rounded-xl text-center transition-transform transform-gpu 
      hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
              </div>
              {/* Service Name (Always Visible, but Enhances on Hover) */}
              <p className="absolute bottom-[50%] top-[40%] left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
