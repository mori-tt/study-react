import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
    setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(()=>{
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [count]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
    </>
  );
}
