import React from "react";
import ICON from "../../assets/icons";
import Button from "../@/Button";

export default function KeyValuesInput({ row, updateRow, removeRow }) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      <input
        type="text"
        className="rounded-lg min-w-[150px] border border-white/5 bg-white/5 hover:bg-gray-100/10 font-medium text-md p-1.5 focus:ring-1 focus:outline-none focus:ring-blue-300 flex-grow"
        placeholder="Key"
        name="key"
        value={row.key}
        onChange={({ target }) => updateRow(row, target)}
      />
      <div className="flex flex-grow">
        <input
          type="text"
          className="rounded-lg border border-white/5 bg-white/5 hover:bg-gray-100/10 font-medium text-md p-1.5 focus:ring-1 focus:outline-none focus:ring-blue-300 flex-grow"
          placeholder="Value"
          name="value"
          value={row.value}
          onChange={({ target }) => updateRow(row, target)}
        />
        <Button
          type="button"
          className="ml-1"
          onClick={() => removeRow(row)}
          theme="warning"
          size="sm"
        >
          <ICON.Delete />
        </Button>
      </div>
    </div>
  );
}
