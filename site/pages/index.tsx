import Head from "next/head";
import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";

console.log(React, ReactDOM);

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | Next.js + TypeScript Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
