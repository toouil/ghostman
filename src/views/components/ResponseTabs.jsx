import React, { useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import JsonEditor from "./JsonEditor";
import '../../styles/tab.css'
import ResponseHeader from "./ResponseHeader";

export default function ResponseTabs({ resBody, resHeader }) {
  const tabs = [
    {
      id: 1,
      name: "Response Body",
      value: resBody,
      panel: JsonEditor
    },
    {
      id: 2,
      name: "Response Header",
      value: resHeader,
      panel: ResponseHeader
    }
  ];

  return (
    <>
      <Tabs
        forceRenderTabPanel
        selectedTabClassName="bg-blue-500"
      >
        <TabList className="relative text-white rounded-lg border border-white/5 bg-white/5 font-medium text-md p-1.5 flex gap-3 tabs">
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
            <tab.panel panelValue={tab.value} editable={false} />
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}