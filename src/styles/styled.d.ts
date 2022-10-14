import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string,
            gradient: string,
            text: string,

            white: string,
            black: string
        }
    }
}