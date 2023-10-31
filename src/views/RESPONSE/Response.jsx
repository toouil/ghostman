import React, { useEffect } from "react";
import ResponseTabs from "../components/ResponseTabs";
import bytes from "bytes";
import { httpStatusColors } from "../../utils/httpStatus";

export default function Response({ response }) {
  if (response.atFirst) return <h1 className="mt-3 text-gray-200 text-xl font-normal py-2.5 px-2">Response</h1>;

  const size = () => {
    return bytes(
      (response.data ? JSON.stringify(response.data).length : 0) +
        (response.headers ? JSON.stringify(response.headers).length : 0)
    )
  }

  const time = () => {
    if ('customData' in response) {
      return response.customData.time
    }
  }

  const status = () => {
    return response?.status || 0
  }

  return (
    <div className="mt-3 text-gray-200">

      <div className="flex justify-between items-center gap-3 flex-wrap py-2.5 px-2">
        <h1 className="text-xl font-normal">Response</h1>
        <div className="flex items-center justify-between gap-1 text-sm">
          <span className="pl-3 pr-1.5" style={{ color : httpStatusColors[status()] }}>Status : { status() }</span>
          <span className="pl-3 pr-1.5 border-l border-white/20">Time : { time() } ms</span>
          <span className="pl-3 pr-1.5 border-l border-white/20">Size : { size() }</span>
        </div>
      </div>
      
      <ResponseTabs resBody={response?.data} resHeader={response?.headers} />
    </div>
  );
}
