import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

export const LoadFonts = styled.div`
    display: block;
    height: 100%;
    margin: 0px;
    @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
`;

export const theme = {
    textFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
    codeFont: "'Inconsolata',monospace",

    // the dark color of the style
    darkColor: "#375b91",

    // the light color of the style
    lightColor: "#53C3E1",

    // the dark color of the style
    altDarkColor: "#EBFDFC",

    // the light color of the style
    altLightColor: "#E6F4F1",

    backgroundColor: "#FFF",

    headlineFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
    lightHeadlineColor: "#FFF",
    darkHeadlineColor: "#000",

    navbarFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
    navbarFontSize: "1.2em",

    navbarTextColor: "white",
    navbarHoverColor: "#333",
};

export default function withStyledTheme(Component) {
    return function WrapperComponent(props) {
        return (
            <LoadFonts>
                <Component
                    {...props}
                    styledTheme={theme}
                />
            </LoadFonts>
        );
    };
};
