
"use client";

import React, { useState, useEffect } from "react";

import {
  ArrowRight,
  Cpu,
  Code,
  Wifi,
  Lightbulb,
  Circle,

} from "lucide-react";

export default function Hero() {
     const [hoveredCard, setHoveredCard] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const teachingAreas = [
    {
      title: "Embedded System",
      description: "ระบบฝังตัวขั้นสูง",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "Micro-Controller",
      description: "การเขียนโปรแกรมควบคุม",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Internet of Things",
      description: "IoT และ Smart Devices",
      icon: <Wifi className="w-5 h-5" />,
    },
    {
      title: "Innovation",
      description: "นวัตกรรมเทคโนโลยี",
      icon: <Lightbulb className="w-5 h-5" />,
    },
  ];
  return (
    <section className="relative min-h-screen overflow-hidden  pt-7 ">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern%20id%3D%27grid%27%20width%3D%27100%27%20height%3D%27100%27%20patternUnits%3D%27userSpaceOnUse%27%3E%3Cpath%20d%3D%27M%20100%200%20L%200%200%200%20100%27%20fill%3D%27none%27%20stroke%3D%27rgba(16,185,129,0.03)%27%20stroke-width%3D%271%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27url(%23grid)%27/%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-emerald-500/[0.08] whitespace-nowrap"
          style={{
            transform: `translate(calc(-10% + ${mousePosition.x}px), calc(-20% + ${mousePosition.y}px))`,
          }}
        >
          INNOVATION
        </div>
        <div className="absolute top-20 -left-5 text-[10vw] font-bold text-lime-500/[0.08] -rotate-12">
          EMBEDDED
        </div>
        <div className="absolute bottom-40 -right-2 text-[12vw] font-bold text-emerald-500/[0.08] rotate-12">
          IoT
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400/10 to-lime-400/10 animate-float" />
        <div className="absolute top-[70%] right-[15%] w-32 h-32 rounded-full bg-gradient-to-r from-lime-400/10 to-emerald-400/10 animate-float-delayed" />
        <div className="absolute bottom-[20%] left-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-400/10 animate-float-slow" />

        {/* Code Symbols */}
        <div className="absolute top-[25%] right-[10%] text-4xl text-emerald-500/10 font-mono animate-pulse">
          {}
        </div>
        <div className="absolute top-[60%] left-[8%] text-3xl text-lime-500/10 font-mono animate-pulse-delayed">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-[30%] right-[25%] text-5xl text-emerald-500/5 font-mono animate-pulse-slow">
          01
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Original gradient backgrounds - adjusted opacity */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),rgba(255,255,255,0)_60%)] blur-2xl"
        />
        <div
          className="absolute -top-20 -right-24 w-[40vw] h-[40vw] rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.12),rgba(255,255,255,0)_60%)] blur-3xl"
        />
        <div
          className="absolute bottom-0 -left-24 w-[40vw] h-[40vw] rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),rgba(255,255,255,0)_60%)] blur-3xl"
        />
      </div>

      {/* Tech Lines Animation */}
      <svg
        className="absolute inset-0 pointer-events-none opacity-20"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(16,185,129)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          className="animate-line-slide"
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          className="animate-line-slide-delayed"
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          className="animate-line-slide-slow"
        />
      </svg>

      <div className="relative min-h-screen flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* รูป: มือถือบนสุด / ใหญ่สุดเสมอ */}
          <div
            className={`relative flex justify-center order-1 lg:order-2 transition-all duration-1000 delay-100 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } mt-6 sm:mt-8 lg:mt-4 xl:mt-6`}
          >
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[70%] h-[70%] bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <img
              src="/ajtharit2.png"
              alt="Tharit Chaimongkul"
              className={`relative object-contain object-top
                          h-[62vh] sm:h-[68vh] md:h-[72vh] lg:h-[80vh]
                          transition-all duration-700
                          drop-shadow-[0_20px_60px_rgba(16,185,129,0.05)]
                          z-10`}
            />

          
          </div>

          <div
            className={`relative z-30 order-2 lg:order-1 transition-all duration-1000
              text-center lg:text-left
              ${
                loaded
                  ? "opacity-100 lg:translate-x-4"
                  : "opacity-0 lg:-translate-x-10"
              }
              lg:mr-[-80px]`}
          >
            <div className="space-y-2 relative max-w-xl mx-auto lg:mx-0">
              {/* Badge */}
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 
                    bg-gradient-to-r from-emerald-500/20 to-lime-500/20 
                    border border-emerald-500/30 rounded-full backdrop-blur-sm shadow-sm"
              >
                <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500 animate-ping" />
                <span className="text-emerald-600 text-sm font-medium">
                  ยินดีต้อนรับ
                </span>
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span
                  className="bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-500 
                       bg-clip-text text-transparent drop-shadow-lg"
                >
                  Tharit Chaimongkul
                </span>
              </h1>

              {/* Position */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-700">
                อาจารย์ประจำสาขาเทคโนโลยีสารสนเทศ
              </h2>

              {/* Website URL */}
              <a
                href="https://tharit.in.th"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-emerald-600 hover:text-emerald-700 
                  decoration-emerald-400 
                 text-base sm:text-lg font-semibold"
              >
                tharit.in.th
              </a>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                ผู้เชี่ยวชาญด้านระบบฝังตัว IoT และนวัตกรรมเทคโนโลยี
                มีประสบการณ์การสอนและวิจัยมากกว่า 10 ปี
                พร้อมถ่ายทอดความรู้และสร้างแรงบันดาลใจให้กับนักศึกษารุ่นใหม่
              </p>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <button
                  className="group relative inline-flex items-center space-x-3 px-8 py-4 
                         bg-gradient-to-r from-emerald-500 to-emerald-600 
                         rounded-full text-white font-semibold shadow-md
                         hover:shadow-xl hover:shadow-emerald-300/50 
                         transform hover:scale-105 transition-all duration-300"
                >
                  <span>ติดต่อ</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                {[
                  { t: "Embedded", i: <Cpu className="w-4 h-4" /> },
                  { t: "Micro-controller", i: <Code className="w-4 h-4" /> },
                  { t: "IoT", i: <Wifi className="w-4 h-4" /> },
                  { t: "Innovation", i: <Lightbulb className="w-4 h-4" /> },
                ].map((c, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm
                     bg-gradient-to-r from-white/80 to-emerald-50 
                     border border-emerald-200 text-emerald-700 backdrop-blur
                     hover:bg-white hover:shadow-md hover:scale-105 transition-all"
                  >
                    {c.i}
                    {c.t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* การ์ด */}
          <div
            className={`relative z-20 order-3 lg:order-3 transition-all duration-1000 delay-200
                        ${
                          loaded
                            ? "opacity-100 lg:-translate-x-4"
                            : "opacity-0 lg:translate-x-10"
                        }
                        lg:ml-[-20px]`}
          >
            <div className="max-w-xl mx-auto lg:mx-0 space-y-4">
              {teachingAreas.map((area, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-5 rounded-2xl border bg-white/70 backdrop-blur
                              transition-all cursor-pointer shadow-sm
                              ${
                                hoveredCard === index
                                  ? "scale-[1.02] border-emerald-300 shadow-lg"
                                  : "hover:bg-white/90 hover:border-emerald-200"
                              }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-600 shrink-0">{area.icon}</div>
                    <div>
                      <h4 className="text-slate-900 font-semibold">
                        {area.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
