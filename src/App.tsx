import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/defaultTheme"

function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div>oi</div>
    </ThemeProvider>
  )
}

export default App
