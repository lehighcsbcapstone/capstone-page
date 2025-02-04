"use client";

import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import router from "next/router";

export default function Navbar() {
  const navItems = [
    { path: "/", name: "About" },
    { path: "/faculty", name: "Faculty" },
    { path: "/students", name: "Students" },
    { path: "/sponsors", name: "Sponsors" },
  ];

  const headerStyling =
    "fixed w-full h-[100px] bg-[#502d0e] flex items-center justify-between px-4";
  const logoDivStyling = "flex items-center";
  const logoStyling = "w-[50px] h-[50px] bg-black";
  const desktopTabStyling =
    "bg-black h-[25px] w-[100px] rounded-sm text-center text-white hover:cursor-pointer";
  const renderMenuTabs = () => {
    return (
      <>
        {navItems.map((link) => (
          <motion.div
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            className={desktopTabStyling}
            key={link.path}
          >
            {link.name}
          </motion.div>
        ))}
      </>
    );
  };

  return (
    <header className={headerStyling}>
      <div className={logoDivStyling}>
        <div className={logoStyling}></div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end space-x-8">
        {renderMenuTabs()}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/")}>About</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/faculty")}>Faculty</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/sponsors")}>Sponsors</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/students")}>Students</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
