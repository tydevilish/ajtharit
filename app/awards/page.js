"use client";

import React, { useState, useEffect } from "react";
import {
  Award,
  Calendar,
  Star,
  Trophy,
  Medal,
  Target,
  Zap,
  Circle,
  Code,
  Cpu,
  Network,
  Lightbulb,
  Binary,
  Terminal,
  Layers
} from "lucide-react";

export default function Awards() {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // รางวัลจัดตามปี
  const awardsByYear = {
    "2565": [
      { id: 1, image: "/awards/2565-goodteacher.jpg" },
      { id: 2, image: "/awards/2565-invention1.jpg" },
      { id: 3, image: "/awards/2565-invention2.jpg" },
      { id: 4, image: "/awards/2565-invention3.jpg" },
      { id: 5, image: "/awards/2565-invention4.jpg" }
    ],
    "2564": [
      { id: 6, image: "/awards/2564-onlinelearner.jpg" },
      { id: 7, image: "/awards/2564-research1.jpg" }
    ],
    "2563": [
      { id: 8, image: "/awards/2563-excellentteacher.png" },
      { id: 9, image: "/awards/2563-invention.jpg" },
      { id: 10, image: "/awards/2563-learner.png" },
      { id: 11, image: "/awards/2563-poster.jpg" }
    ],
    "2562": [
      { id: 12, image: "/awards/2562-alumni.jpg" },
      { id: 13, image: "/awards/2562-goodteacher.jpg" },
      { id: 14, image: "/awards/2562-innovation1.jpg" },
      { id: 15, image: "/awards/2562-innovation2.jpg" },
      { id: 16, image: "/awards/2562-innovation3.jpg" },
      { id: 17, image: "/awards/2562-innovation4.jpg" }
    ],
    "2561": [
      { id: 18, image: "/awards/2561.jpg" },
      { id: 19, image: "/awards/2561-invention.jpg" },
      { id: 20, image: "/awards/2561-invention2.jpg" },
      { id: 21, image: "/awards/2561-invention3.jpg" },
      { id: 22, image: "/awards/2561-invention4.jpg" },
      { id: 23, image: "/awards/2561-invention5.jpg" }
    ],
    "2560": [
      { id: 24, image: "/awards/2560.jpg" },
      { id: 25, image: "/awards/2560-2.jpg" },
      { id: 26, image: "/awards/2560-3.jpg" },
      { id: 27, image: "/awards/2560-4.jpg" },
      { id: 28, image: "/awards/2560-5.jpg" },
      { id: 29, image: "/awards/2560-6.jpg" }
    ],
    "2559": [
      { id: 30, image: "/awards/2559-1.jpg" },
      { id: 31, image: "/awards/2559-2.jpg" },
      { id: 32, image: "/awards/2559-3.jpg" },
      { id: 33, image: "/awards/2559-4.jpg" },
      { id: 34, image: "/awards/2559-5.jpg" },
      { id: 35, image: "/awards/2559-6.jpg" },
      { id: 36, image: "/awards/2559-7.jpg" },
      { id: 37, image: "/awards/2559-8.jpg" }
    ],
    "2558": [
      { id: 38, image: "/awards/2558-1.jpg" },
      { id: 39, image: "/awards/2558-2.jpg" },
      { id: 40, image: "/awards/2558-3.jpg" }
    ],
    "2557": [
      { id: 41, image: "/awards/2557-1.jpg" },
      { id: 42, image: "/awards/2557-2.jpg" },
      { id: 43, image: "/awards/2557-3.jpg" },
      { id: 44, image: "/awards/2557-4.jpg" },
      { id: 45, image: "/awards/2557-5.jpg" },
      { id: 46, image: "/awards/2557-6.jpg" },
      { id: 47, image: "/awards/2557-7.jpg" },
      { id: 48, image: "/awards/2557-8.jpg" },
      { id: 49, image: "/awards/2557-9.jpg" },
      { id: 50, image: "/awards/2557-10.jpg" },
      { id: 51, image: "/awards/2557-11.jpg" },
      { id: 52, image: "/awards/2557-12.jpg" }
    ]
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50 mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern%20id%3D%27grid%27%20width%3D%27100%27%20height%3D%27100%27%20patternUnits%3D%27userSpaceOnUse%27%3E%3Cpath%20d%3D%27M%20100%200%20L%200%200%200%20100%27%20fill%3D%27none%27%20stroke%3D%27rgba(16,185,129,0.03)%27%20stroke-width%3D%271%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27url(%23grid)%27/%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-lime-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-lime-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-emerald-500/[0.06] whitespace-nowrap"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
          }}
        >
          AWARDS
        </div>
        <div 
          className="absolute top-20 -left-10 text-[8vw] font-bold text-lime-500/[0.04] -rotate-12"
          style={{
            transform: `rotate(-12deg) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          HONOR
        </div>
        <div 
          className="absolute bottom-40 -right-5 text-[10vw] font-bold text-emerald-500/[0.05] rotate-12"
          style={{
            transform: `rotate(12deg) translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        >
          PRIZE
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400/20 to-lime-400/20 animate-float shadow-lg" />
        <div className="absolute top-[70%] right-[12%] w-32 h-32 rounded-full bg-gradient-to-r from-lime-400/15 to-emerald-400/15 animate-float-delayed shadow-xl" />
        <div className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/15 to-lime-400/15 animate-float-slow shadow-lg" />

        {/* Tech symbols */}
        <Award className="absolute top-[20%] right-[8%] w-8 h-8 text-emerald-500/20 animate-pulse" />
        <Trophy className="absolute top-[55%] left-[5%] w-6 h-6 text-lime-500/20 animate-pulse-delayed" />
        <Medal className="absolute bottom-[35%] right-[20%] w-10 h-10 text-emerald-500/15 animate-pulse-slow" />
        <Star className="absolute top-[40%] left-[12%] w-7 h-7 text-lime-500/20 animate-pulse" />
        <Target className="absolute top-[25%] left-[22%] w-5 h-5 text-emerald-500/15 animate-spin-slow" />

        {/* Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          >
            {i % 4 === 0 && <Circle className="w-1 h-1 text-emerald-500/30 fill-current" />}
            {i % 4 === 1 && <Star className="w-2 h-2 text-lime-500/25" />}
            {i % 4 === 2 && <Zap className="w-1 h-1 text-emerald-500/25" />}
            {i % 4 === 3 && <div className="w-0.5 h-0.5 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 rounded-full" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border border-emerald-300/30 rounded-full backdrop-blur-sm mb-6 hover:shadow-lg hover:scale-105 transition-all">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold">Awards and Honors</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
              รางวัลและความสำเร็จ
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            รางวัลและเกียรติประวัติที่ได้รับตลอดการทำงานด้านการศึกษา วิจัย และนวัตกรรม
          </p>
        </div>

        {/* Awards by Year */}
        <div className="space-y-16">
          {Object.entries(awardsByYear).reverse().map(([year, awards], yearIndex) => (
            <div
              key={year}
              className={`transition-all duration-1000 delay-${yearIndex * 200} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {/* Year Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/90 to-lime-500/90 backdrop-blur-sm text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-white/20">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-semibold">พ.ศ. {year}</span>
                </div>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {awards.map((award, awardIndex) => (
                  <div
                    key={award.id}
                    className={`
                      group bg-white/90 backdrop-blur rounded-2xl border border-emerald-200 
                      shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden
                      hover:-translate-y-2 hover:shadow-emerald-200/30
                    `}
                  >
                    {/* Certificate Image */}
                    <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage(award)}>
                      <div 
                        className="relative w-full bg-gradient-to-br from-slate-50 to-slate-100"
                        style={{ aspectRatio: '1280/719' }}
                      >
                        <img 
                          src={award.image} 
                          alt={`Certificate ${award.id}`}
                          className="w-full h-full object-contain transition-transform duration-500"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                      </div>
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-500 opacity-0 group-hover:opacity-10 blur-xl -z-10 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-gray-800/70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage.image} 
              alt={`Certificate ${selectedImage.id}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
            >
              <span className="text-white text-2xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}