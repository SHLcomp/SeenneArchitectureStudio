import "./Hero.scss";

import video from "../../assets/videos/SasVid.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const titleRef = useRef();
  const contRef = useRef();
  const descRef = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const tl = gsap.timeline();
      const split = SplitText.create(titleRef.current, {
        type: "chars",
      });

      // SAS entrance

      tl.from(split.chars, {
        y: 300,
        opacity: 0,
        scale: 0.8,
        duration:1.5,
        stagger: 0.1,
        ease: "power4.out",
      });

      // Desktop
      mm.add("(min-width: 1025px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: contRef.current,
              start: "top top",
              end: "+=1200",
              scrub: 1,
              pin: true,
            },
          })
          .to(titleRef.current, {
            y: "-23vh",
            scale: 0.25,
            ease: "none",
          })
          .to(descRef.current, {
            y: "-60vh",
            opacity: "100%",
            ease: "none",
          });
      });

      // Tablets
      mm.add("(min-width: 601px) and (max-width: 1024px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: contRef.current,
              start: "top top",
              end: "+=700",
              scrub: 1,
              pin: true,
            },
          })
          .to(titleRef.current, {
            y: "5vh",
            scale: 0.62,
            ease: "none",
            opacity: 1
          })
          .to(descRef.current, {
            y: "8vh",
            opacity: 1,
            ease: "none",
          });
      });

      // Mobile
      mm.add("(max-width: 600px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: contRef.current,
              start: "top top",
              end: "+=1000",
              scrub: 1,
              pin: true,
            },
          })
          .to(titleRef.current, {
            y: "-3vh",
            scale: 0.35,
            ease: "none",
          })
          .to(descRef.current, {
            y: "-11vh",
            opacity: 1,
            ease: "none",
          });
      });

      return () => mm.revert();
    },
    { scope: contRef },
  );

  return (
    <section className="hero" ref={contRef}>
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-cont">
        <h1 className="title" ref={titleRef}>
          SAS
        </h1>

        <div className="desc" ref={descRef}>
          <p>Seenne Architecture Studio</p>

          <p>Designed Around Human Experience</p>

          <div className="cta-div">
            <Link to={"/works"} className="a"><h3 className="cta1">Explore Works</h3></Link>
          </div>
          <div className="scroll">
            <h5>Scroll to explore</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
