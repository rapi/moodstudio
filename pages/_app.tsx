import type { AppProps } from 'next/app';
import './global.css';   // ← your global stylesheet

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;