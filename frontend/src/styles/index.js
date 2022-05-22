import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Theme  = ({children}) => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#96bbac',
        main: '#7CAA98',
        dark: '#56766a'
      },
      secondary:{
        light: '#d3dec7',
        main:'#C8D6B9',
        dark: '#8c9581',
      },
    },
})
  return ( 
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>

  )
}

export default Theme