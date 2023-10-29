import React, { useEffect, useState } from "react";
import ICON from "../../assets/icons";
import cn from "../../utils/cn";

export default function SelectMenu({ optionState, options }) {
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
    <div className="relative w-28 z-20">
      <span className="relative">
        <div className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"></div>
        <button
          onClick={() => setHideDropMenu(!hideDropMenu)}
          className={cn("relative z-10 text-gray-200 w-full rounded-lg border border-white/5 bg-white/5 px-5 py-2.5 hover:bg-gray-100/10 font-medium text-sm text-center flex justify-between items-center outline-none focus:ring-1 focus:ring-blue-300", { "pointer-events-none" : !hideDropMenu })}
          type="button"
        >
          {option} <ICON.DropDown />
        </button>
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
