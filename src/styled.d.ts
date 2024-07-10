import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    blue: string;
    skyblue: string;
    black: {
      veryBlack: string;
      darker: string;
      lighter: string;
    };
    white: {
      lighter: string;
      darker: string;
    };

    background: string;
    text: string;
    textHover: string;
    button: string;
    buttonHover: string;
  }
}