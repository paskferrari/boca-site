"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { damping: 20, stiffness: 300 });
  const y = useSpring(rawY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX - 5);
      rawY.set(e.clientY - 5);

      const target = e.target as HTMLElement;
      const magnetic = target.closest("[data-magnetic]");
      setIsMagnetic(!!magnetic);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        width: isMagnetic ? 40 : 10,
        height: isMagnetic ? 40 : 10,
        borderRadius: "50%",
        background: isMagnetic ? "transparent" : "#F5C000",
        border: isMagnetic ? "1px solid #F5C000" : "none",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
        translateX: isMagnetic ? "-15px" : "0px",
        translateY: isMagnetic ? "-15px" : "0px",
      }}
      animate={{
        width: isMagnetic ? 40 : 10,
        height: isMagnetic ? 40 : 10,
        background: isMagnetic ? "transparent" : "#F5C000",
        border: isMagnetic ? "1px solid #F5C000" : "0px solid #F5C000",
        translateX: isMagnetic ? "-15px" : "0px",
        translateY: isMagnetic ? "-15px" : "0px",
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    />
  );
}
