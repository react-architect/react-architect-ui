import React from 'react'

import styled from 'styled-components'

/*
import rect from '../../assets/rect.png';
export const Wrap = styled.div`
    display: inline;
    
    & > img {

        color: ${props => props.theme.navbarTextColor};
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
         
        &:hover {
            text-decoration: underline;
            color: black;
        }
        
    }
    
`;


const LeftItem = styled.img`
    position: relative;
    float: left;
    display:inline-block;
`;




export const Button = styled.button`
  background-color: transparent
  background-image: url(../../assets/rect.svg)
  background-size: 100% 100%
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
`;
*/

interface IButton {
    primaryColor: string | undefined,
    secondaryColor: string | undefined,
    positive: boolean | undefined,
    disabled: boolean | undefined
}

const Button = styled.button`
    border-radius: 8px;
    font-size: 1em;
    font-family: ${props => props.theme.buttonFont};
    border: 2px solid ${props => props.primaryColor ? props.primaryColor : (props.positive ? "none" : props.theme.mainColor)};
    color: ${props => props.primaryColor ? props.primaryColor : (props.positive ? "#fff" : props.theme.mainColor)};
    background: ${props => props.disabled ? "#CCC" :(props.buttonColor ? props.buttonColor : (props.positive ? "#0A0" : "transparent"))};
    overflow: hidden;
    padding: 0.3em;
    margin: 0.05em 0.1em;
    outline:none;
    font-weight: regular;
    
    cursor: auto;
    
    
    &:hover {
        cursor: ${props=> props.disabled ? "auto" : "pointer"};
        color: ${props => props.primaryColor ? props.primaryColor : "#FFF"};
        background: ${props => props.disabled ? "#CCC" : (props.positive ? "#080" : props.secondaryColor)};
    }
`;




export default Button;

