import { ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { BaseColors } from './colors';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: BaseColors.Yellow,
      contrastText: BaseColors.Black,
    },
    secondary: {
      main: BaseColors.Purple
    },
    background: {
      default: '#212121',
      paper: BaseColors.Red,
    },
    warning: {
      main: BaseColors.Orange,
    },
    error: {
      main: BaseColors.Red,
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    action: {
      disabledBackground: alpha(BaseColors.Yellow, 0.5),
      disabled: alpha(BaseColors.Black, 0.4)
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        // HUGE H/T to DragoJokera: https://stackoverflow.com/a/70252930/324527
        root: {
          '& .MuiInput-underline:after': {
            borderBottomColor: BaseColors.Black,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: BaseColors.Black,
            },
            '&:hover fieldset': {
              borderColor: BaseColors.Black,
              borderWidth: '0.15rem',
            },
            '&.Mui-focused fieldset': {
              borderColor: BaseColors.Black,
            },
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: '10px',
          padding: '10px'
        }
      }
    }
  }
};