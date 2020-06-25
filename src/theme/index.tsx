/**
 * The interface description of our theme. A complete user theme must provide values to the specified keys.
 *
 * Wrap your app into a  `<ThemeProvider theme={ provided-theme }/>`
 */
export interface ITheme {
  /**
   * The font of texts in the navigation bars
   */
  navbarFont: string;

  /**
   * The font-size
   */
  navbarFontSize: string;

  /**
   * color of the navbar text
   */
  navbarFontColor: string;

  /**
   * color of the navbar text when hovered
   */
  navbarFontHover: string;
}
