"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      <li className="nav-li">
        <Link href="#home" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link href="#about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link href="#work" className="nav-link">
          Work
        </Link>
      </li>
      <li className="nav-li">
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Link
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Gautam Bedi
          </Link>
          <button
            onClick={() => {
              setisOpen(!isOpen);
            }}
            className="flex cursor-pointer text-neutral-400 hover:text-white sm:hidden"
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt={isOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
