"use client";

import { navlink } from "@/constans";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Image src="/vercel.svg" alt="logo" width={24} height={24} />
        <ul>
          {navlink.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex item-center justify-center gap-2">
          <button>
            <Image src="/vercel.svg" alt="search" width={24} height={24} />
          </button>
          <button>
            <Image src="/vercel.svg" alt="search" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
