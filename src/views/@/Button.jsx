import React from "react";
import cn from "../../utils/cn";

export default function Button({ className, type, ...props }) {
  return (
    <button
      {...props}
      type={type || "button"}
      className={cn(
        "flex items-center justify-center gap-1 rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium text-white text-sm text-center px-5 py-2.5",
        className
      )}
    ></button>
  );
}
