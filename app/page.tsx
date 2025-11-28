'use client';

import { useState } from 'react';
import Preloader from '@/app/components/preloader/preloader';
import HeroScroll from '@/app/components/HeroScroll';
import SmoothScroll from '@/app/components/SmoothScroll';

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <SmoothScroll>
      
      <main className="bg-black min-h-screen w-full relative">
        
       
        <div className={`relative z-50 ${preloaderFinished ? 'hidden' : 'block'}`}>
           <Preloader onComplete={() => setPreloaderFinished(true)} />
        </div>
        
        <div className="relative z-0">
           <HeroScroll />
        </div>

        <div className="relative z-10 bg-[#fcfdf6] w-full -mt-px"> 
            
            <div className="h-screen flex items-center justify-center">
              <h2 className="text-black text-4xl font-bold">The Next Section</h2>
            </div>
        </div>

      </main>
    </SmoothScroll>
  );
}