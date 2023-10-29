import React, { useEffect } from "react";
import ResponseTabs from "../components/ResponseTabs";

export default function Response({ response }) {
  if (response.atFirst) return <h1 className="mt-3 text-gray-200 text-xl font-normal py-2.5 px-2">Response</h1>;

  useEffect(() => {
    console.log(response)
  }, [  response])
  return (
    <div className="mt-3 text-gray-200">

      <div className="flex justify-between items-center gap-3 flex-wrap py-2.5 px-2">
        <h1 className="text-xl font-normal">Response</h1>
        <div className="flex items-center justify-between gap-1 text-sm">
          <span className="pl-3 pr-1.5">Status : { response?.status }</span>
          <span className="pl-3 pr-1.5 border-l border-white/10">Time : 555 ms</span>
          <span className="pl-3 pr-1.5 border-l border-white/10">Size : 555 b</span>
        </div>
      </div>
      
      <ResponseTabs resBody={response?.data} resHeader={response?.headers} />
    </div>
  );
}
