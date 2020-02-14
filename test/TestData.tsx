
import * as React from 'react';
import styled, {css} from 'styled-components';

import {ITheme} from "../src/theme/index";
import { Navigation, NAVIGATION_POS} from "../src/components/Navigation/Navigation";

export const Content = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: yellow;
    border: blue 5px solid;
`;

export const contentTheme: ITheme = {
    navbarFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
    navbarFontSize: "20px",
    navbarFontColor: "white",
    navbarFontHover: "yellow"

};


export const routes = [
    {
        position: NAVIGATION_POS.LEFT,
        Component: <a href="">Left</a>
    }, {
        position: NAVIGATION_POS.RIGHT,
        Component: <div>Right</div>
    }, {
        position: NAVIGATION_POS.FOOTER,
        Component: <div>Footer</div>
    }
];

export const gradientBackground = css`
    background-image: linear-gradient(to right, blue , red);
`;
