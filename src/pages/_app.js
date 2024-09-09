import "@/styles/globals.css";
import { Header } from "../components/Header";
import { About } from "../components/About";
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="conatiner max-w-[600px] md:max-w-[1200px] mx-auto px-4">
        <Header />
        <Component {...pageProps} />
      </div>
      <About />
    </>
  );
}
