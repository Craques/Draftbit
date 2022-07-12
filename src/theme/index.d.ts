import "styled-components";
import { Theme, ThemeColors, ThemeSpacing } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
