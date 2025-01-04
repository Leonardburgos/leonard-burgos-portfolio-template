import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ScrollableSections = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Avoid auto-centering Home, scroll to the top of the page
    if (!location.hash) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // Trigger when 90% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`; 
          if (location.hash !== newHash) {
            navigate(newHash, { replace: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [navigate, location]);

  return (
    <main className="scroll-smooth bg-gradient-to-b from-[#eeeeee] to-[#ffffff] dark:from-[#212121] dark:to-[#ffffff] bg-[length:100%_7000%] bg-no-repeat ">
      {sections.map(({ id, label }) => (
        <section
          key={id}
          id={id}
          className="min-h-screen "
          style={{ padding: "4rem 2rem" }}
        >
          <h1 className="text-4xl text-black dark:text-white">{label}</h1>
        </section>
      ))}
    </main>
  );
};

export default ScrollableSections;
