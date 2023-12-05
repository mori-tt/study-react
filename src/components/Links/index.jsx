import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <>
      <div className={classes.grid}>
        {props.items.map((item) => {
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
};
