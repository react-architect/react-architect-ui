import React from 'react';
import styled, { css } from 'styled-components';


export const gradientBackground = css`
    background-image: linear-gradient(to right, ${props => props.theme.darkColor} , ${props => props.theme.lightColor});
`;
