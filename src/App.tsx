import { ThemeProvider } from "styled-components";
import { Global } from "./styles/Global";
import { theme } from "./styles/theme";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div className="App">
        <h1>N3T Decentralized raffles</h1>
      </div>
    </ThemeProvider>
  )
}

export { App};
