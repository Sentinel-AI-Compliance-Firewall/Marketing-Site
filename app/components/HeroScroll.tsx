'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FRAME_COUNT = 192; 
const URL_PREFIX = '/Frames/'; 
const FILE_NAME = 'frame'; 
const FILE_TYPE = 'jpg'; 

const HeroScroll = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;


    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';


    const loadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const formattedIndex = i.toString().padStart(4, '0'); 
        img.src = `${URL_PREFIX}${FILE_NAME}${formattedIndex}.${FILE_TYPE}`;
        img.onload = () => {
          imagesRef.current[i - 1] = img;
          setImagesLoaded((prev) => prev + 1);
          if (i === 1) render(0);
        };
      }
    };


    const render = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !canvas) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      context.scale(dpr, dpr);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;
      
      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = img.width * (canvasHeight / img.height);
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = img.height * (canvasWidth / img.width);
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      const progress = ScrollTrigger.getById('hero-scroll')?.progress || 0;
      const frameProgress = Math.min(1, progress / 0.8); 
      const frameIndex = Math.floor(frameProgress * (FRAME_COUNT - 1));
      render(frameIndex);
    };
    
    window.addEventListener('resize', handleResize);
    loadImages();


    const playhead = { frame: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'hero-scroll',
        trigger: containerRef.current,
        start: 'top top',
        end: '+=500%',
        pin: true,
        scrub: 1, 
      },
    });


    tl.to(playhead, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      duration: 8, 
      onUpdate: () => render(Math.round(playhead.frame)),
    });


    tl.to(wrapperRef.current, {

      scale: 0.95, 
      

      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,

      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,

      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)", 

      ease: "power2.inOut",
      duration: 2 
    }, "<85%"); 

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (

    <div ref={containerRef} className="relative w-full h-screen bg-[#fcfdf6] overflow-hidden">
      
      
      <div 
        ref={wrapperRef} 
        className="w-full h-full relative origin-top will-change-transform overflow-hidden"
      >
        <canvas 
          ref={canvasRef} 
          style={{ width: '100%', height: '100%' }}
          className="block object-cover"
        />
      </div>

    </div>
  );
};

export default HeroScroll;