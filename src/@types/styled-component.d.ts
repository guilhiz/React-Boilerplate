import 'styled-components';
import { defaultTheme } from '../theme';
type CustomTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
