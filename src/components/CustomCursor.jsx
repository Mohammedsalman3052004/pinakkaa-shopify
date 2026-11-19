import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const circleRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop mouse/fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const circle = circleRef.current;
    if (!circle) return;

    const setX = gsap.quickSetter(circle, 'x', 'px');
    const setY = gsap.quickSetter(circle, 'y', 'px');

    let mouse = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };
    let hasMoved = false;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        current.x = e.clientX;
        current.y = e.clientY;
        gsap.to(circle, { opacity: 1, duration: 0.15 });
      }
    };

    // Smooth inertia lerp loop with responsive trailing
    let animId;
    const loop = () => {
      current.x += (mouse.x - current.x) * 0.25;
      current.y += (mouse.y - current.y) * 0.25;
      setX(current.x);
      setY(current.y);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    const handleMouseLeave = () => {
      gsap.to(circle, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to(circle, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-cobalt-500 pointer-events-none z-[9999] opacity-0 hidden md:block"
      style={{
        boxShadow: '0 0 10px #3b82f6, 0 0 3px #60a5fa',
        willChange: 'transform',
      }}
    />
  );
}
