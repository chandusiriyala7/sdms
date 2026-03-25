"use client";
import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import "./SchoolTraining.css";
import "../Components/TestimonialContainer/TestimonialContainer.css";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useScrollAnimation } from "@/app/Hooks/useScrollAnimation";
import ScrollFromLeft from "../Components/ScrollFromLeft";
import ScrollFromRight from "../Components/ScrollFromRight";
import ScrollRevealText from "../Components/ScrollRevealText";
import ScrollFromBottom from "../Components/ScrollFromBottom";
import FluidCursor from "../FluidCursor";
import MainFooter from "../Components/MainFooter/MainFooter";



export default function SchoolTraining() {
  /* ── dark mode & menu ── */
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !darkMode);
  };
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  /* ── image scroll refs ── */
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const desRef1 = useRef(null);
  const desRef2 = useRef(null);

  const { translateY: translateY1 } = useScrollAnimation(desRef1);
  const { translateY: translateY2 } = useScrollAnimation(desRef2);

  /* Left image animation */
  const { scrollYProgress: scrollLeft } = useScroll({
    target: refLeft,
    offset: ["start 90%", "center 80%"],
  });
  const rawTXLeft = useTransform(scrollLeft, [0, 1], [-401, 0]);
  const rawRotLeft = useTransform(scrollLeft, [0, 1], [-10, 0]);
  const rawOpLeft = useTransform(scrollLeft, [0, 1], [0, 1]);
  const translateXLeft = useSpring(rawTXLeft, { stiffness: 120, damping: 20, mass: 1 });
  const rotateLeft = useSpring(rawRotLeft, { stiffness: 120, damping: 20, mass: 1 });
  const opacityLeft = useSpring(rawOpLeft, { stiffness: 120, damping: 20, mass: 1 });

  /* Right image animation */
  const { scrollYProgress: scrollRight } = useScroll({
    target: refRight,
    offset: ["start 90%", "center 80%"],
  });
  const rawTXRight = useTransform(scrollRight, [0, 1], [401.5, 0]);
  const rawRotRight = useTransform(scrollRight, [0, 1], [10, 0]);
  const rawOpRight = useTransform(scrollRight, [0, 1], [0, 1]);
  const translateXRight = useSpring(rawTXRight, { stiffness: 120, damping: 20, mass: 1 });
  const rotateRight = useSpring(rawRotRight, { stiffness: 120, damping: 20, mass: 1 });
  const opacityRight = useSpring(rawOpRight, { stiffness: 120, damping: 20, mass: 1 });

  /* ── stats counter ── */
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState({ students: 0, programs: 0, institutes: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          animateCount("students", 500, 1800);
          animateCount("programs", 10, 1200);
          animateCount("institutes", 20, 1500);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [counted]);

  function animateCount(key, target, duration) {
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts((prev) => ({ ...prev, [key]: Math.floor(eased * target) }));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  return (
    <div className="services-page">
      <FluidCursor />
      <Head>
        <title>School & College Training — Sabeena Digital Media Services</title>
        <meta
          name="description"
          content="Hands-on school and college training programs in UI/UX, Full Stack Development, Machine Learning & more at Sabeena Digital Media Services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />

      {/* ── HERO ── */}
      <div className="content-container">
        <div className="training-container-main">
          <h1 className="services-page-heading">
            school &amp; college <br /> training
          </h1>
          <div className="services-page-service">
            <p className="service-page-head">
              Empowering the next generation of tech leaders — through structured,
              hands-on training programs designed exclusively for school and college
              students.
            </p>
            <p className="service-page-text">
              Whether you&apos;re a school student exploring technology for the first
              time or a college student building career-ready skills, our programs are
              tailored to meet you exactly where you are. We bring industry knowledge
              into the classroom — making learning practical, engaging, and
              future-proof.
            </p>
          </div>
        </div>

        {/* ── PROGRAMS ── */}
        <div className="trainings-container">
          <div className="main-container">

            {/* School Training */}
            <div className="sub-container normal">
              <div className="image-content" ref={refLeft}>
                <motion.img
                  src="./images/school.webp"
                  alt="School Training"
                  style={{
                    translateX: translateXLeft,
                    rotate: rotateLeft,
                    opacity: opacityLeft,
                  }}
                  className="services-image one"
                />
              </div>
              <div
                ref={desRef1}
                style={{ translateY: translateY1 }}
                className="text-content one"
              >
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <h2 className="text-content-head">school training</h2>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <p className="text-content-para">
                      Designed for students in grades 8–12, our school training
                      programs introduce the fundamentals of technology in a highly
                      engaging format. From basic coding to creative digital tools,
                      we build curiosity and confidence in every student.
                    </p>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <ul className="topics-list">
                      <li>Introduction to Programming (Python Basics)</li>
                      <li>Web Design Fundamentals (HTML &amp; CSS)</li>
                      <li>Digital Creativity (Canva, Video Editing)</li>
                      <li>Robotics &amp; AI Awareness</li>
                      <li>Cyber Safety &amp; Online Ethics</li>
                    </ul>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <div className="duration-mode-row">
                      <span className="badge">⏱ 5–10 Days</span>
                      <span className="badge">🌐 Online &amp; Offline</span>
                    </div>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper-btn">
                  <ScrollFromBottom>
                    <a
                      href="https://forms.gle/YshyRVNa9VmobMet7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services-text-button"
                    >
                      Register Now
                    </a>
                  </ScrollFromBottom>
                </div>
              </div>
            </div>

            {/* College Training */}
            <div className="sub-container reverse">
              <div className="image-content" ref={refRight}>
                <motion.img
                  src="./images/college.webp"
                  alt="College Training"
                  style={{
                    translateX: translateXRight,
                    rotate: rotateRight,
                    opacity: opacityRight,
                  }}
                  className="services-image two"
                />
              </div>
              <div
                ref={desRef2}
                style={{ translateY: translateY2 }}
                className="text-content two"
              >
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <h2 className="text-content-head">college training</h2>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <p className="text-content-para">
                      Our college training programs are crafted for undergraduate and
                      postgraduate students who want a competitive edge. Real-world
                      projects, expert mentors, and a curriculum aligned with industry
                      demands.
                    </p>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <ul className="topics-list">
                      <li>Full Stack Web Development (React, Node.js)</li>
                      <li>UI/UX Design with Figma</li>
                      <li>Machine Learning &amp; Data Science</li>
                      <li>Python for Data Analysis</li>
                      <li>Cloud Computing Essentials</li>
                    </ul>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <div className="duration-mode-row">
                      <span className="badge">⏱ 15–30 Days</span>
                      <span className="badge">🌐 Online &amp; Offline</span>
                    </div>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper-btn">
                  <ScrollFromBottom>
                    <a
                      href="https://forms.gle/xgxqXt9zHQcVMYPi6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services-text-button"
                    >
                      Register Now
                    </a>
                  </ScrollFromBottom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <div className="why-section" ref={statsRef}>
        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-item">
            <ScrollFromBottom>
              <span className="stat-number">{counts.students}+</span>
              <span className="stat-label">Students Trained</span>
            </ScrollFromBottom>
          </div>
          <div className="stat-item">
            <ScrollFromBottom>
              <span className="stat-number">{counts.programs}+</span>
              <span className="stat-label">Training Programs</span>
            </ScrollFromBottom>
          </div>
          <div className="stat-item">
            <ScrollFromBottom>
              <span className="stat-number">{counts.institutes}+</span>
              <span className="stat-label">Institutes Partnered</span>
            </ScrollFromBottom>
          </div>
          <div className="stat-item">
            <ScrollFromBottom>
              <span className="stat-number">✓</span>
              <span className="stat-label">Placement Support</span>
            </ScrollFromBottom>
          </div>
        </div>

        {/* Why Heading */}
        <div className="why-heading-wrapper">
          <ScrollFromLeft>
            <ScrollRevealText>
              <h2 className="testimonials-heading-training">
                <span>why train</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromLeft>
          <ScrollFromRight>
            <ScrollRevealText>
              <h2 className="testimonials-heading-training">
                <span>with us?</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromRight>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {[
            { icon: "🎯", title: "Industry-Aligned Curriculum", desc: "Updated every quarter to match current industry demands and emerging technologies." },
            { icon: "🧑‍💻", title: "Learn from Professionals", desc: "All trainers are working professionals, not just academics — real-world knowledge guaranteed." },
            { icon: "📜", title: "Certified on Completion", desc: "Receive a recognized certificate upon completion that adds value to your resume." },
            { icon: "🌐", title: "Flexible Modes", desc: "Choose online or offline sessions — learning that fits your schedule and location." },
            { icon: "💬", title: "Dedicated Mentorship", desc: "One-on-one doubt-clearing sessions and continuous mentorship throughout the program." },
            { icon: "🚀", title: "Project-Based Learning", desc: "Build real-world projects as part of your training — not just theory, but hands-on experience." },
          ].map((item, idx) => (
            <ScrollFromBottom key={idx}>
              <div className="benefit-card">
                <span className="benefit-icon">{item.icon}</span>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            </ScrollFromBottom>
          ))}
        </div>
      </div>



      {/* ── CTA BANNER ── */}
      <div className="cta-banner">
        <ScrollFromBottom>
          <h2 className="cta-heading">
            ready to <br /> level up?
          </h2>
        </ScrollFromBottom>
        <ScrollFromBottom>
          <p className="cta-sub">
            Join hundreds of students already building their future with Sabeena
            Digital Media Services.
          </p>
        </ScrollFromBottom>
        <ScrollFromBottom>
          <a href="/ContactPage" className="services-text-button cta-btn">
            Get In Touch
          </a>
        </ScrollFromBottom>
      </div>

      <MainFooter />
    </div>
  );
}
