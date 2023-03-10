import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import banner from "../public/banner.jpeg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF MYSELF</h4>
        <p className="font-bold text-2xl mt-1">RIFQI</p>
        <div className="flex space-x-2 my-2">
          <Image className="h-10 w-10 rounded-full" src={banner} alt="" />
          <Image className="h-10 w-10 rounded-full" src={banner} alt="" />
          <Image className="h-10 w-10 rounded-full" src={banner} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started ... Ended ...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
}
