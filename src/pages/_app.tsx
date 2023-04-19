import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  ) : null;
}
