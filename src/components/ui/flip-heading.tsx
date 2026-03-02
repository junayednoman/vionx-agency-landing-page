"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";

type FlipHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  textClassName?: string;
};

export function FlipHeading({
  text,
  as = "h2",
  className,
  textClassName,
}: FlipHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(headingRef, { amount: 0.5 });
  const [flipKey, setFlipKey] = useState(0);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (isInView && !hasPlayed.current) {
      setFlipKey((prev) => prev + 1);
      hasPlayed.current = true;
    }
  }, [isInView]);

  const Tag = as;

  return (
    <Tag ref={headingRef} className={cn(className)}>
      <FlipWords
        key={flipKey}
        words={[text]}
        className={cn("text-foreground", textClassName)}
      />
    </Tag>
  );
}
