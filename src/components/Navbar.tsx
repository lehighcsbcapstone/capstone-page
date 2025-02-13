"use client";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const navItems = [
    { path: "/", name: "ABOUT" },
    { path: "/faculty", name: "FACULTY" },
    { path: "/students", name: "STUDENTS" },
    { path: "/sponsors", name: "SPONSORS" },
  ];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false); 
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const renderMenuTabs = () => {
    return navItems.map((link) => (
      <Button variant="ghost" size="default" key={link.path} onClick={() => router.push(link.path)}>
        {link.name}
      </Button>
    ));
  };

  return (
    <header className="fixed w-full h-[100px] bg-[#502d0e] flex items-center justify-between px-4 ">
      <div className="flex flex-col justify-center items-center h-full text-center lg:text-[16px] md:text-[14px] sm:text-[14px]">
        <div className="flex items-center text-white"> LEHIGH UNIVERISTY </div>
        <div className="flex items-center text-white"> COMPUTER SCIENCE </div>
        <div className="flex items-center text-white"> CAPSTONE </div>
      </div>
      <div className="hidden sm:flex flex-1 justify-end space-x-8">{renderMenuTabs()}</div>
      <div className="sm:hidden flex items-center">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger>
            <TiThMenu size={30} color="white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
          >
            {navItems.map((link) => (
              <DropdownMenuItem
                key={link.path}
                onClick={() => {
                  router.push(link.path);
                  setIsOpen(false); 
                }}
              >
                {link.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
