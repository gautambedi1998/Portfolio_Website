"use client";
import React, { useState } from "react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li space-x-5 ">
        <a className="nav-link" href="#home">
          Home
        </a>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#work">
          Work
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Gautam Bedi
          </a>
          <button
            onClick={() => {
              setisOpen(!isOpen);
            }}
            className="flex cursor-pointer text-neutral-400 hover:text-white sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
            ></img>
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="block overflow-hidden text-center sm:hidden">
          <nav className="pb-5">
            <Navigation />
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
