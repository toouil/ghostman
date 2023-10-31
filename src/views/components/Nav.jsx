import React from "react";
import ICON from "../../assets/icons";
import Button from "../@/Button";

export default function Nav({ openHistory }) {
  return (
    <nav className="py-3 px-6 sticky top-0 left-0 w-full z-30 bg-gray-500/5 flex justify-between items-center backdrop-blur-md shadow">
      <ICON.Logo />
      <Button className="border border-white/5 bg-white/5 hover:bg-gray-100/10" onClick={() => openHistory(true)}>History <ICON.History /> </Button>
    </nav>
  );
}
