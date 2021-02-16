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
  primaryBgShadeTwo: "#000a0d",
  primaryBgShadeThree: "#000fdf",
  secondayBg: "#16181A",
  secondayBgShadeOne: "#99a3a4",
  secondayBgShadeTwo: "#34495e",
  secondayBgShadeThree: "#273746",
  primaryFont: "#fff",
  primaryFontShadeOne: "#121212",
  primaryFontShadeTwo: "#282828",
  secondaryFont: "#dedede",
  secondaryFontOne: "#434343",
  secondaryFontTwo: "#575757",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.primaryFont}
  }

  .title-delete h3, .post-body, .title {
    color: ${(props) => props.theme.primaryFont};
  }

  table,
  th,
  td {
  border: 1px solid ${(props) => props.theme.primaryFont};
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.primaryBgShadeTwo};
  }
  
  tr:hover {
    background-color: ${(props) => props.theme.secondayBg};
  }

  .post-wrapper {
    border-bottom: 1px solid ${(props) => props.theme.secondayFont};
  }
  
  .comments {
    border-bottom: 1px solid ${(props) => props.theme.secondayFont};
  }  
`;
