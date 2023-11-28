// import React from "react";
import Image from 'next/image'
import classes from 'src/components/Headline/Headline.module.css'

export function Headline(props) {
  return (
    <div>
          <p>
            Get started by editing&nbsp;
            {props.children}
          </p>
          
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={classes.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <button onClick={props.onClick}>ボタン</button>
    </div>
  )
}
