"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Only show custom cursor on desktop (not touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.classList.remove('cursor-none');
      return;
    }

    // Add cursor-none class to hide default cursor
    document.body.classList.add('cursor-none');
    setIsVisible(true);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth cursor following using requestAnimationFrame
    const animateCursor = () => {
      // Fast interpolation for immediate response
      cursorX += (mouseX - cursorX) * 0.15; // Higher multiplier = faster
      cursorY += (mouseY - cursorY) * 0.15;
      
      setPosition({ x: cursorX, y: cursorY });
      
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Enhanced hover detection with throttling
    let hoverTimeout: NodeJS.Timeout;
    const handleMouseOver = (e: MouseEvent) => {
      clearTimeout(hoverTimeout);
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".card-hover") ||
        target.closest(".hover-lift") ||
        target.closest("[role='button']") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      hoverTimeout = setTimeout(() => setIsHovering(false), 50);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(hoverTimeout);
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined') {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor - Inner Dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovering ? 1.3 : 1})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={`w-2 h-2 rounded-full transition-all duration-100 ${
          isHovering 
            ? "bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg shadow-primary/50" 
            : "bg-primary"
        } ${isClicking ? "scale-75" : ""}`} />
      </div>

      {/* Main Cursor - Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : isHovering ? 1.6 : 1})`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className={`w-6 h-6 rounded-full border-2 transition-all duration-150 ${
          isHovering 
            ? "border-primary scale-110 bg-primary/20 shadow-lg shadow-primary/30" 
            : "border-primary/60 bg-transparent"
        } ${isClicking ? "border-primary scale-75" : ""}`} />
      </div>

      {/* Cursor Trail - Middle Ring (with slight delay for trail effect) */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.12 : 1})`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className={`w-12 h-12 rounded-full border transition-all duration-200 ${
          isHovering 
            ? "border-primary/40 bg-primary/10 scale-110" 
            : "border-primary/20 bg-primary/5"
        }`} />
      </div>

      {/* Outer Glow - Largest Ring (most delayed for smooth trail) */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9997] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.15 : 1})`,
          transition: 'transform 0.25s ease-out',
        }}
      >
        <div className={`w-20 h-20 rounded-full transition-all duration-250 ${
          isHovering 
            ? "bg-primary/10 scale-115" 
            : "bg-primary/5"
        }`} />
      </div>
    </>
  );
};

export default CustomCursor;

