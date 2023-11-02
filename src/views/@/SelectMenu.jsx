import React, { useEffect, useState } from "react";
import ICON from "../../assets/icons";
import cn from "../../utils/cn";
import Button from "./Button";
import clsx from "clsx";

export default function SelectMenu({ optionState, options, className }) {
    const [ option, setOption ] = optionState
    const [hideDropMenu, setHideDropMenu] = useState(true);

    const selectOption = (selectedOption) => {
      setOption(selectedOption);
      setHideDropMenu(true);
    };

    useEffect(() => {
      const handleClick = () => setHideDropMenu(true);
      window.addEventListener("click", handleClick, true);
  
      return () => {
        window.removeEventListener("click", handleClick, true);
      };
    }, []);

  return (
    <div className={cn("relative w-28 z-20", className)}>
      <span className="relative">
        <div className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"></div>
        <Button
          onClick={() => setHideDropMenu(!hideDropMenu)}
          className={"relative z-10 w-full justify-between gap-0 " + clsx({ "pointer-events-none" : !hideDropMenu })}
          type="button"
          theme="glass"
        >
          {option} <ICON.DropDown />
        </Button>
      </span>

      <div
        hidden={hideDropMenu}
        className="w-full mt-2 absolute border rounded-lg border-white/5 text-sm z-10 shadow overflow-hidden backdrop-blur-md bg-white/5"
      >
        {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => selectOption(option)}
              className="block px-4 py-2 w-full hover:bg-gray-100/10 text-white"
            >
              {option}
            </button>
        ))}
      </div>
    </div>
  );
}
