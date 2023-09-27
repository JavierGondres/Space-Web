import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const font =  "'Bellefair'";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B0D17",
      dark: "#D0D6F9",
      light: "#FFFFFF"
    },
  },
  typography: {
    fontFamily: font,
  }
  
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
)
