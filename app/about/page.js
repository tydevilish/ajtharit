"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Heart,
  Baby,
  Facebook,
  MessageCircle,
  Code,
  Monitor,
  Wrench,
  Network,
  BarChart3,
  Lightbulb,
  Cpu,
  GraduationCap,
  Award,
  Clock,
  Circle,
  Star,

  Zap,
  Target,
  Shield,
  Globe,
  TrendingUp,
  BookOpen,
  Users,
  Rocket,
  ChevronRight,
  Eye,
  Brain,
  Layers,
  Binary,
  Terminal
} from "lucide-react";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    setLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const personalInfo = {
    name: "นายธฤต ไชยมงคล",
    birthDate: "11 มีนาคม 2517",
    age: 45,
    nationality: "ไทย",
    religion: "พุทธ",
    address: "31/40 ต.สันกำแพง อ.สันกำแพง จ.เชียงใหม่",
    status: "สมรส",
    children: 1,
    email: "tharitc@gmail.com",
    facebook: "tharit chaimongkhol",
    instagram: "hs5rnf",
    line: "trcmkl",
    phone: "086434 9554"
  };

  const expertise = [
    {
      category: "โปรแกรมธุรกิจ",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Word", "Excel", "PowerPoint", "Access"],
      color: "blue",
      level: 90
    },
    {
      category: "ซ่อมบำรุง",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["อุปกรณ์ไฟฟ้าอิเล็กทรอนิกส์", "เครื่องคอมพิวเตอร์"],
      color: "orange",
      level: 85
    },
    {
      category: "เครือข่าย & เว็บ",
      icon: <Network className="w-6 h-6" />,
      skills: ["ระบบเครือข่าย", "อินเตอร์เน็ต", "สร้างเว็บไซด์"],
      color: "green",
      level: 88
    },
    {
      category: "การเขียนโปรแกรม",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "PHP", "Visual C", "C++", "HTML", "CSS"],
      color: "purple",
      level: 95
    },
    {
      category: "วิเคราะห์ข้อมูล",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["SPSS", "สถิติ"],
      color: "cyan",
      level: 80
    },
    {
      category: "วิจัย & นวัตกรรม",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["วิจัย", "นวัตกรรม", "สิ่งประดิษฐ์"],
      color: "yellow",
      level: 92
    },
    {
      category: "ระบบฝังตัว",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Arduino", "Raspberry Pi", "MicroBit", "NodeMcu", "Esp32", "M5Stack", "Wemos"],
      color: "emerald",
      level: 98
    }
  ];

  const education = [
    {
      year: "2557",
      degree: "ปริญญาโท",
      field: "ครุศาสตร์อุตสาหกรรมมหาบัณฑิต (คอ.ม.)",
      major: "วิศวกรรมไฟฟ้า แขนงวิชาวิศวกรรมอิเล็กทรอนิกส์",
      institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
      logo: "/kmutnb-logo.png"
    },
    {
      year: "2541",
      degree: "ปริญญาตรี",
      field: "ครุศาสตร์อุตสาหกรรมบัณฑิต (คอ.บ.)",
      major: "วิศวกรรมอิเล็กทรอนิกส์ – โทรคมนาคม",
      institution: "สถาบันเทคโนโลยีราชมงคล วิทยาเขตภาคพายัพ เชียงใหม่",
      logo: "/rmutl-logo.png"
    },
    {
      year: "2538",
      degree: "ประกาศนียบัตรชั้นสูง (ปวส.)",
      field: "ช่างอิเล็กทรอนิกส์ - สื่อสาร",
      institution: "สถาบันเทคโนโลยีราชมงคล วิทยาเขตภาคพายัพ เชียงใหม่",
      logo: "/rmutl-logo.png"
    },
    {
      year: "2536",
      degree: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      field: "ช่างอิเล็กทรอนิกส์",
      institution: "โรงเรียนเทคโนโลยีหมู่บ้านครู ภาคเหนือ จังหวัดลาพูน",
      logo: "/school-logo.png"
    }
  ];

  const career = [
    {
      period: "15 พ.ค. 2562 - ปัจจุบัน",
      position: "ครูชานาญการ",
      institution: "วิทยาลัยเทคนิคพระนครศรีอยุธยา จ.พระนครศรีอยุธยา",
      current: true
    },
    {
      period: "22 เม.ย. 2559 - 15 พ.ค. 2562",
      position: "ครู คศ.1",
      institution: "วิทยาลัยเทคนิคพระนครศรีอยุธยา จ.พระนครศรีอยุธยา",
      current: false
    },
    {
      period: "22 เม.ย. 2558 - 22 เม.ย. 2559",
      position: "ครู คศ.1",
      institution: "วิทยาลัยสารพัดช่างสี่พระยา เขตบางรัก กรุงเทพฯ",
      current: false
    },
    {
      period: "22 เม.ย. 2556 - 22 เม.ย. 2558",
      position: "ครูผู้ช่วย",
      institution: "วิทยาลัยสารพัดช่างสี่พระยา เขตบางรัก กรุงเทพฯ",
      current: false
    }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, label: "รางวัลนวัตกรรม", value: "15+", color: "yellow" },
    { icon: <Users className="w-5 h-5" />, label: "นักศึกษาที่สอน", value: "500+", color: "blue" },
    { icon: <BookOpen className="w-5 h-5" />, label: "งานวิจัย", value: "25+", color: "green" },
    { icon: <Rocket className="w-5 h-5" />, label: "โครงงาน", value: "100+", color: "purple" },
    { icon: <Brain className="w-5 h-5" />, label: "ปีประสบการณ์", value: "10+", color: "emerald" },
    { icon: <Target className="w-5 h-5" />, label: "เทคโนโลยี", value: "20+", color: "cyan" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "from-blue-500 to-blue-600", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-300", glow: "shadow-blue-500/25" },
      orange: { bg: "from-orange-500 to-orange-600", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-300", glow: "shadow-orange-500/25" },
      green: { bg: "from-green-500 to-green-600", light: "bg-green-50", text: "text-green-600", border: "border-green-300", glow: "shadow-green-500/25" },
      purple: { bg: "from-purple-500 to-purple-600", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-300", glow: "shadow-purple-500/25" },
      cyan: { bg: "from-cyan-500 to-cyan-600", light: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-300", glow: "shadow-cyan-500/25" },
      yellow: { bg: "from-yellow-500 to-yellow-600", light: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-300", glow: "shadow-yellow-500/25" },
      emerald: { bg: "from-emerald-500 to-emerald-600", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-300", glow: "shadow-emerald-500/25" }
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
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      {/* Enhanced Large Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-emerald-500/[0.06] whitespace-nowrap"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
          }}
        >
          ABOUT ME
        </div>
        <div 
          className="absolute top-20 -left-10 text-[8vw] font-bold text-lime-500/[0.04] -rotate-12"
          style={{
            transform: `rotate(-12deg) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          PROFILE
        </div>
        <div 
          className="absolute bottom-40 -right-5 text-[10vw] font-bold text-emerald-500/[0.05] rotate-12"
          style={{
            transform: `rotate(12deg) translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        >
          TECH
        </div>
        <div
          className="absolute top-[30%] right-[15%] text-[6vw] font-bold text-cyan-500/[0.04] rotate-45"
          style={{
            transform: `rotate(45deg) translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          }}
        >
          EXPERT
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced floating shapes */}
        <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400/20 to-lime-400/20 animate-float shadow-lg" />
        <div className="absolute top-[70%] right-[12%] w-32 h-32 rounded-full bg-gradient-to-r from-lime-400/15 to-emerald-400/15 animate-float-delayed shadow-xl" />
        <div className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-400/15 animate-float-slow shadow-lg" />
        <div className="absolute top-[45%] right-[25%] w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-float shadow-md" />
        <div className="absolute bottom-[60%] left-[30%] w-28 h-28 rounded-full bg-gradient-to-r from-blue-400/12 to-cyan-400/12 animate-float-delayed shadow-lg" />

        {/* Tech symbols */}
        <Code className="absolute top-[20%] right-[8%] w-8 h-8 text-emerald-500/20 animate-pulse" />
        <Cpu className="absolute top-[55%] left-[5%] w-6 h-6 text-lime-500/20 animate-pulse-delayed" />
        <Network className="absolute bottom-[35%] right-[20%] w-10 h-10 text-emerald-500/15 animate-pulse-slow" />
        <Lightbulb className="absolute top-[40%] left-[12%] w-7 h-7 text-cyan-500/20 animate-pulse" />
        <Target className="absolute top-[25%] left-[22%] w-5 h-5 text-emerald-500/15 animate-spin-slow" />
        <Shield className="absolute bottom-[45%] right-[8%] w-6 h-6 text-lime-500/15 animate-bounce" />
        <Globe className="absolute top-[75%] left-[35%] w-4 h-4 text-cyan-500/15 animate-pulse" />
        <Binary className="absolute top-[10%] right-[30%] w-6 h-6 text-purple-500/15 animate-float" />
        <Terminal className="absolute bottom-[15%] left-[8%] w-8 h-8 text-blue-500/15 animate-float-delayed" />
        <Layers className="absolute top-[60%] right-[35%] w-5 h-5 text-orange-500/15 animate-float-slow" />

        {/* Enhanced particles with different types */}
        {[...Array(40)].map((_, i) => (
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
            {i % 6 === 0 && <Circle className="w-1 h-1 text-emerald-500/30 fill-current" />}
            {i % 6 === 1 && <Star className="w-2 h-2 text-lime-500/25" />}
            
            {i % 6 === 3 && <Zap className="w-1 h-1 text-purple-500/25" />}
            {i % 6 === 4 && <div className="w-0.5 h-0.5 bg-emerald-500/30 rounded-full" />}
            {i % 6 === 5 && <div className="w-1 h-1 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 rounded-full" />}
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
          <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(6,182,212)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="15%" x2="100%" y2="15%" stroke="url(#line-gradient-1)" strokeWidth="1" className="animate-line-slide" />
        <line x1="0" y1="45%" x2="100%" y2="45%" stroke="url(#line-gradient-2)" strokeWidth="0.8" className="animate-line-slide-delayed" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#line-gradient-3)" strokeWidth="0.6" className="animate-line-slide-slow" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Enhanced Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          data-section="header"
          id="header"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border border-emerald-300/30 rounded-full backdrop-blur-sm mb-6 hover:shadow-lg hover:scale-105 transition-all">
            <User className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold">About Me</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
              ประวัติส่วนตัว
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            ผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศ ระบบฝังตัว และนวัตกรรม พร้อมประสบการณ์การสอนและวิจัยมากกว่า 10 ปี
          </p>
          
          {/* Achievement Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              return (
                <div key={index} className={`p-4 bg-white/70 backdrop-blur rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all group ${colors.glow}`}>
                  <div className={`text-emerald-600 group-hover:scale-110 transition-transform mb-2 flex justify-center`}>
                    {achievement.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{achievement.value}</div>
                    <div className="text-xs text-slate-600">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Personal Information Section */}
        <section 
          className={`mb-20 transition-all duration-1000 delay-200 ${visibleSections.has('personal') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-section="personal"
          id="personal"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Enhanced Profile Image */}
              <div className="relative flex justify-center">
                <div className="relative group">
                  {/* Enhanced glow effects */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-[90%] h-[90%] bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute w-[70%] h-[70%] bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>

                  {/* Animated rings */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-[95%] h-[95%] border-2 border-emerald-300/20 rounded-full animate-spin-slow" />
                    <div className="absolute w-[105%] h-[105%] border border-lime-300/15 rounded-full animate-spin-reverse" />
                  </div>
                  
                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src="/profile.jpg"
                      alt="นายธฤต ไชยมงคล"
                      className="relative w-96 h-96 object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Enhanced floating decorative elements */}
                   
                    <Star className="absolute bottom-6 left-4 w-3 h-3 text-lime-400/60 animate-sparkle-delayed" />
                    <Zap className="absolute top-1/3 left-2 w-2 h-2 text-cyan-400/60 animate-ping" />
                    <Circle className="absolute bottom-1/4 right-6 w-2 h-2 text-purple-400/50 animate-bounce fill-current" />
                    
                    {/* Enhanced corner decorations */}
                    <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-emerald-400 rounded-tl-3xl opacity-60" />
                    <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-lime-400 rounded-br-3xl opacity-60" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl opacity-40" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400 rounded-bl-2xl opacity-40" />
                  </div>
                </div>
              </div>

              {/* Enhanced Personal Details */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-2">{personalInfo.name}</h2>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span>อาจารย์ประจำสาขาเทคโนโลยีสารสนเทศ</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all group">
                    <Calendar className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-emerald-600 font-medium">วันเกิด</p>
                      <p className="font-bold text-slate-800">{personalInfo.birthDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur rounded-xl border border-slate-200 hover:border-lime-300 hover:shadow-lg hover:-translate-y-1 transition-all group">
                    <User className="w-5 h-5 text-lime-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-lime-600 font-medium">อายุ</p>
                      <p className="font-bold text-slate-800">{personalInfo.age} ปี</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur rounded-xl border border-slate-200 hover:border-pink-300 hover:shadow-lg hover:-translate-y-1 transition-all group">
                    <Heart className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-pink-600 font-medium">สถานะ</p>
                      <p className="font-bold text-slate-800">{personalInfo.status}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:-translate-y-1 transition-all group">
                    <Baby className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-cyan-600 font-medium">บุตร</p>
                      <p className="font-bold text-slate-800">{personalInfo.children} คน</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/80 backdrop-blur rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-emerald-600 font-medium">ที่อยู่</p>
                      <p className="font-bold text-slate-800">{personalInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Information */}
        <section 
          className={`mb-20 transition-all duration-1000 delay-300 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-section="contact"
          id="contact"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">ช่องทางติดต่อ</h2>
            <p className="text-slate-600">ติดต่อได้ผ่านช่องทางต่างๆ ด้านล่าง</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 p-6 bg-white/90 backdrop-blur rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:bg-emerald-50/50 hover:-translate-y-2 transition-all group">
              <Mail className="w-6 h-6 text-emerald-600 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="text-sm text-emerald-600 font-medium">Email</p>
                <p className="font-bold text-slate-800 text-sm">{personalInfo.email}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto" />
            </a>
            
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 p-6 bg-white/90 backdrop-blur rounded-xl border border-slate-200 hover:border-lime-300 hover:shadow-xl hover:bg-lime-50/50 hover:-translate-y-2 transition-all group">
              <Phone className="w-6 h-6 text-lime-600 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="text-sm text-lime-600 font-medium">โทรศัพท์</p>
                <p className="font-bold text-slate-800">{personalInfo.phone}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-lime-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto" />
            </a>
            
            <div className="flex items-center gap-3 p-6 bg-white/90 backdrop-blur rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:bg-blue-50/50 hover:-translate-y-2 transition-all group cursor-pointer">
              <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="text-sm text-blue-600 font-medium">Facebook</p>
                <p className="font-bold text-slate-800 text-sm">{personalInfo.facebook}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto" />
            </div>
            
            <div className="flex items-center gap-3 p-6 bg-white/90 backdrop-blur rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-xl hover:bg-green-50/50 hover:-translate-y-2 transition-all group cursor-pointer">
              <MessageCircle className="w-6 h-6 text-green-600 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="text-sm text-green-600 font-medium">LINE</p>
                <p className="font-bold text-slate-800">{personalInfo.line}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto" />
            </div>
          </div>
        </section>

        {/* Enhanced Expertise Section */}
        <section 
          className={`mb-20 transition-all duration-1000 delay-400 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-section="expertise"
          id="expertise"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">ความเชี่ยวชาญ</h2>
            <p className="text-slate-600">ทักษะและความสามารถในด้านต่างๆ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => {
              const colors = getColorClasses(item.color);
              const isActive = activeSection === index;
              return (
                <div
                  key={index}
                  className={`group p-6 bg-white/90 backdrop-blur rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/30 ${isActive ? colors.glow : ''}`}
                  onMouseEnter={() => setActiveSection(index)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${colors.bg} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${colors.text}`}>{item.level}%</div>
                      <div className="text-xs text-slate-500">ความชำนาญ</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">{item.category}</h3>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                    <div 
                      className={`bg-gradient-to-r ${colors.bg} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isActive ? `${item.level}%` : '0%' }}
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${colors.light} ${colors.text} border ${colors.border} group-hover:scale-105 transition-transform duration-200`}
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Enhanced Education Timeline */}
        <section 
          className={`mb-20 transition-all duration-1000 delay-500 ${visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-section="education"
          id="education"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">ประวัติการศึกษา</h2>
            <p className="text-slate-600">เส้นทางการศึกษาและพัฒนาความรู้</p>
          </div>
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-lime-500 to-emerald-500 rounded-full shadow-lg"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-6 group">
                  {/* Enhanced timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-emerald-500 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:border-lime-500 transition-all duration-300">
                      <div className="w-32 h-32 p-2 group-hover:scale-110 transition-transform">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl group-hover:bg-lime-400/30 transition-all duration-300"></div>
                  </div>
                  
                  {/* Enhanced content card */}
                  <div className="flex-1 bg-white/90 backdrop-blur rounded-xl p-6 border border-slate-200 shadow-lg group-hover:shadow-xl group-hover:border-emerald-300 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-sm font-bold rounded-full shadow-md">
                          {edu.year}
                        </span>
                        <GraduationCap className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <Eye className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">{edu.degree}</h3>
                    <p className="text-emerald-600 font-semibold mb-1">{edu.field}</p>
                    {edu.major && <p className="text-slate-600 text-sm mb-2">{edu.major}</p>}
                    <p className="text-slate-700 font-medium">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Career History */}
        <section 
          className={`mb-20 transition-all duration-1000 delay-600 ${visibleSections.has('career') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-section="career"
          id="career"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">ประวัติการทำงาน</h2>
            <p className="text-slate-600">เส้นทางอาชีพและประสบการณ์การทำงาน</p>
          </div>
          <div className="space-y-6">
            {career.map((job, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                  job.current
                    ? 'bg-gradient-to-r from-emerald-50 to-lime-50 border-emerald-300 shadow-lg'
                    : 'bg-white/90 backdrop-blur border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className={`w-5 h-5 ${job.current ? 'text-emerald-600' : 'text-slate-500'} group-hover:scale-110 transition-transform`} />
                      <span className={`text-sm font-medium ${job.current ? 'text-emerald-600' : 'text-slate-600'}`}>
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-xs font-bold rounded-full animate-pulse shadow-md">
                          ปัจจุบัน
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${job.current ? 'text-emerald-700' : 'text-slate-800'} group-hover:text-emerald-700 transition-colors`}>
                      {job.position}
                    </h3>
                    <p className="text-slate-700 font-medium">{job.institution}</p>
                  </div>
                  <div className={`p-3 rounded-full ${job.current ? 'bg-emerald-100' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                    <Award className={`w-6 h-6 ${job.current ? 'text-emerald-600' : 'text-slate-500'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
