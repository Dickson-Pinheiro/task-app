import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/defaultTheme"
import Router from "./router"
import { AuthProvider } from "./context/AuthContext";

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Router />
          <ToastContainer />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
