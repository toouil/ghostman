import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RequestTabs from "../components/RequestTabs";
import toObject from "../../utils/toObject";
import UrlInput from "../components/UrlInput";
import axios from "axios";

const initialKeyValueState = () => [
  {
    id: uuidv4(),
    key: "",
    value: "",
  },
];
const initialJsonEditorState = "{\n\t\n}"
const initialURLState = "https://jsonplaceholder.typicode.com/posts/1"

export default function Request({ setResponse, sendingState }) {
  const [sending, setSending] = sendingState;
  const [URL, setURL] = useState(initialURLState);
  const [method, setMethod] = useState("GET");
  const [queryParams, setQueryParams] = useState(initialKeyValueState);
  const [headers, setHeaders] = useState(initialKeyValueState);
  const [body, setBody] = useState(initialJsonEditorState);

  // useEffect(() => {
    // const testData = {
    //   url: URL,
    //   method,
    //   queryParams: toObject(queryParams),
    //   headers: toObject(headers),
    //   body: data,
    // };

    // console.log(testData);
  // }, [sending]);

  const onSendRequest = async (e) => {
    e.preventDefault();
    setSending(true);
    
    let data
    try {
      data = JSON.parse(body.toString())
    } catch (err) {
      setSending(false);
      return alert("Something wrong with json data !")
    }
    
    try {
      const response = await axios({
        url: URL,
        method,
        headers: toObject(headers),
        params: toObject(queryParams),
        data
      });

      setResponse({
        ...response,
        data : JSON.stringify(response?.data, null, 2)
      });
    } catch (err) {
      setResponse({ status : 404, time : 99, size : 99, data : "{\n\t\"message\" : \"Error\"\n}" });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <UrlInput
        urlState={[URL, setURL]}
        methodState={[method, setMethod]}
        sending={sending}
        onSendRequest={onSendRequest}
      />
      <RequestTabs
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={initialJsonEditorState}
        setBody={setBody}
      />
    </>
  );
}
