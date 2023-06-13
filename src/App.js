import React from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "./utils/styling";
import GlobalStyle from "./components/atoms/GlobalStyles";

const ClientSideOnlyLazyFleetBuilderScene = React.lazy(() =>
    import('./components/organisms/FleetBuilderScene')
)
function App() {
  const isSSR = typeof window === 'undefined'

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!isSSR && (
                <React.Suspense fallback={<div/>}>
                    <ClientSideOnlyLazyFleetBuilderScene/>
                </React.Suspense>
            )}
    </ThemeProvider>
  );
}

export default App;
