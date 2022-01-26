import { createMuiTheme } from '@material-ui/core/styles';
import {colors} from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary: {
      main: colors.indigo['A400'],
    },
    secondary: {
      main: colors.orange['A700'],
    },
    typography: {
      h6:{
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '-0.05px'
      }
    }
  }
})

export default theme;