import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

const sections = [
  { id: "", label: "Home", component: <Home /> },
  { id: "about", label: "About", component: <About /> },
  { id: "skills", label: "Skills", component: <Skills /> },
];

const ScrollableSections = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    let currentVisibleSection = null;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (currentVisibleSection !== entry.target.id) {
            currentVisibleSection = entry.target.id;
            const newHash = `#${currentVisibleSection}`;
            if (location.hash !== newHash) {
              navigate(newHash, { replace: true });
            }
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
    <main className="scroll-smooth bg-gradient-to-b from-[#eeeeee] to-[#ffffff] dark:from-[#212121] dark:to-[#ffffff] bg-[length:100%_7000%] bg-no-repeat">
    {sections.map(({ id, component }) => (
        <div key={id}>{component}</div>
      ))}
  </main>
  );
};

export default ScrollableSections;
