"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileContent, setShowMobileContent] = useState(false);

  // ✅ บังคับใช้ Hamburger เมื่อเมนูแนวนอนเริ่มตกบรรทัด/ล้น
  const [forceCompact, setForceCompact] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ ตรวจจับการ “ตกบรรทัด” หรือ “ล้นความกว้าง” ของเมนู
  useEffect(() => {
    const measure = () => {
      const el = menuRef.current;
      if (!el) return;

      // กันตกร่างบรรทัดด้วย CSS แล้วตรวจทั้งความกว้างและการขึ้นบรรทัดจริง
      const overflowed = el.scrollWidth > el.clientWidth;

      // ตรวจว่ามีรายการไหน offsetTop ต่างจากตัวแรกไหม (ขึ้นบรรทัดใหม่)
      const children = Array.from(el.children || []);
      const firstTop = children[0]?.offsetTop ?? 0;
      const wrapped = children.some((c) => c.offsetTop !== firstTop);

      setForceCompact(overflowed || wrapped);
    };

    // ตรวจครั้งแรก + เมื่อ resize
    measure();
    window.addEventListener('resize', measure);

    // ใช้ ResizeObserver เพื่อความแม่นเมื่อฟอนต์โหลด/หน้ากว้างเปลี่ยนแบบละเอียด
    const ro = new ResizeObserver(measure);
    if (menuRef.current) ro.observe(menuRef.current);

    return () => {
      window.removeEventListener('resize', measure);
      ro.disconnect();
    };
  }, []);

  // Handle mobile menu animation timing
  useEffect(() => {
    if (isMobileMenuOpen) {
      const timer = setTimeout(() => setShowMobileContent(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowMobileContent(false);
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { title: 'เกี่ยวกับตนเอง', href: '/about' },
    { title: 'งานวิจัย', href: '/research' },
    { title: 'รางวัล', href: '/awards' },
    { title: 'ความภาคภูมิใจ', href: '/achievements' },
    { title: 'บริการวิชาการ', href: '/services' },
    { title: 'การพัฒนาตนเอง', href: '/development' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-yellow-100/50' 
            : 'bg-white backdrop-blur-md shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-22 py-3 md:py-4">
            
            {/* Left Section - Profile */}
            <Link href="/">
            <div className="flex items-center space-x-3 group cursor-pointer relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-200 via-green-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-green-400 p-0.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="w-full h-full rounded-full bg-white p-0.5">
                    <img 
                      src="/profile.jpg" 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-100 to-green-100 hidden items-center justify-center">
                      <span className="text-lg font-bold text-green-600">TC</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="hidden sm:block relative z-10">
                <div className="font-bold text-gray-800 text-sm md:text-base leading-tight bg-gray-800 bg-clip-text text-transparent">
                  Tharit Chaimongkul
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium flex items-center space-x-1">
                  <span>Information Technology</span>
                </div>
              </div>
            </div>
            </Link>


            <div
              ref={menuRef}
              className={`${
                !forceCompact ? 'hidden lg:flex' : 'hidden'
              } items-center space-x-0.5 xl:space-x-1 bg-gradient-to-r from-yellow-50/70 via-white/70 to-green-50/70 rounded-full px-2 xl:px-4 py-2 border border-yellow-200/30 shadow-inner
              whitespace-nowrap`}  // ✅ กันตกร่างบรรทัด
            >
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <Link
                    href={item.href}
                    className="relative px-3 xl:px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-green-700 transition-all duration-300 flex items-center space-x-1 rounded-full hover:bg-white/80 hover:shadow-md group overflow-hidden whitespace-nowrap" // ✅ กันตกร่างบรรทัด
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-green-200/20 to-yellow-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Section - Login + Hamburger */}
            <div className="flex items-center space-x-3">
              <button className="hidden sm:flex items-center space-x-2.5 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 hover:from-green-600 hover:via-green-700 hover:to-green-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <LogIn className="w-4 h-4 relative z-10" />
                <span className="relative z-10">เข้าสู่ระบบ</span>
                <div className="relative z-10 flex space-x-0.5">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
                </div>
              </button>

              {/* ✅ ปุ่ม Hamburger: โชว์เมื่อหน้าจอเล็ก หรือเมื่อ forceCompact = true */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${forceCompact ? '' : 'lg:hidden'} p-2.5 rounded-xl bg-gradient-to-r from-yellow-50 to-green-50 border border-yellow-200/50 text-gray-700 hover:from-yellow-100 hover:to-green-100 transition-all duration-300 hover:shadow-lg`}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {(isMobileMenuOpen) && (
            <div className="border-t border-yellow-100/50 animate-mobileMenuSlide">
              <div className="bg-white backdrop-blur-sm">
                <div className="py-4 animate-mobileContentFade">
                  <div className="space-y-1">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-green-50 hover:text-green-700 rounded-xl transition-all duration-300"
                      >
                        {item.title}
                      </a>
                    ))}
                    <div className="pt-3 mt-3 border-t border-yellow-100/50">
                      <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white font-semibold text-sm rounded-xl hover:from-green-600 hover:via-green-700 hover:to-green-600 transition-all duration-300 hover:shadow-xl">
                        <LogIn className="w-4 h-4" />
                        <span>เข้าสู่ระบบ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes mobileMenuSlide {
          from { max-height: 0; opacity: 0; }
          to { max-height: 600px; opacity: 1; }
        }
        @keyframes mobileContentFade {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-mobileMenuSlide { animation: mobileMenuSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-mobileContentFade { animation: mobileContentFade 0.3s ease-out; }
        .delay-75 { animation-delay: 75ms; }
        .delay-150 { animation-delay: 150ms; }
      `}</style>
    </>
  );
}
