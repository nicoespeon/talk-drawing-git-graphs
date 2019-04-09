import { swiss } from "mdx-deck/themes";

export const theme = {
  ...swiss,
  monospace: "Menlo, monospace",
  font: '"Annie Use Your Telescope", cursive',
  googleFont:
    "https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope",
  colors: {
    text: "#000",
    background: "white",
    link: "#07c",
    pre: "#f0f",
    preBackground: "white",
    code: "#f0f"
  },
  css: {
    fontSize: "1.5em",
    textAlign: "center",
    "@media screen and (min-width:56em)": {
      fontSize: "32px"
    },
    "@media screen and (min-width:64em)": {
      fontSize: "2.5em"
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    },
    svg: {
      fontSize: "16px",
      textAlign: "left",
      display: "block",
      marginLeft: 65
    }
  },
  pre: {
    textAlign: "left"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  },
  transitionDuration: 0
};
