import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        primary: "#FFDB5F",
        secondary: "#1A1A1A",
        gradient: "linear-gradient(180deg, #FFB374 0%, #FFB848 48.96%, #FFDB5F 100%)",
        text: "#1A1A1A",

        white: "#fff",
        black: "#000",
    },
    font: {
        weight: {
            light: 300,
            semiBold: 600,
            bold: 900
        },
        size: {
            phone: {
                small: 1,
                medium: 1.4,
                large: 1.8
            },
            tablet: {
                small: 1.6,
                medium: 2,
                large: 2.4
            },
            desktop: {
                small: 1.8,
                medium: 2.4,
                large: 3.2
            }
        }
    }
}

export { theme };