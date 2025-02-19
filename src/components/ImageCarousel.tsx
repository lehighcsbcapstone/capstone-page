import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageCarousel() {
  const faculty = [
    { name: "George Witmer", title1:"Professor of Practice, Computer Science and Engineering", description: "George Witmer earned a doctorate in Chemical Engineering at the University of Houston, an MBA at Lehigh University, and a bachelor's in Chemical Engineering from Brigham Young University. Before joining Lehigh, Witmer worked at Air Products, where he led IT Innovation, and prior to that, R&D Computing. He also worked at PPL and at Lutron as an Enterprise Architect. He has several patents and has presented his work at numerous technical conferences." },
    { name: "Kathy Oliverio", title1:"Adjunct Professor, CSB/E Capstone", description: "Kathy Oliverio worked at Air Products and Chemicals, Inc. for 27 years as an IT Project Manager and Engineering Project Manager, holding both a Professional Engineer's (PE) License and Project Management Professional (PMP) certification. Kathy graduated from Purdue University with a Bachelor of Science in Mechanical Engineering." },
    { name: "Tom Reynolds", title1:"Adjunct Professor, CSB/E Capstone", description: "Tom Reynolds has 30 years of experience in the IT Industry, specializing in roles from IT Consultant to IT Infrastructure Project Manager. His expertise spans large-scale IT project management, including significant acquisitions completed within tight deadlines, such as a $1.7 billion acquisition in just 90 days. With certifications in CCNA, CCSA, MCP, and AWS CSAA, he has worked for RealTime Media, Arkema, and many other companies."},
    { name: "Brett Duersch", title1:"Adjunct Professor, CSB/E Capstone", description: "Brett Duersch has worked at Merck for over 20 years in both Product Development and Data Analaytics/Software Development. Brett graduted from Brigham Young University, getting his Bachelors and Masters in Chemistry. He later went on to get his PhD in Chemistry at the University of Michigan."},
    { name: "Thomas Micklas", title1:"Adjunct Professor, CSB/E Capstone", description: "Thomas Micklas worked at Air Products and Chemicals, Inc. for 42 years managing various IT groups, as well as becoming an IT Global Manager. Thomas earned a Bachelors of Science in Mathematics and a minor in Computer Science at Muhlenberg College. He then went on to earn his MBA at Lehigh University."},
    { name: "Alan Jeffrey", title1:"Adjunct Professor, CSB/E Capstone", description:"Alan Jeffrey worked at Air Products and Chemicals, Inc. as a Programmer, as well as leading the IT teaching center and the IT Continuous Improvement group. Alan received a Bachelors and Masters in Mathematics and taught in Highschool for 7 years just out of college. He completed a multimillion dollar project at Air Products where he converted the company to Windows 2000."},
    { name: "Michael Rusak", title1:"Adjunct Professor, CSB/E Capstone", description: "Michael Rusk worked at Air Products and Chemicals, Inc. for 40+ years with roles like Chem Research, Lab Automation, Data Analysis, and IT. Michael received a Bachelors and Masters in Chemical Engineering at the New Jersey Institute of Technology. He also went on to receive an M.B.A at Lehigh University."},
    { name: "Elroy Sturdivant", title1:"Adjunct Professor, CSB/E Capstone", description: "Elroy Sturdivant worked at Air Products and Chemicals, Inc for 31 years in the IT Department as a Desktop Engineer, Developer, and Project Manager. Elroy received his Bachelors in Community Development at Pennsylvania State Univeristy, his Masters in Information Systems at Drexel University, M.B.A in Computer Information Systems at Desales University, and Doctorate in Educational Leadership and Management (EdD) from Drexel University."},
  ];

  return (
    <Carousel className=" w-full max-w-full pl-12 pr-12">
      <CarouselContent className="-ml-1">
        {faculty.map((person, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/2 lg:basis-1/2 "
          >
            <div className="p-2">
              <Card className="h-80 flex items-center justify-center border-yellow-800 text-sm">
                <CardContent className="flex flex-col items-center justify-center text-center gap-2 p-6">
                  <h1 className="text-2xl font-semibold">{person.name}</h1>
                  <h2 className="font-extralight">{person.title1}</h2>
                  <p>{person.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
  );
}

