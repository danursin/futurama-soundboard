import "semantic-ui-css/semantic.min.css";
import "../style/site.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
