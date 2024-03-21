import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4  py-10 cursor-default",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          
          key={item?.link}
          className="relative group block p-2 h-full max-w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-200 dark:bg-zinc-700/[0.96] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 100 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.05 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
          <CardTitle>{item.title}</CardTitle>
            
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
}: {
  className?: string;
  children: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl max-w-full md:w-52 max-h-full p-2 overflow-hidden bg-amber-300 border-white/[0.2] dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
        <div className="flex flex-col justify-center items-center">
        {image && <img src={image} className="w-12 h-12 rounded-full mr-4" alt="Avatar" />}
        
      <div className="relative z-50">
        <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  isPython?: boolean;
}) => {
  return (
    <h4 className={cn("mt-4 pb-1 scroll-m-20 text-black text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-800 leading-7 ps-1",
        className
      )}
    >
      {children}
    </p>
  );
};
