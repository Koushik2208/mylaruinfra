import React, { useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react"; // Assuming you are using lucide icons

interface AnimatedStatProps {
  stat: {
    icon: LucideIcon; // Or replace with your icon type
    value: number;
    title: string;
    operator: string;
  };
}

function AnimatedStat({ stat }: AnimatedStatProps) {
  const [animatedValue, setAnimatedValue] = useState<number>(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | undefined;
    const duration = 1000; // Animation duration in milliseconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const percentage = progress / duration;
        setAnimatedValue(Math.round(percentage * stat.value));
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setAnimatedValue(stat.value); // Ensure final value is exact
      }
    };
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    }; // Cleanup
  }, [stat.value]);

  return (
    <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300">
      <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
      <div className="text-3xl font-bold text-foreground mb-2">
        {animatedValue}
        {stat.operator}
      </div>
      <div className="text-muted-foreground">{stat.title}</div>
    </div>
  );
}

export default AnimatedStat;
