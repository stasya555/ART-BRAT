"use client";

import { motion } from "framer-motion";


import Image from "next/image";

type PodcastsListProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};

export default function PodcastsList({
  children,
  className,
  imgSrc,
  imgAlt,
}: PodcastsListProps) {
  return (
    <>
    <div className="flex flex-col max-w-[95rem] w-full mx-auto py-12 md:py-48">  
        <div>
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto] justify-between md:items-center gap-3 md:gap-0">
                <motion.div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16" initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
                <p className="font-semibold">03</p>
                    <img src="/images/podcasts/preview/podcast-cover-ep03.jpg" alt="" width="240" height="240" className="w-[15rem] h-[15rem] color: transparent;"/>
                    <b className="heading3-title text-[20px]">Перед распадом современное искусство печатная графика</b>
                </motion.div>
                <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2">
                    <p>11 November 2024</p>
                    <p>1 hours</p>
                    <a className="flex gap-2" href="/podcasts/problems">
                    <span className="uppercase font-semibold">Listen</span>
                    <img src="/icons/ri_arrow-right-line.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="border border-black my-6"></div>
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto] justify-between md:items-center gap-3 md:gap-0">
                <motion.div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16" initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
                <p className="font-semibold">02</p>
                    <img src="/images/podcasts/preview/podcast-cover-ep02.jpg" alt="" width="240" height="240" className="w-[15rem] h-[15rem] color: transparent;"/>
                    <b className="heading3-title text-[20px]">Перед распадом современное искусство печатная графика</b>
                </motion.div>
                <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2">
                    <p>11 November 2024</p>
                    <p>1 hours</p>
                    <a className="flex gap-2" href="/podcasts/problems">
                    <span className="uppercase font-semibold">Listen</span>
                    <img src="/icons/ri_arrow-right-line.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="border border-black my-6"></div>
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto] justify-between md:items-center gap-3 md:gap-0">
                <motion.div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16" initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 2 }}
        viewport={{ once: true }}>
                <p className="font-semibold">01</p>
                    <img src="/images/podcasts/preview/podcast-cover-ep01.jpg" alt="" width="240" height="240" className="w-[15rem] h-[15rem] color: transparent;"/>
                    <b className="heading3-title text-[20px]">Перед распадом современное искусство печатная графика</b>
                </motion.div>
                <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2">
                    <p>11 November 2024</p>
                    <p>1 hours</p>
                    <a className="flex gap-2" href="/podcasts/problems">
                    <span className="uppercase font-semibold">Listen</span>
                    <img src="/icons/ri_arrow-right-line.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
