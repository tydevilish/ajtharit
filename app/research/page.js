"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Target,
  Calendar,
  Award,
  Users,
  BookOpen,
  Lightbulb,
  Cpu,
  Coffee,
  Circle,
  ChevronRight,
  ExternalLink,
  Star,
  Binary,
  Terminal,
  Layers,
  Network,
  Code
} from "lucide-react";

export default function Research() {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const researchProjects = [
    {
      id: 1,
      title: "การพัฒนาคอมพิวเตอร์ตัวจิ๋วสำหรับนักประดิษฐ์ตัวน้อย",
      description: "การวิจัยและพัฒนาคอมพิวเตอร์ขนาดเล็กที่เหมาะสมสำหรับเด็กและเยาวชน เพื่อส่งเสริมการเรียนรู้ด้านเทคโนโลยีและการประดิษฐ์คิดค้น",
      year: "2560",
      category: "Educational Technology",
      funding: "ทุนอุดหนุนการทำกิจกรรมส่งเสริมและสนับสนุนการวิจัย ภายใต้โครงการความร่วมมือเพิ่มมูลค่าสิ่งประดิษฐ์สู่การใช้ประโยชน์ (co-funding)",
      collaborators: ["สำนักงานคณะกรรมการวิจัยแห่งชาติ (วช.)", "สำนักงานคณะกรรมการการอาชีวศึกษา (สอศ.)"],
      image: "/research-1.jpg",
      status: "เสร็จสิ้น",
      icon: <Cpu className="w-6 h-6" />,
      color: "emerald"
    },
    {
      id: 2,
      title: "การสร้างและทดสอบประสิทธิภาพเครื่องคั่วเมล็ดกาแฟ ขนาด 1 กิโลกรัม ด้วยก๊าซแอลพีจี",
      description: "การวิจัยและพัฒนาเครื่องคั่วเมล็ดกาแฟที่ใช้ก๊าซแอลพีจีเป็นเชื้อเพลิง เพื่อเพิ่มประสิทธิภาพการคั่วและลดต้นทุนการผลิตสำหรับผู้ประกอบการขนาดเล็ก",
      year: "2558",
      category: "Agricultural Technology",
      funding: "ทุนอุดหนุนการทำกิจกรรมส่งเสริมและสนับสนุนการวิจัย ภายใต้โครงการความร่วมมือเพิ่มมูลค่าสิ่งประดิษฐ์สู่การใช้ประโยชน์ (co-funding)",
      collaborators: ["สำนักงานคณะกรรมการวิจัยแห่งชาติ (วช.)", "สำนักงานคณะกรรมการการอาชีวศึกษา (สอศ.)"],
      image: "/research-2.jpg",
      status: "เสร็จสิ้น",
      icon: <Coffee className="w-6 h-6" />,
      color: "lime"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500 to-emerald-600",
        bgLight: "from-emerald-50 to-emerald-100",
        border: "border-emerald-300",
        text: "text-emerald-600",
        light: "bg-emerald-50",
        hover: "hover:from-emerald-100 hover:to-emerald-200",
        glow: "shadow-emerald-500/25",
        ring: "ring-emerald-500"
      },
      lime: {
        bg: "from-lime-500 to-lime-600",
        bgLight: "from-lime-50 to-lime-100",
        border: "border-lime-300",
        text: "text-lime-600",
        light: "bg-lime-50",
        hover: "hover:from-lime-100 hover:to-lime-200",
        glow: "shadow-lime-500/25",
        ring: "ring-lime-500"
      }
    };
    return colors[color];
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50 mt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern%20id%3D%27grid%27%20width%3D%27100%27%20height%3D%27100%27%20patternUnits%3D%27userSpaceOnUse%27%3E%3Cpath%20d%3D%27M%20100%200%20L%200%200%200%20100%27%20fill%3D%27none%27%20stroke%3D%27rgba(16,185,129,0.03)%27%20stroke-width%3D%271%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27url(%23grid)%27/%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-lime-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-lime-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      {/* Enhanced Large Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-emerald-500/[0.06] whitespace-nowrap"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
          }}
        >
          RESEARCH
        </div>
        <div 
          className="absolute top-20 -left-10 text-[8vw] font-bold text-lime-500/[0.04] -rotate-12"
          style={{
            transform: `rotate(-12deg) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          INNOVATION
        </div>
        <div 
          className="absolute bottom-40 -right-5 text-[10vw] font-bold text-emerald-500/[0.05] rotate-12"
          style={{
            transform: `rotate(12deg) translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        >
          PROJECT
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced floating shapes */}
        <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400/20 to-lime-400/20 animate-float shadow-lg" />
        <div className="absolute top-[70%] right-[12%] w-32 h-32 rounded-full bg-gradient-to-r from-lime-400/15 to-emerald-400/15 animate-float-delayed shadow-xl" />
        <div className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-400/15 animate-float-slow shadow-lg" />

        {/* Tech symbols */}
        <Code className="absolute top-[20%] right-[8%] w-8 h-8 text-emerald-500/20 animate-pulse" />
        <Cpu className="absolute top-[55%] left-[5%] w-6 h-6 text-lime-500/20 animate-pulse-delayed" />
        <Network className="absolute bottom-[35%] right-[20%] w-10 h-10 text-emerald-500/15 animate-pulse-slow" />
        <Lightbulb className="absolute top-[40%] left-[12%] w-7 h-7 text-cyan-500/20 animate-pulse" />
        <Target className="absolute top-[25%] left-[22%] w-5 h-5 text-emerald-500/15 animate-spin-slow" />
        <Binary className="absolute top-[10%] right-[30%] w-6 h-6 text-lime-500/15 animate-float" />
        <Terminal className="absolute bottom-[15%] left-[8%] w-8 h-8 text-emerald-500/15 animate-float-delayed" />
        <Layers className="absolute top-[60%] right-[35%] w-5 h-5 text-lime-500/15 animate-float-slow" />

        {/* Enhanced particles */}
        {[...Array(30)].map((_, i) => (
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

      {/* Enhanced Tech Lines Animation */}
      <svg className="absolute inset-0 pointer-events-none opacity-30" width="100%" height="100%">
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(16,185,129)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(132,204,22)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#line-gradient-1)" strokeWidth="1" className="animate-line-slide" />
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#line-gradient-2)" strokeWidth="0.8" className="animate-line-slide-delayed" />
      </svg>

      <div className="relative z-10 max-w-full mx-auto px-8 sm:px-12 lg:px-28 xl:px-24 py-16">
        
        {/* Enhanced Header Section */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border border-emerald-300/30 rounded-full backdrop-blur-sm mb-6 hover:shadow-lg hover:scale-105 transition-all">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold">Research Projects</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
              งานวิจัยและนวัตกรรม
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            ผลงานวิจัยที่ได้รับทุนสนับสนุนจากหน่วยงานภาครัฐ เพื่อพัฒนานวัตกรรมที่ตอบโจทย์สังคมและเศรษฐกิจ
          </p>
          
          {/* Simple tagline */}
          <div className="mt-8">
            <p className="text-emerald-600 font-semibold text-xl">ต่อยอดเพื่อสังคม</p>
          </div>
        </div>

        {/* Research Projects Grid */}
        <div className="grid grid-cols-1 gap-28 max-w-7xl mx-auto">
          {researchProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className={`transition-all duration-1000 delay-${index * 200} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`
                  relative group bg-white/90 backdrop-blur rounded-3xl border border-slate-200 
                  shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden
                  hover:-translate-y-2 ${colors.glow}
                `}>
                  
                  {/* Horizontal Layout Container */}
                  <div className="flex flex-col lg:flex-row">
                    
                    {/* Project Image */}
                    <div className="relative lg:w-1/2 h-[500px] lg:h-auto lg:min-h-[550px] overflow-hidden lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      



                    </div>

                    {/* Project Content */}
                    <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                    
                    {/* Year and Category */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`
                        px-3 py-1 bg-gradient-to-r ${colors.bg} text-white rounded-full 
                        font-bold text-sm shadow-lg
                      `}>
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className={`w-4 h-4 ${colors.text}`} />
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          bg-gradient-to-r ${colors.bgLight} ${colors.text}
                        `}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Funding Information */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-600" />
                        แหล่งทุน
                      </h4>
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {project.funding}
                        </p>
                      </div>
                    </div>

                    {/* Collaborators */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-600" />
                        หน่วยงานที่ร่วมมือ
                      </h4>
                      <div className="space-y-2">
                        {project.collaborators.map((collaborator, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm text-slate-700">{collaborator}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.bg} 
                    opacity-0 group-hover:opacity-5 blur-xl -z-10 transition-opacity duration-500
                  `} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}