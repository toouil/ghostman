import React, { useEffect, useRef } from "react";
import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, insertTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { nord } from "cm6-theme-nord";
import "../../styles/editor.css"

const indentWithTab = {
  key: "Tab",
  run: insertTab,
};

const theme = {
  "&": {
    backgroundColor: "#ffffff0d"
  }
}

const extensions = [
  basicSetup,
  keymap.of([defaultKeymap, indentWithTab]),
  json(),
  EditorState.tabSize.of(3),
  EditorView.theme(theme),
  nord,
];

export default function JsonEditor({ panelValue, setPanelValue, editable = true }) {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current === "null") return;

    const state = EditorState.create({
      doc: panelValue,
      extensions: [
        ...extensions,
        EditorView.updateListener.of((view) => {
          if (view.docChanged) {
            setPanelValue(view.state.doc);
          }
        }),
        EditorView.editable.of(editable)
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, [editorRef, panelValue]);

  return <section ref={editorRef} className="rounded-lg border border-white/5 overflow-hidden w-full h-fit"></section>;
}
