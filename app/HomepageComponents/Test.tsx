"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Test = () => {
  const containerRef = useRef(null);
  const scrollInstance = useRef(null); // Store Locomotive instance

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Locomotive Scroll
    scrollInstance.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true, // Enable smooth scrolling
      multiplier: 1.5, // Adjust scroll speed multiplier
      class: "is-revealed", // Animation class
    });

    // Cleanup on unmount
    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      <section data-scroll-section className=" bg-red-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Section 1</h1>
      </section>
      <section data-scroll-section className=" bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Section 2</h1>
      </section>
      <section data-scroll-section className=" bg-green-500 flex items-center justify-center">
        <h1 className="text-white text-5xl">Section 3</h1>
      </section>
    </div>
  );
};

export default Test;
