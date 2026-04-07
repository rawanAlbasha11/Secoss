import { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ SlideComponent, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const startX = useRef(0);
  const isDragging = useRef(false);

  console.log("activeIndex:", activeIndex);

  // ✅ reset عند تغيير البيانات
  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  // 🔥 Auto-play (يوقف عند hover)
  useEffect(() => {
    if (isHovered || items.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev + 1 >= items.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  const moveTo = (index) => {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    setActiveIndex(index);
  };

  // 🖱️ Drag Start
  const handleStart = (e) => {
    isDragging.current = true;
    startX.current =
      e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
  };

  // 🖱️ Drag End
  const handleEnd = (e) => {
    if (!isDragging.current) return;

    const endX =
      e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX;

    const diff = startX.current - endX;

    if (diff > 50) moveTo(activeIndex + 1);
    if (diff < -50) moveTo(activeIndex - 1);

    isDragging.current = false;
  };

  if (!items.length) return null;

  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      {/* ✅ Slides */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-full h-[420px]"
          >
            <SlideComponent {...item} />
          </div>
        ))}
      </div>

      {/* ⬅️ Arrow */}
      <button
        onClick={() => moveTo(activeIndex - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow hover:scale-110 transition"
      >
        ‹
      </button>

      {/* ➡️ Arrow */}
      <button
        onClick={() => moveTo(activeIndex + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow hover:scale-110 transition"
      >
        ›
      </button>

      {/* 🔘 Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => moveTo(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === activeIndex
                ? "bg-white w-5"
                : "bg-white/50 w-2 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;