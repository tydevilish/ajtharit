"use client";

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Heart,
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
  Layers,
  GraduationCap,
  Users,
  Brain,
  TrendingUp
} from "lucide-react";

export default function Development() {
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

  // การพัฒนาตนเองทั้งหมดในรูปแบบเดียว
  const allDevelopment = [
    { id: 1, image: "/development/1.jpg" },
    { id: 2, image: "/development/2.png" },
    { id: 3, image: "/development/3.jpg" },
    { id: 4, image: "/development/4.jpg" },
    { id: 5, image: "/development/5.jpg" },
    { id: 6, image: "/development/6.png" },
    { id: 7, image: "/development/7.jpg" },
    { id: 8, image: "/development/8.jpg" },
    { id: 9, image: "/development/9.jpg" },
    { id: 10, image: "/development/10.jpg" },
    { id: 11, image: "/development/11.png" },
    { id: 12, image: "/development/12.png" },
    { id: 13, image: "/development/13.jpg" },
    { id: 14, image: "/development/14.jpg" },
    { id: 15, image: "/development/15.png" },
    { id: 16, image: "/development/16.jpg" },
    { id: 17, image: "/development/17.png" },
    { id: 18, image: "/development/18.jpg" },
    { id: 19, image: "/development/19.jpg" },
    { id: 20, image: "/development/20.jpg" },
    { id: 21, image: "/development/21.png" },
    { id: 22, image: "/development/22.png" },
    { id: 23, image: "/development/23.jpg" },
    { id: 24, image: "/development/24.jpg" }
  ];

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
          DEVELOPMENT
        </div>
        <div 
          className="absolute top-20 -left-10 text-[8vw] font-bold text-lime-500/[0.04] -rotate-12"
          style={{
            transform: `rotate(-12deg) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          GROWTH
        </div>
        <div 
          className="absolute bottom-40 -right-5 text-[10vw] font-bold text-emerald-500/[0.05] rotate-12"
          style={{
            transform: `rotate(12deg) translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        >
          LEARNING
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400/20 to-lime-400/20 animate-float shadow-lg" />
        <div className="absolute top-[70%] right-[12%] w-32 h-32 rounded-full bg-gradient-to-r from-lime-400/15 to-emerald-400/15 animate-float-delayed shadow-xl" />
        <div className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/15 to-lime-400/15 animate-float-slow shadow-lg" />

        {/* Development symbols */}
        <BookOpen className="absolute top-[20%] right-[8%] w-8 h-8 text-emerald-500/20 animate-pulse" />
        <GraduationCap className="absolute top-[55%] left-[5%] w-6 h-6 text-lime-500/20 animate-pulse-delayed" />
        <Brain className="absolute bottom-[35%] right-[20%] w-10 h-10 text-emerald-500/15 animate-pulse-slow" />
        <TrendingUp className="absolute top-[40%] left-[12%] w-7 h-7 text-lime-500/20 animate-pulse" />
        <Lightbulb className="absolute top-[25%] left-[22%] w-5 h-5 text-emerald-500/15 animate-spin-slow" />

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
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold">Self Development</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
              การพัฒนาตนเอง
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            การเรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง เพื่อเสริมสร้างความรู้ ทักษะ และประสบการณ์ในด้านต่างๆ
          </p>
        </div>

        {/* Development Grid */}
        <div 
          className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDevelopment.map((development, index) => (
              <div
                key={development.id}
                className={`
                  group bg-white/90 backdrop-blur rounded-2xl border border-emerald-200 
                  shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden
                  hover:-translate-y-2 hover:shadow-emerald-200/30
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Development Image */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage(development)}>
                  <div 
                    className="relative w-full bg-gradient-to-br from-slate-50 to-slate-100"
                    style={{ aspectRatio: '1280/719' }}
                  >
                    <img 
                      src={development.image} 
                      alt={`Development ${development.id}`}
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
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-lime-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-800">Self Development</h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  >
                    <span className="text-slate-600 text-xl">×</span>
                  </button>
                </div>
              </div>
              
              {/* Modal Image */}
              <div className="p-6">
                <div className="relative w-full max-h-[70vh] overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100">
                  <img 
                    src={selectedImage.image} 
                    alt={`Development ${selectedImage.id}`}
                    className="w-full h-full object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}