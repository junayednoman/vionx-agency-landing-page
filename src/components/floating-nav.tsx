"use client";

import { useEffect, useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "System", link: "#system" },
  { name: "How it works", link: "#how-it-works" },
  { name: "ROI", link: "#roi" },
  { name: "Book a demo", link: "#contact" },
];

export function FloatingNavWrapper() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const getThreshold = () => hero.offsetHeight - 80;

    const onScroll = () => {
      setVisible(window.scrollY > getThreshold());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <FloatingNav
      navItems={navItems}
      visible={visible}
      ctaLabel="Book a demo"
      ctaLink="#contact"
    />
  );
}
