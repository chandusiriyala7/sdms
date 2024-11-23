"use client"; // For client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Stats from "./Stats";
import "../styles/globals.css";

const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const WhoWeAreRef = useRef([]);
;
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Start when the top of the heading is 80% of the viewport
          toggleActions: "play reverse play reverse", // Replays the animation on scroll up and down
        },
      }
    );
    // Animate the heading
    gsap.fromTo(
      WhoWeAreRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.7,
        ease: "power3.out",
        scrollTrigger: {
          
          rigger: WhoWeAreRef.current,
          start: "top 80%", // Start when the top of the heading is 80% of the viewport
          toggleActions: "play reverse play reverse", // Replays the animation on scroll up and down
        },
      }
    );

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Trigger animation when the card enters the viewport
            toggleActions: "play reverse play reverse", // Replays the animation on scroll up and down
          },
        }
      );
    });
  }, []);

  return (
    <section className="services-container">
      {/* Heading */}
      <h2 ref={headingRef} className="services-heading">
        our services
      </h2>
      <p className="our-services-tag">
        Like a constellation, our services align to create a universe of endless
        possibilities.
      </p>

      {/* Service Cards */}
      {[
        {
          imgSrc: "./images/Digital-Marketing.jpg",
          title: "digital solutions & development",
          list: [
            "Software as a Service (SaaS)",
            "Automation / API Creation",
            "Website / App Creation",
            "POS Systems",
            "UI/UX Design",
          ],
        },
        {
          imgSrc: "./images/socialmedia-management.jpeg",
          title: "creative & content services",
          list: ["Video Creation (from Reels to AR/VR videos)", "Content Writing"],
        },
        {
          imgSrc: "./images/website-management.jpeg",
          title: "marketing & management",
          list: ["Social Media Management", "Ads Management"],
        },
        {
          imgSrc: "./images/website-management.jpeg",
          title: "event marketing, management & training solutions",
          list: [
            "Hackathons & Workshops (Complete end-to-end management)",
            "College-level Inplant Trainings",
          ],
        },
      ].map((service, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="services-card"
        >
          {/* Image Section */}
          <img
            className="services-image"
            src={service.imgSrc}
            alt={`${service.title} Image`}
          />
          {/* Text Section */}
          <div className="services-text">
            <h3 className="services-text-head">{service.title}</h3>
            <ul className="services-text-para">
              {service.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button className="services-text-button">View Work</button>
          </div>
        </div>
      ))}

      {/* Who We Are Section */}
      <div className="who-are-we">
        <h2 className="who-are-we-head" ref={WhoWeAreRef}>who we are</h2>
        <h4 className="who-are-we-subhead">
          As a pioneering force in the digital galaxy, SDMS® blends creativity with
          cutting-edge technology to craft your brand’s journey through the stars.
        </h4>
        <p className="who-are-we-tag">
          We help your business launch into the digital cosmos, delivering powerful
          websites and apps that leave a lasting impact. Our expertise in the latest
          digital trends ensures your brand orbits success, expanding across the universe
          of possibilities.
        </p>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Services;
