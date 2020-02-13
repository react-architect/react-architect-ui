import React from 'react';
import styled from 'styled-components';
import { sizes, media } from './responsive';

export const Container = styled.div`
    position: relative;
    z-index: 1;
    
    flex-grow : 1;
    
    ${({ theme }) => media.desktop`
        width: ${sizes.desktop.container}px;
        margin: auto;
        padding: 1.8em;
    `}
   
    ${({ theme }) => media.landscape`
        max-width: ${sizes.tablet.container}px;
        padding: 0.3em;
        margin: 0 1.5em;
    `}
    
    ${({ theme }) => media.tablet`
        max-width: ${sizes.tablet.container}px;
        padding: 0.3em;
        margin: 0 1em;
    `}
   
    ${({ theme }) => media.mobile`
        max-width: ${sizes.mobile.container}px;
        padding: 0.2em;
        margin: 0 0.5em;
    `}   
   
    & p {
        padding: 0 0 0.1em 0;
        font-family: ${props => props.theme.textFont};
        font-size: 1.5em;
        line-height: 1.4em;
    }
  
    & ul,ol {
        padding: 0 0 0.1em 0;
        font-family: ${props => props.theme.textFont};
        font-size: 1.5em;
        line-height: 1.4em;
    }
  
    & ul,ol {
        margin-left: 1.5em;    
    }
  
    & ul > li {
        margin-bottom: 0.5em;
    }
    
`;

export default Container;
