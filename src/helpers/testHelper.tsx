import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

export const renderWithProviders = (ui: JSX.Element): RenderResult => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
