import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function About({
  count,
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />

      {isShow ? <h1>{doubleCount}</h1> : null}
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <button href="/about" onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />
    </>
  );
}
