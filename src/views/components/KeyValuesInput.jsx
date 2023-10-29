import React from "react";
import ICON from "../../assets/icons";
import Button from "../@/Button";

export default function KeyValuesInput({ row, updateRow, removeRow }) {
  return (
    <div className="flex gap-2 mb-2">
      <input
        type="text"
        className="rounded-lg w-2 border border-white/5 bg-white/5 hover:bg-gray-100/10 font-medium text-md p-1.5 focus:ring-1 focus:outline-none focus:ring-blue-300 flex-grow"
        placeholder="Key"
        name="key"
        value={row.key}
        onChange={({ target }) => updateRow(row, target)}
      />
      <input
        type="text"
        className="rounded-lg border border-white/5 bg-white/5 hover:bg-gray-100/10 font-medium text-md p-1.5 focus:ring-1 focus:outline-none focus:ring-blue-300 flex-grow"
        placeholder="Value"
        name="value"
        value={row.value}
        onChange={({ target }) => updateRow(row, target)}
      />
      <Button
        className="border border-red-500/50 bg-red-800/20 hover:bg-red-800/50 py-2 ml-1"
        onClick={() => removeRow(row)}
      >
        <ICON.Delete />
      </Button>
    </div>
  );
}