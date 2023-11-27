import classes from "./Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    desctiption:
      "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    desctiption:
      "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    desctiption:
      "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    desctiption:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Links() {
  return (
    <>
      <div className={classes.grid}>
        {ITEMS.map((item) =>{
          return (
            <a
              key={item.href}
              href={item.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={classes.title}>
                {item.title}
                <span> -&gt;</span>
              </h2>
              <p className={classes.desctiption}>{item.desctiption}</p>
            </a>
          );
        })}
       
      </div>
    </>
  );
}
