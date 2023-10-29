import { useState } from "react";
import Layout from "./views/layout/Layout";
import Request from "./views/REQUEST/Request";
import Response from "./views/RESPONSE/Response";


function App() {
  const initialData = { data : "{\n\t\n}", atFirst : true}
  const [data, setData] = useState(initialData);
  const [sending, setSending] = useState(false);

  return (
    <Layout>
      <Request setResponse={setData} sendingState={[sending, setSending]} />
      <Response response={data} />
    </Layout>
  );
}

export default App;
