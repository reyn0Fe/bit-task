import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MyOrganizations } from "@pages";
import { blackTheme } from "@shared";
import { GlobalStyles } from "./GlobalStyles";
import { store } from "./store";
import { DrawersRenderer } from "./ui";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={blackTheme}>
        <GlobalStyles />
        <MyOrganizations />
        <DrawersRenderer />
      </ThemeProvider>
    </Provider>
  );
};
