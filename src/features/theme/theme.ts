import { ThemeOptions } from '@mui/material/styles';
import { BaseColors } from './colors';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: BaseColors.Yellow,
            contrastText: BaseColors.Black,
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: BaseColors.Black,
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
        },
    },
};