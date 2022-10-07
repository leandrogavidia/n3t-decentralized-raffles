import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.white};
    }
`

export { Global };