import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import ProsressBar from "../components/ProgressBar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <SessionProvider session={session}>
        <ProsressBar />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
