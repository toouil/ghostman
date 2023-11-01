import React from "react";
import KeyValues from "./KeyValues";
import JsonEditor from "./JsonEditor";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import '../../styles/tab.css'

export default function RequestTabs({
  queryParams,
  setQueryParams,
  headers,
  setHeaders,
  body,
  setBody,
}) {
  const tabs = [
    {
      id: 1,
      name: "Query Params",
      value: queryParams,
      setValue: setQueryParams,
      panel: KeyValues,
    },
    {
      id: 2,
      name: "Headers",
      value: headers,
      setValue: setHeaders,
      panel: KeyValues,
    },
    {
      id: 3,
      name: "Body",
      value: body,
      setValue: setBody,
      panel: JsonEditor,
    },
  ];

  return (
    <>
      <Tabs
        forceRenderTabPanel
        selectedTabClassName="bg-blue-500"
      >
        <TabList className="relative text-white rounded-lg border border-white/5 bg-white/5 font-medium text-md p-1.5 flex gap-3 flex-wrap tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className="relative z-10 px-4 py-2 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-[5px] cursor-pointer"
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <div className="w-full h-2"></div>

        {tabs.map((tab) => (
          <TabPanel key={tab.id}>
            <tab.panel panelValue={tab.value} setPanelValue={tab.setValue} />
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}
