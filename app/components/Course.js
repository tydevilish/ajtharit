"use client"

import React, { useState, useEffect } from "react";
import {
  Cpu,
  Code,
  Globe,
  BookOpen,
  Rocket,
  ChevronDown,
  GraduationCap,
  Zap,
  Binary,
  Layers,
  Terminal,
  Clock,
  Users,
  Award
} from "lucide-react";

export default function Course() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ เพิ่ม url ให้แต่ละรายวิชา (แก้เป็นลิงก์จริงของคุณได้เลย)
  const categories = [
    {
      id: "micro",
      title: "Micro-controller",
      description: "ระบบฝังตัวและการควบคุมไมโครคอนโทรลเลอร์",
      icon: <Cpu className="w-6 h-6" />,
      color: "emerald",
      courses: [
        { code: "2901-2126", name: "ไมโครคอนโทรลเลอร์เบื้องต้น", credits: 3, students: 45, url: "https://example.com/micro-basic" },
        { code: "30901-2312", name: "วิทยาการก้าวหน้าระบบสมองกลฝังตวัและไอโอที", credits: 3, students: 50, url: "https://example.com/embedded-iot" },
      ]
    },
    {
      id: "coding",
      title: "Coding",
      description: "การเขียนโปรแกรมและอัลกอริทึม",
      icon: <Code className="w-6 h-6" />,
      color: "lime",
      courses: [
        { code: "30900-0002", name: "หลักการเขียนโปรแกรมคอมพิวเตอร์เบื้องต้น", credits: 3, students: 60, url: "https://example.com/prog-intro" },
        { code: "30901-2005", name: "การโปรแกรมเชิงวัตถุดว้ยเทคโนโลยีจาวา ", credits: 3, students: 55, url: "https://example.com/java-oop" },
      ]
    },
    {
      id: "web",
      title: "Web Developer",
      description: "การพัฒนาเว็บแอปพลิเคชันสมัยใหม่",
      icon: <Globe className="w-6 h-6" />,
      color: "cyan",
      courses: [
        { code: "30901-2008", name: "การพัฒนาเว็บด้วยภาษา PHP ", credits: 3, students: 50, url: "https://example.com/php-web" }
      ]
    },
    {
      id: "basic",
      title: "Basic Principles",
      description: "พื้นฐานวิทยาการคอมพิวเตอร์",
      icon: <BookOpen className="w-6 h-6" />,
      color: "blue",
      courses: [
        { code: "20901-2008", name: "ดิจิทัลเบื้องต้น", credits: 3, students: 80, url: "https://example.com/digital-basic" },
      ]
    },
    {
      id: "project",
      title: "Project",
      description: "โครงงานและนวัตกรรม",
      icon: <Rocket className="w-6 h-6" />,
      color: "violet",
      courses: [
        { code: "", name: "โครงงาน 1", credits: 3, students: 40, url: "https://example.com/project-1" },
        { code: "", name: "โครงงาน 2", credits: 3, students: 40, url: "https://example.com/project-2" },
      ]
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

        ring: "ring-emerald-500"
      },
      lime: {
        bg: "from-lime-500 to-lime-600",
        bgLight: "from-lime-50 to-lime-100",
        border: "border-lime-300",
        text: "text-lime-600",
        light: "bg-lime-50",
        hover: "hover:from-lime-100 hover:to-lime-200",

        ring: "ring-lime-500"
      },
      cyan: {
        bg: "from-cyan-500 to-cyan-600",
        bgLight: "from-cyan-50 to-cyan-100",
        border: "border-cyan-300",
        text: "text-cyan-600",
        light: "bg-cyan-50",
        hover: "hover:from-cyan-100 hover:to-cyan-200",

        ring: "ring-cyan-500"
      },
      blue: {
        bg: "from-blue-500 to-blue-600",
        bgLight: "from-blue-50 to-blue-100",
        border: "border-blue-300",
        text: "text-blue-600",
        light: "bg-blue-50",
        hover: "hover:from-blue-100 hover:to-blue-200",

        ring: "ring-blue-500"
      },
      violet: {
        bg: "from-violet-500 to-violet-600",
        bgLight: "from-violet-50 to-violet-100",
        border: "border-violet-300",
        text: "text-violet-600",
        light: "bg-violet-50",
        hover: "hover:from-violet-100 hover:to-violet-200",

        ring: "ring-violet-500"
      }
    };
    return colors[color];
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern%20id%3D%27grid%27%20width%3D%27100%27%20height%3D%27100%27%20patternUnits%3D%27userSpaceOnUse%27%3E%3Cpath%20d%3D%27M%20100%200%20L%200%200%200%20100%27%20fill%3D%27none%27%20stroke%3D%27rgba(16,185,129,0.03)%27%20stroke-width%3D%271%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27url(%23grid)%27/%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Animated Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-emerald-500/[0.04] whitespace-nowrap"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
          }}
        >
          COURSES
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Binary className="absolute top-[10%] right-[5%] w-8 h-8 text-emerald-500/10 animate-float" />
        <Terminal className="absolute bottom-[15%] left-[10%] w-10 h-10 text-lime-500/10 animate-float-delayed" />
        <Layers className="absolute top-[60%] right-[20%] w-6 h-6 text-cyan-500/10 animate-float-slow" />
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border border-emerald-300/30 rounded-full backdrop-blur-sm mb-4">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold">Course Responsibility</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-500 bg-clip-text text-transparent">
              รายวิชาที่รับผิดชอบ
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            คลิกที่หมวดหมู่เพื่อดูรายละเอียดวิชาในแต่ละกลุ่ม พร้อมเนื้อหาที่ทันสมัยและตอบโจทย์ตลาดแรงงาน
          </p>
        </div>

        {/* Accordion Categories */}
        <div className="space-y-4">
          {categories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className={`transition-all duration-1000 delay-${idx * 100} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`
                    w-full group relative overflow-hidden rounded-2xl transition-all duration-300
                    ${isExpanded 
                      ? `bg-gradient-to-r ${colors.bg} text-white shadow-2xl ring-2 ${colors.ring} ring-opacity-50` 
                      : `bg-white/90 backdrop-blur hover:bg-white border ${colors.border} shadow-lg hover:shadow-xl`
                    }
                  `}
                >

                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-3 rounded-xl transition-all duration-300
                        ${isExpanded 
                          ? 'bg-white/20 text-white rotate-12 scale-110' 
                          : `bg-gradient-to-r ${colors.bgLight} ${colors.text} group-hover:scale-110 group-hover:rotate-12`
                        }
                      `}>
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <h3 className={`text-xl font-bold mb-1 ${isExpanded ? 'text-white' : 'text-slate-800'}`}>
                          {category.title}
                        </h3>
                        <p className={`text-sm ${isExpanded ? 'text-white/90' : 'text-slate-600'}`}>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {isExpanded && <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />}
                      <ChevronDown className={`
                        w-6 h-6 transition-transform duration-300
                        ${isExpanded ? 'rotate-180 text-white' : `${colors.text} group-hover:translate-y-1`}
                      `} />
                    </div>
                  </div>
                </button>

                {/* Expanded Course List */}
                <div className={`
                  grid grid-cols-1 md:grid-cols-2 gap-5 overflow-visible transition-all duration-500
                  ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4 pb-2' : 'max-h-0 opacity-0'}
                `}>
                  {category.courses.map((course, courseIdx) => (
                    // ✅ ทำให้คลิกได้ทั้งการ์ด และออกไปเว็บอื่นทันที (แท็บเดิม)
                    <a
                      key={`${course.code}-${courseIdx}`}
                      href={course.url || "#"}
                      target="_self"               /* เปลี่ยนเป็น "_blank" ถ้าอยากเปิดแท็บใหม่ */
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl"
                      style={{ 
                        transitionDelay: isExpanded ? `${courseIdx * 50}ms` : '0ms',
                      }}
                    >
                      <div
                        className={`
                          relative group bg-white/95 backdrop-blur rounded-xl p-6 border ${colors.border}
                          shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu
                        hover:-translate-y-1 cursor-pointer
                        `}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <span className={`
                              inline-block px-3 py-1 rounded-full text-xs font-bold mb-3
                              bg-gradient-to-r ${colors.bgLight} ${colors.text}
                            `}>
                              {course.code || "—"}
                            </span>
                            <h4 className="font-semibold text-slate-800 text-lg leading-tight ">
                              {course.name}
                            </h4>
                          </div>
                          <Award className={`w-5 h-5 ${colors.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{course.credits} หน่วยกิต</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            <span>{course.students} คน</span>
                          </div>
                        </div>

                        <div className={`
                          absolute inset-0 rounded-xl bg-gradient-to-r ${colors.glow} 
                          opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300
                        `} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
