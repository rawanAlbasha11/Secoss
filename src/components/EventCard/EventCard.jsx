import { useEffect, useState } from "react";
import Button from "../ui/Button";

// ⏱️ countdown دقيق بالثواني
const getTimeParts = (date) => {
  const diff = new Date(date) - new Date();

  if (diff <= 0) {
    return { done: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
};

const EventCard = ({
  title,
  description,
  image,
  date,
  location,
  actionLabel,
  actionLink,
}) => {
  const [timeLeft, setTimeLeft] = useState(getTimeParts(date));
useEffect(() => {
  const interval = setInterval(() => {
    setTimeLeft(getTimeParts(date));
  }, 1000);

  return () => clearInterval(interval);
}, [date]);

  return (
    <div className="relative h-full w-full  overflow-hidden rounded-3xl shadow-lg group">

      {/* 🔥 Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

        {/* Location */}
        {location && (
          <p className="text-sm opacity-80 mb-1">📍 {location}</p>
        )}

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm opacity-90 line-clamp-2 mb-4">
          {description}
        </p>

        {/* ⏱️ Countdown */}
        {!timeLeft.done ? (
          <div className="flex gap-2 mb-4">

            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div
                key={unit}
                className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center min-w-[60px]"
              >
                <p className="text-lg font-bold animate-pulse">
                  {timeLeft[unit].toString().padStart(2, "0")}
                </p>
                <span className="text-[10px] opacity-70">
                  {unit === "days" && "يوم"}
                  {unit === "hours" && "ساعة"}
                  {unit === "minutes" && "دقيقة"}
                  {unit === "seconds" && "ثانية"}
                </span>
              </div>
            ))}

          </div>
        ) : (
          <p className="text-accent font-bold mb-4">🚀 بدأ الحدث</p>
        )}

        {/* Button */}
        {actionLabel && actionLink && (
          <Button href={actionLink} variant="accent">
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventCard;