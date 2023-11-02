import React from "react";
import cn from "../../utils/cn";

const variants = (t = "default", s = "default") => {
  const defaultStyle = "flex items-center justify-center gap-1 rounded-lg font-medium text-white text-sm text-center focus:ring-1 focus:outline-none focus:ring-blue-300";
  const theme = {
    default : "bg-blue-500 hover:bg-blue-600",
    warning : "border border-red-500/50 bg-red-800/20 hover:bg-red-800/50",
    glass : "border border-white/5 bg-white/5 hover:bg-gray-100/10",
  };
  const size = {
    default : "px-6 py-2.5",
    sm : "px-4 py-2",
  };

  return [defaultStyle, theme[t], size[s]]
}

export default function Button({ className, theme, size, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        ...variants(theme, size),
        className
      )}
    ></button>
  );
}
