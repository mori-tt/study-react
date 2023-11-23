import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Headline } from "../components/Headline.js";
import { Links } from "../components/Links.js";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Headline page="{props.page}">
            <code className={styles.code}>pages/{props.page}.js</code>
          </Headline>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <Links />
      </main>
  );
}
