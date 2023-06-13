import React from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "./utils/styling";
import GlobalStyle from "./components/atoms/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>hello</p>
    </ThemeProvider>
  );
}

export default App;
