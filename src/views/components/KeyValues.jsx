import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import KeyValuesInput from "./KeyValuesInput";
import Button from "../@/Button";

export default function KeyValues({ panelValue, setPanelValue }) {
  const [keyState, setKeyState] = useState(panelValue);

  const addNewRow = () => {
    setKeyState((state) => [
      ...state,
      {
        id: uuidv4(),
        key: "",
        value: "",
      },
    ]);
  };

  const updateRow = (row, { name, value }) => {
    setKeyState((state) =>
      [...state].map((e) => {
        if (e.id == row.id) {
          return { ...e, [ name ] : value }
        }
        return e;
      })
    );
  };

  const removeRow = (row) => {
    setKeyState((state) =>
      [...state].filter((e) => e.id !== row.id)
    );
  };

  useEffect(() => {
    setPanelValue(keyState)
  }, [ keyState ])

  return (
    <section className="relative rounded-lg border border-white/5 bg-white/5 text-gray-200 text-sm p-2">
      {keyState.map((row) => (
        <KeyValuesInput
          row={row}
          key={row.id}
          updateRow={updateRow}
          removeRow={removeRow}
        />
      ))}

      <Button
        type="button"
        onClick={addNewRow}
      >
        Add
      </Button>
    </section>
  );
}
