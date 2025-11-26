"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CubeFace from './CubeFace';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface CubeFaceData {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

interface RotatingCubeProps {
    faces: {
        front: CubeFaceData;
        back: CubeFaceData;
        right: CubeFaceData;
        left: CubeFaceData;
        top: CubeFaceData;
        bottom: CubeFaceData;
    };
}

const RotatingCube: React.FC<RotatingCubeProps> = ({ faces }) => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cubeRef.current || !containerRef.current) return;

        const cube = cubeRef.current;
        const container = containerRef.current;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Static position for users who prefer reduced motion
            gsap.set(cube, { rotateX: -18, rotateY: 25 });
            return;
        }

        // Initial position
        gsap.set(cube, { rotateX: -18, rotateY: 25 });

        // Scroll-triggered rotation
        const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                // Rotate through different faces as user scrolls (420° to ensure all faces visible)
                gsap.to(cube, {
                    rotateY: 25 + (progress * 420),
                    rotateX: -18 + (progress * 60), // Increased tilt range to show top/bottom faces
                    duration: 0.1,
                    ease: 'none',
                });
            },
        });

        // Idle rotation animation when not scrolling
        const idleRotation = gsap.to(cube, {
            rotateY: '+=360',
            duration: 20,
            ease: 'none',
            repeat: -1,
            paused: true,
        });

        // Start idle rotation after a delay
        const idleTimer = setTimeout(() => {
            if (!ScrollTrigger.isScrolling()) {
                idleRotation.play();
            }
        }, 2000);

        // Pause idle rotation when scrolling
        const pauseIdle = () => idleRotation.pause();
        const resumeIdle = () => {
            setTimeout(() => {
                if (!ScrollTrigger.isScrolling()) {
                    idleRotation.play();
                }
            }, 1000);
        };

        window.addEventListener('scroll', pauseIdle);
        window.addEventListener('scrollend', resumeIdle);

        // Hover interaction
        const handleMouseEnter = () => {
            if (!prefersReducedMotion) {
                gsap.to(cube, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        };

        const handleMouseLeave = () => {
            if (!prefersReducedMotion) {
                gsap.to(cube, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            scrollTrigger.kill();
            idleRotation.kill();
            clearTimeout(idleTimer);
            window.removeEventListener('scroll', pauseIdle);
            window.removeEventListener('scrollend', resumeIdle);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex items-center justify-center h-[500px]"
            style={{ perspective: '1000px' }}
        >
            <div
                ref={cubeRef}
                className="relative w-[300px] h-[300px]"
                style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out',
                }}
            >
                <CubeFace position="front" {...faces.front} />
                <CubeFace position="back" {...faces.back} />
                <CubeFace position="right" {...faces.right} />
                <CubeFace position="left" {...faces.left} />
                <CubeFace position="top" {...faces.top} />
                <CubeFace position="bottom" {...faces.bottom} />
            </div>
        </div>
    );
};

export default RotatingCube;
