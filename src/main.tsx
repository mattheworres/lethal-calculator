import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './features/App/App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { themeOptions } from './features/theme/theme'

const muiTheme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
)
