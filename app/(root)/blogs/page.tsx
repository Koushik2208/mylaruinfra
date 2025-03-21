import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    title: "The Future of Sustainable Construction",
    excerpt:
      "Explore how sustainable materials and green building practices are shaping the future of construction.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    author: "John Doe",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Sustainability",
  },
  {
    title: "Modern Design Trends in Residential Architecture",
    excerpt:
      "Discover the latest trends in residential architecture and how they influence modern home design.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
    author: "Jane Smith",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Architecture",
  },
  {
    title: "Smart Building Technology: A Comprehensive Guide",
    excerpt:
      "Learn about the latest smart building technologies and their impact on modern construction.",
    image: "https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?q=80&w=2070",
    author: "Mike Johnson",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    title: "The Art of Interior Design in Commercial Spaces",
    excerpt:
      "Explore how interior design principles are applied to create engaging commercial environments.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070",
    author: "Sarah Wilson",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Interior Design",
  },
  {
    title: "Project Management Best Practices",
    excerpt:
      "Essential tips and strategies for effective project management in construction.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070",
    author: "David Brown",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Management",
  },
  {
    title: "Innovations in Construction Materials",
    excerpt:
      "A look at the latest innovations in construction materials and their applications.",
    image: "https://images.unsplash.com/photo-1565636298446-3b0c0c0c0c0c?q=80&w=2070",
    author: "Emily Davis",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Materials",
  },
];

const categories = [
  "All",
  "Sustainability",
  "Architecture",
  "Technology",
  "Interior Design",
  "Management",
  "Materials",
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070"
            alt="Our Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, trends, and updates from the world of construction and design.
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

      {/* Featured Blog */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogs[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogs[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {blogs[0].title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {blogs[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {blogs[0].author}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {blogs[0].category}
                </span>
              </div>
              <Button className="group">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {blog.author}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest insights, trends, and news from the
              construction industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage; 