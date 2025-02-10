"use client";
import { TiThMenu } from "react-icons/ti";

//import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const navItems = [
    { path: "/", name: "About" },
    { path: "/faculty", name: "Faculty" },
    { path: "/students", name: "Students" },
    { path: "/sponsors", name: "Sponsors" },
  ];
  const router = useRouter();
  const headerStyling = "fixed w-full h-[100px] bg-[#502d0e] flex items-center justify-between px-4";
  const logoDivStyling = "flex items-center";
  const renderMenuTabs = () => {
    return (
      <>
        {navItems.map((link) => (
          <Button
            variant="ghost"
            size="default"
            key={link.path}
            onClick={() => router.push(link.path)}
          >
            {link.name}

          </Button>
        ))}
      </>
    );
  };

  return (
    <header className={headerStyling}>
      <div className={logoDivStyling}>
        
      </div>
      <div className="hidden sm:flex flex-1 justify-end space-x-8">
        {renderMenuTabs()}
      </div>
      <div className="sm:hidden flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <TiThMenu 
            size={30}
            color="white"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/")}>
              About
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/faculty")}>
              Faculty
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/sponsors")}>
              Sponsors
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/students")}>
              Students
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
