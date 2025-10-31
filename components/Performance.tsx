"use client";

import { performanceImages, performanceImgPositions } from "@/constans";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width : 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionElment = sectionRef.current;
      if (!sectionElment) return;
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      const timeline = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionElment,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars: Record<string, string | number> = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        timeline.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Start.</h2>
      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `performance Image #${index + 1}`}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with responsiveness that keeps up
          with your imagination. The M4 family of chips features an GPU with a
          second-generation hardware-acelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            {" "}
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization - driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
