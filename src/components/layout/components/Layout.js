import React from "react";
import {Box} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import NavigationFrame from './NavigationFrame';

const theme = createMuiTheme();


const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavigationFrame>
          {children}
        </NavigationFrame>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
