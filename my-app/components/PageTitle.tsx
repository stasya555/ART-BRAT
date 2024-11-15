
"use client";

import { motion } from "framer-motion";

type PageTitleProps = {
    children: React.ReactNode;
    className?: string;
    imgSrc: string;
    imgAlt: string;
  };
  
  export default function PageTitle({
    children,
    className,
    imgSrc,
    imgAlt,
  }: PageTitleProps) {
    return (
      <motion.div className="max-w-[95rem] w-full mx-auto pointer-events: none;" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }}transition={{ duration: 0.5 }}  >
        <h1 className={className}>{children}</h1>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="py-6 md:py-12 h-full w-full pointer-events: none;"
          />
        )}
      </motion.div>
    );
  }
  