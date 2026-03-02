"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type BlurFadeHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  once?: boolean;
  wordSpacingClassName?: string;
  delay?: number;
};

export function BlurFadeHeading({
  text,
  as = "h2",
  className,
  once = true,
  wordSpacingClassName,
  delay = 0,
}: BlurFadeHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(headingRef, { amount: 0.5, once: true });
  const [playKey, setPlayKey] = useState(0);
  const wasInView = useRef(false);
  const hasPlayed = useRef(false);
  const Tag = as;

  useEffect(() => {
    if (isInView && !wasInView.current) {
      if (!hasPlayed.current) {
        setPlayKey((prev) => prev + 1);
        hasPlayed.current = true;
      }
      wasInView.current = true;
    }
  }, [isInView]);

  const words = text.split(" ");

  return (
    <Tag ref={headingRef} className={cn(className)}>
      {!isInView && !once ? (
        text
      ) : (
        <span key={playKey} className="inline-block">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.24,
                ease: "easeOut",
                delay: delay + index * 0.06,
              }}
            >
              <span
                className={cn(
                  "inline-block",
                  index < words.length - 1 &&
                    (wordSpacingClassName ?? "mr-1 sm:mr-1.5")
                )}
              >
                {word}
              </span>
            </motion.span>
          ))}
        </span>
      )}
    </Tag>
  );
}
