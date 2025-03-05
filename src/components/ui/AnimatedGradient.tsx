
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  children
}) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-r from-pastel-blue via-pastel-purple to-pastel-pink bg-[length:400%_400%] animate-gradient-shift",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedGradient;
