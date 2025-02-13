import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl text-black dark:text-white">About</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
        This is the About section. Here you can describe yourself.
      </p>
    </section>
  );
};

export default About;
