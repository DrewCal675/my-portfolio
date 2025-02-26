import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Chatbot from "./Chatbot";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="header">
        <h1>Andrew Calise</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#languages">Languages</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      <section className="hero">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Computer Science Student at Kean University
        </motion.h2>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        <img src="/images/profile.jpg" width={250} height={250} alt="Andrew Calise" className="profile-pic" />
        <p>Hi, I'm Andrew Calise, a computer science student at Kean University. I love coding, and I am interested in being a Software Engineer.</p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <img src="/images/chatbot.png" width={300} height={125} alt="AI Chatbot" />
          <p><b>AI Chatbot</b><br />An AI chatbot powered by GPT-4o mini.</p>
        </div>
        <div className="project-card">
          <a href="https://obi.kean.edu/~calisea@kean.edu/CPS3500/assignment5/game4/game4.html" target="_blank"><img src="/images/dinogame.png" width={300} height={250} alt="Dino Game" /></a>
          <p><b>Game Recreation</b><br />A recreation of the Google Chrome Dinosaur Game.</p>
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <img src="/images/internship.jpg" width={300} height={250} alt="Internship" />
          <p><b>Volunteer Tech Support</b><br />Tech Support at Westfield Senior Citizen Center in Westfield, NJ.</p>
        </div>
      </section>

      <section id="languages" className="languages">
        <h2>Languages Learned</h2>
        <div className="language-container">
          <div className="language-card">
            <img src="/images/python.png" width={200} height={200} alt="Python" />
            <p>Python</p>
          </div>
          <div className="language-card">
            <img src="/images/javascript.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="language-card">
            <img src="/images/php.png" alt="php" />
            <p>   PHP   </p>
          </div>
          <div className="language-card">
            <img src="/images/java.png" alt="Java" />
            <p>Java</p>
          </div>
          <div className="language-card">
            <img src="/images/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
        </div>
        <div className="language-container">
          <div className="language-card">
            <img src="/images/css.png" width={200} height={200} alt="CSS" />
            <p>CSS</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <div className="icons">
          <a href="https://github.com/drewcal675" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/andrew-calise" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:andrewocalise@gmail.com"><FaEnvelope /></a>
        </div>
      </section>
      
      <Chatbot />
    </div>
  );
}
