import React, {useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "./utils/styling";
import GlobalStyle from "./components/atoms/GlobalStyles";
import './utils/fontface.css'
import {useWindowSize} from 'react-use'
// import FleetBuilderScene from "./components/organisms/FleetBuilderScene";



const ClientSideOnlyLazyFleetBuilderScene = React.lazy(() =>
    import('./components/organisms/FleetBuilderScene')
)
function App() {
  const size = useWindowSize();
  useEffect(() => {
    document.documentElement.style.setProperty('--windowHeight', `${size.height}px`)
    console.log("size", size)
}, [size])

  const isSSR = typeof window === 'undefined'

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!isSSR && (
                <React.Suspense fallback={<div/>}>
                    <ClientSideOnlyLazyFleetBuilderScene/>
                </React.Suspense>
            )}
            {/* <FleetBuilderScene /> */}
    </ThemeProvider>
  );
}

export default App;
