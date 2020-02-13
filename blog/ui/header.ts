import * as React from 'react';

import styled from 'styled-components';
import { media } from './responsive';


export const Header1 = styled.h1`
    padding: 0em;
    margin: 1em 0 0.1em 0;
    font-family: ${props => props.theme.headlineFont};
    color: ${props => props.light ? props.theme.lightHeadlineColor : props.theme.darkHeadlineColor};
    font-size: 3.5em;
    line-height: 1.1em;
    display : block;
`;

export const PreHeader = styled.div`
    ${({ theme }) => media.desktop`
        font-size: 2em;
        margin: 0 3em;
    `}
   
   ${({ theme }) => media.landscape`
        font-size: 1.7em;
        margin: 0 1em;
    `}
    
    ${({ theme }) => media.tablet`
        font-size: 1.7em;
        margin: 0 1em;
    `}
   
    ${({ theme }) => media.mobile`
        font-size: 1.5em;
        margin: 0 0.5em;
    `}

    padding: 0;
    font-family: ${props => props.theme.headlineFont};
    display : block;
    font-weight: bold;
`;

export const Title = styled(Header1)`


    ${({ theme }) => media.desktop`
        font-size: 3.6em;
        
    `}
    
    ${({ theme }) => media.landscape`
        font-size: 2.8em;
        
    `}
   
    ${({ theme }) => media.tablet`
        font-size: 2.8em;
        
    `}
   
    ${({ theme }) => media.mobile`
        font-size: 2em;
        
    `}
    
    margin: 1em 0 0.2em 0;
    
    text-align: center;
    
`;

export const Header2 = styled.h2`
    padding: 0;
    margin: 0.2em 0 0.2em 0;
    font-family: ${props => props.theme.headlineFont};
    color: #000;
    font-size: 2.5em;
    font-weight: bold;
    line-height: 1.1em;
    display : inline-block;
`;


export const SectionHeader2 = styled.h2`
    padding: 0;
    margin: 0.5em 0 0.1em 0;
    font-family: ${props => props.theme.headlineFont};
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.1em;
    display : inline-block;
`;



export const SubHeader = styled.div`
    padding: 0;
    margin: 40px 0;
    font-family: ${props => props.theme.headlineFont};
    font-size: 2.1em;
    
    ${({ theme }) => media.mobile`
        font-size: 1.8em;
        
    `}
    
    line-height: 1.1em;
    display : block;
    
`;
