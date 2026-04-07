import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

// Animated counter
const AnimatedCounter = ({ value, delay = 0 }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      count: value,
      transition: { duration: 1.5, delay },
    });

    controls.set({ count: 0 });
  }, [controls, value, delay]);

  return <motion.div animate={controls}>{Math.floor(count)}</motion.div>;
};

const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerData = [
    {
      title: "الجمعية",
      content:
        "منصة تهدف إلى نشر الوعي الاقتصادي وتقديم المعرفة من خلال الأخبار والمحاضرات والفعاليات المتخصصة.",
    },
    {
      title: "روابط سريعة",
      links: [
        { name: "الرئيسية", href: "/" },
        { name: "المحاضرات", href: "/lectures" },
        { name: "الفعاليات", href: "/events" },
        { name: "الأخبار", href: "/news" },
      ],
    },
    {
      title: "تواصل معنا",
      links: [
        { name: "info@example.com", icon: FaEnvelope },
        { name: "+963 000 000 000" },
        { name: "دمشق - سوريا" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <footer
      ref={ref}
      dir="rtl"
      className="relative mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* 🌊 Wave SVG Top */}
      <div className="absolute -top-1 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.2,22,103.47,26.32,158,17.81C257.23,55.22,321,34.88,383,17.57c63-17.71,125-34.32,189-26.43C688,2.38,751,24.22,814,43.12c63,19,126,31.09,189,14.11C1034,42,1097,5,1200,0V0Z"
            fill="#1e293b"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {footerData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
          >
            <h3 className="font-semibold mb-4 text-lg sm:text-base md:text-lg">
              {section.title}
            </h3>

            {section.content && (
              <p className="text-textSecondary leading-relaxed text-sm sm:text-xs md:text-sm">
                {section.content}
              </p>
            )}

            {section.links && (
              <ul className="space-y-3 text-textSecondary text-sm sm:text-xs md:text-sm">
                {section.links.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <li key={i}>
                      <a
                        href={link.href || "#"}
                        className="group flex items-center gap-2 hover:text-accent transition"
                      >
                        {Icon && <Icon size={14} />}
                        {link.name}
                        <span className="h-[2px] w-0 bg-accentSoft transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}

            {section.counters && (
              <div className="mt-4 space-y-2 text-sm sm:text-xs md:text-sm text-white">
                {section.counters.map((counter, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                  >
                    <span>{counter.name}</span>
                    <AnimatedCounter value={counter.value} delay={i * 0.2} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* Newsletter + Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <h3 className="font-semibold mb-4 text-lg sm:text-base md:text-lg">اشترك بالنشرة</h3>
          <p className="text-textSecondary mb-4 text-sm sm:text-xs md:text-sm">
            احصل على أحدث الأخبار مباشرة إلى بريدك
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-stretch bg-surface/10 rounded-xl overflow-hidden border border-white/20">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-2 text-sm sm:text-xs outline-none placeholder-textSecondary bg-transparent"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-accent to-accentSoft hover:opacity-90 transition mt-2 sm:mt-0">
              إرسال
            </button>
          </div>

          <div className="flex gap-3 mt-6">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r from-accent to-accentSoft transition overflow-hidden"
                >
                  <Icon size={14} className="relative z-10 text-white" />
                  {/* sparkle animation */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-sparkle1 via-sparkle2 to-sparkle3 opacity-30 pointer-events-none animate-sparkle"></span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="border-t border-white/10 text-center text-xs sm:text-[10px] md:text-xs text-textSecondary py-5"
      >
        © 2026 الجمعية السورية للعلوم الاقتصادية. جميع الحقوق محفوظة.
      </motion.div>
    </footer>
  );
};

export default Footer;