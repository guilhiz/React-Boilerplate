import 'styled-components';
import { defaultTheme } from '../theme';
type CustomTheme = typeof defaultTheme;

declare module 'styled-components' {
  // @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
