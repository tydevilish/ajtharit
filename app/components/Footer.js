
"use client";

export default function Footer() {
  const menuItems = [
    { title: "เกี่ยวกับตนเอง", href: "/about" },
    { title: "งานวิจัย", href: "/research" },
    { title: "รางวัล", href: "/awards" },
    { title: "ความภาคภูมิใจ", href: "/achievements" },
    { title: "บริการวิชาการ", href: "/services" },
    { title: "การพัฒนาตนเอง", href: "/development" },
  ];

  return (
    <footer className="relative border-t border-yellow-100/60 bg-white mt-16">
      {/* แถบสีบาง ๆ ให้กลมกลืนกับ Nav */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-green-400 to-yellow-300 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* บน: โลโก้/ชื่อ + เมนูสั้น */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* โปรไฟล์ย่อ */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-green-400">
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove("hidden");
                  }}
                />
                <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-yellow-100 to-green-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-700">TC</span>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                Tharit Chaimongkul
              </div>
              <div className="text-sm text-gray-600">Information Technology</div>
            </div>
          </div>

          {/* เมนูย่อ (ไม่ตกร่างบรรทัด) */}
          <nav className="flex flex-wrap justify-start md:justify-end gap-x-3 gap-y-2 whitespace-nowrap">
            {menuItems.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="text-sm text-gray-700 hover:text-green-700 px-3 py-1 rounded-full border border-yellow-200/50 bg-gradient-to-r from-yellow-50/70 via-white/70 to-green-50/70 hover:bg-white transition"
              >
                {m.title}
              </a>
            ))}
          </nav>
        </div>

        {/* คั่นเส้นบาง */}
        <div className="my-6 border-t border-yellow-100/60" />

        {/* ล่าง: ลิขสิทธิ์ + โซเชียล (SVG เบา ๆ) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Tharit Chaimongkul. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-lg border border-yellow-200/60 hover:border-green-300 hover:shadow transition"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-700 hover:text-green-700">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-yellow-200/60 hover:border-green-300 hover:shadow transition"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-700 hover:text-green-700">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.4 11.4 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.76.83 1.22 1.89 1.22 3.19 0 4.59-2.8 5.59-5.47 5.88.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z" />
              </svg>
            </a>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-yellow-200/60 hover:border-green-300 hover:shadow transition"
              title="Email"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-700 hover:text-green-700">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.17a1 1 0 0 0 1.2 0L20 8.24V18H4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
