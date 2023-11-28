import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "@/src/components/Links";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${classes.main} ${inter.className}`}>
      <div className={classes.description}>
        <Headline page="{props.page}">
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
      </div>

      <div className={classes.center}>
        <Image
          className={classes.logo}
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
