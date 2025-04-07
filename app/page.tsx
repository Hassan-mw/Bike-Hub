"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Hero from './HomepageComponents/Hero';
import PopularCompany from './HomepageComponents/PopularCompany';
import BikeDetails from './HomepageComponents/BikeDetails';
import Test from './HomepageComponents/Test';
import Testmonials from './HomepageComponents/Testmonials';
import Status from './HomepageComponents/Status';
import Carousels from './HomepageComponents/Carousels';
import HoverCard from './HomepageComponents/HoverCard';
import AppDownload from './HomepageComponents/AppDownload';
import BrowseByStyle from './HomepageComponents/BrowseByStyle';
import AboutWebsite from './HomepageComponents/AboutWebsite';
import PopularBikeSearch from './HomepageComponents/PopularBikeSearch';
import FeaturesBike from './HomepageComponents/FeaturesBike';
import Footer from "./HomepageComponents/Footer";


const Page = () => {
  const containerRef = useRef(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null); // Store Locomotive instance
  const popularBikeSearchRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Locomotive Scroll
    scrollInstance.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    // Listen to scroll events to animate sections based on scroll position
    const handleScroll = () => {
      if (popularBikeSearchRef.current) {
        const position = popularBikeSearchRef.current.getBoundingClientRect();
        
        if (position.top <= 30) {
          // If PopularBikeSearch is scrolled over Hero, apply the smooth scroll
          // You can customize this logic for other sections too
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);


    setTimeout(() => {
      scrollInstance.current?.update();
    }, 500); // Yo

    // useEffect(() => {
    //   window.addEventListener("load", () => {
    //     scrollInstance.current?.update();
    //   });
    // }, []);
    
    // Cleanup on unmount
  //   return () => {
  //     if (scrollInstance.current) scrollInstance.current.destroy();
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container  className=" bg-white">
      {/* Sections will scroll smoothly but we will only animate the PopularBikeSearch on scroll */}
      <Hero />
      
      <div 
        ref={popularBikeSearchRef}  className="py-12 w-full bg-transparent flex flex-col space-y-20 items-center justify-center"   data-scroll-section    style={{ backgroundColor: '#fff', position: 'relative',  zIndex: 50, }} >
 
      <PopularBikeSearch />
      <FeaturesBike />
      <AboutWebsite />
      <PopularCompany />
      <Status />
      {/* <Status /> */}
      <Testmonials />
      {/* <Testmonials /> */}
      <AppDownload />
      <Footer/>
    </div>
      </div>
  );
};

export default Page;
