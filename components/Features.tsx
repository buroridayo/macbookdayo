"use client";

import { featureSequence, featurestar } from "@/constans";
import useMacbookStore from "@/store";
import StudioLights from "@/three/StudioLights";
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { gsap } from "gsap";
import { Suspense, useRef, lazy, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MacbookModel = lazy(() => import("./models/Macbook"));
gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { setTexture } = useMacbookStore();

  //video maker
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsinline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      v.load();
    });
  }, []);

  //3Dmodel make
  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })

      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="features" ref={sectionRef}>
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className="absolute inset-0 z-10 pointer-events-none ">
        {featurestar.map((tear) => (
          <div
            key={tear.id}
            className={clsx(
              "box opacity-0 translate-y-10 transition-all duration-700",
              tear.styles
            )}
          >
            <img src={tear.icon} alt={tear.highlight} />
            <p>
              <span className="text-white">
                {tear.highlight}
                {tear.text}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
