import { createGlobalStyle } from "styled-components";
import "./theme.css";

export const lightTheme = {
  primaryBg: "#f9fafb",
  primaryBgShadeOne: "#f2f3f4",
  primaryBgShadeTwo: "#d5dbdb",
  primaryBgShadeThree: "#b2babb",
  secondayBg: "#bfc9ca",
  secondayBgShadeOne: "#99a3a4",
  secondayBgShadeTwo: "#34495e",
  secondayBgShadeThree: "#273746",
  primaryFont: "#000000",
  primaryFontShadeOne: "#121212",
  primaryFontShadeTwo: "#282828",
  secondaryFont: "#313131",
  secondaryFontOne: "#434343",
  secondaryFontTwo: "#575757",
};

export const darkTheme = {
  primaryBg: "#1a1d24",
  primaryBgShadeOne: "#f2f3f4",
  primaryBgShadeTwo: "#d5dbdb",
  primaryBgShadeThree: "#b2babb",
  secondayBg: "#bfc9ca",
  secondayBgShadeOne: "#99a3a4",
  secondayBgShadeTwo: "#34495e",
  secondayBgShadeThree: "#273746",
  primaryFont: "#fff",
  primaryFontShadeOne: "#121212",
  primaryFontShadeTwo: "#282828",
  secondaryFont: "#313131",
  secondaryFontOne: "#434343",
  secondaryFontTwo: "#575757",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.primaryFont}
  }

  .title-delete h3, .post-body {
    color: ${(props) => props.theme.primaryFont};
  }
`;
