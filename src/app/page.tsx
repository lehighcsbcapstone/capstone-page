"use client";
import Image from "next/image";
// always import image first
import img from "../assets/mountaintop.jpg";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  console.log("about");
  return (
    <div>
      <div className="relative w-full h-[400px] ">
        <Image
          src={img}
          alt="Mountain top campus"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="w-1/3 absolute inset-x-0 bottom-4 flex text-white text-5xl ml-6 font-medium ">
          Lehigh Computer Science Capstone
        </div>
      </div>
        <div className="lg:absolute lg:right-8 lg:top-60 w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-lg border-2 border-yellow-800">
          <h1 className="text-xl font-bold">ABOUT</h1>
          <p className="text-gray-700 mt-4">
            Lehigh University&apos;s Computer Science Capstone is a program of
            the Computer Science and Engineering Department. The capstone is a
            requirement for all three of the department&apos;s Bachelor of
            Science programs: <br />
            <br /> BS Engineering <br /> BS Arts and Sciences <br /> BS Computer
            Science and Business
            <br />
            <br /> All three BS programs are ABET-accredited. In addition, the
            Computer Science and Business (CSB) program, one of Lehigh&apos;s
            intercollegiate programs, is also a fully accredited business
            program. Students who complete the CSB program are awarded a joint
            degree that comes from the Business and Engineering colleges.
            <br /> <br /> The Capstone Program is the culmination of the
            students&apos; coursework at Lehigh, where they apply their skills
            working on high-impact projects for corporate sponsors. Sponsors
            have the opportunity to work with some of the best and brightest
            students Lehigh has to offer, while simultaneously contributing to
            their education.
          </p>
      </div>
      <div className="lg:h-[30rem] bg-[#cfab7a]"/>
      <div className="pt-6 bg-[#cfab7a]">
      <h1 className="text-center text-xl font-bold">PAST PROJECTS</h1>
        <div className="py-4 flex justify-center relative w-full">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}
