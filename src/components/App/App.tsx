import { ThemeProvider } from "styled-components";
import { Global } from "@styles/Global";
import { theme } from "@styles/theme";
import { FC } from "react";
import { AppInterface } from "./AppInterface";

const App: FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AppInterface />
    </ThemeProvider>
  )
}

export { App};
