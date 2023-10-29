import Background from "../components/Background";
import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Background />

      <main className="md:px-[20vw] px-[5vw] mb-5">{children}</main>
    </>
  );
}
