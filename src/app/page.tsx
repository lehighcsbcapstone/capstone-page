"use client";
import Image from "next/image";
// always import image first
import img from "../assets/mountaintop.jpg";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  console.log("about");
  return (
    <div>
      <Image src={img} alt={"mountain top campus"} fill={false} />
      <div className="flex flex-row  px-8 py-6">
        <div className="">
          <h1>ABOUT</h1>
          <br />
          <p>
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
        <div >Call for Proposals</div>
      </div>
      <div className="pt-4 bg-[#cfab7a]">
        <h1>PAST PROJECTS</h1>
        <div className="py-4 flex justify-center relative w-full">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}
