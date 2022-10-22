import { createGlobalStyle } from "styled-components";
import rubikRegularWoff2 from "@assets/fonts/rubik-v21-latin-regular.woff2";
import rubikRegularWoff from "@assets/fonts/rubik-v21-latin-regular.woff";
import rubik600Woff2 from "@assets/fonts/rubik-v21-latin-600.woff2";
import rubik600Woff from "@assets/fonts/rubik-v21-latin-600.woff";
import rubik900Woff2 from "@assets/fonts/rubik-v21-latin-900.woff2";
import rubik900Woff from "@assets/fonts/rubik-v21-latin-900.woff";

const Global = createGlobalStyle`
    @font-face {
        font-family: "Rubik";
        src:
            url(${rubikRegularWoff2}) format("woff2"),
            url(${rubikRegularWoff}) format("woff");
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "Rubik";
        src:
            url(${rubik600Woff2}) format("woff2"),
            url(${rubik600Woff}) format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Rubik";
        src:
            url(${rubik900Woff2}) format("woff2"),
            url(${rubik900Woff}) format("woff");
        font-weight: 900;
        font-style: normal;
    }

    html {
        font-size: 62.5%;
    }

    :focus-visible {
        outline: 0.1rem ${({ theme }) => theme.colors.primary} solid;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.colors.primary} rgba(0, 0, 0, 0);
    }
    
    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 0.4rem;
    }
    
    *::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 2rem;
        border: none;
    }
    
    body {
        font-family: Rubik, sans-serif;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: 0.02rem;
    }
`

export { Global };