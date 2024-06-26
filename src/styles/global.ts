import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6;

        a {
            text-decoration: none;
            color: ${(props) => props.theme['base-text']};
            font-size: ${(props) => props.theme.fontSize['text-m']};
        }
    }
`;
