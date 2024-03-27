import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Home } from './Pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
