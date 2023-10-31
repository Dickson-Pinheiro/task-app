import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/defaultTheme"
import Painel from "./pages/Painel"

function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Painel />
    </ThemeProvider>
  )
}

export default App
