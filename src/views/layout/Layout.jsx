import { Toaster } from "react-hot-toast";
import Background from "../components/Background";
import Nav from "../components/Nav";

export default function Layout({ openHistory, children }) {
  return (
    <>
      <Toaster />
      <Nav openHistory={openHistory}/>
      <Background />

      <main className="md:px-[20vw] px-[5vw] mb-5">{children}</main>
    </>
  );
}
