"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <Image src="/title.png" alt="title" width={400} height={200} />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>Buy</button>
      <p>From $1600 or $125/mo for 12 months</p>
    </section>
  );
};

export default Hero;
