import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            gradient: string,
            text: string,

            white: string,
            black: string
        }
    }
}