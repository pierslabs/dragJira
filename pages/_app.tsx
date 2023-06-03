import { UIProvider } from "@/context/ui";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

import { darkTheme } from "@/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { EntriesProvider } from "@/context/entries";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}
