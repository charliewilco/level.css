import { AppProps } from "next/app";
import "@charliewilco/level";
import { Layout } from "../components/layout";

export default function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
