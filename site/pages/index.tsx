import Head from "next/head";
import Link from "next/link";
import { AutoGrid } from "@charliewilco/level-ui";

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | Next.js + TypeScript Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Hello Next.js 👋</h1>

    <AutoGrid columns={3}>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </AutoGrid>
  </div>
);

export default IndexPage;
