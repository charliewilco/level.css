import { AppProps } from "next/app";
import "@charliewilco/level";

export default function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
