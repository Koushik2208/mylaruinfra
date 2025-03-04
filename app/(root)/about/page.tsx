import React from "react";

const About = () => {
  return (
    <section className="section-padding py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Who We Are */}
        <div className="text-center">
          <h2 className="text-primary">Who We Are</h2>
          <p className="mt-4">
            Welcome to <strong>Mylaru Infra</strong>, where we bring your
            visions to life with quality craftsmanship, innovative solutions,
            and expert design services. As a dynamic and growing construction
            company, we go beyond just building—we help shape ideas, refine
            concepts, and transform them into reality.
          </p>
          <p className="mt-4">
            Our skilled professionals, including architects, engineers, and
            designers, work with precision and creativity to deliver
            well-planned, aesthetically appealing, and structurally sound
            projects. Whether it&apos;s residential or commercial spaces, we
            provide end-to-end solutions—from design consultation and planning
            to execution and completion. At <strong>Mylaru Infra</strong>, we
            don&apos;t just construct buildings—we design, innovate, and create
            spaces that inspire.
          </p>
        </div>

        {/* Our Philosophy */}
        <div className="text-center">
          <h2 className="text-primary">Our Philosophy</h2>
          <p className="mt-4">
            Our philosophy centers on the belief that a home is more than just a
            structure— it&apos;s a sanctuary that embodies comfort, beauty, and
            functionality. We are dedicated to creating spaces that exceed
            expectations through **innovative and effective design**. With a
            commitment to excellence, we use only the highest quality materials
            and craftsmanship to foster environments where people can thrive.
          </p>
          <p className="mt-4">
            We strive to **transform architectural dreams into reality**, one
            meticulously designed home at a time.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-primary">Why Choose Us?</h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <li className="flex items-start space-x-3 bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-secondary font-semibold">✔</span>
              <span>
                <strong>Quality Assurance</strong> – We use the finest materials
                and latest technology.
              </span>
            </li>
            <li className="flex items-start space-x-3 bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-secondary font-semibold">✔</span>
              <span>
                <strong>Experienced Team</strong> – Engineers, architects, and
                workers with years of expertise.
              </span>
            </li>
            <li className="flex items-start space-x-3 bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-secondary font-semibold">✔</span>
              <span>
                <strong>Customer-Centric Approach</strong> – Your vision is our
                priority.
              </span>
            </li>
            <li className="flex items-start space-x-3 bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-secondary font-semibold">✔</span>
              <span>
                <strong>Timely Execution</strong> – We ensure projects are
                completed within the committed timeline.
              </span>
            </li>
            <li className="flex items-start space-x-3 bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-secondary font-semibold">✔</span>
              <span>
                <strong>Innovative Design</strong> – We not only build but
                provide creative design solutions.
              </span>
            </li>
            <li className="flex items-start space-x-3 bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
              <span className="text-secondary font-semibold">✔</span>
              <span>
                <strong>End-to-End Solutions</strong> – From planning and
                designing to execution and completion.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
