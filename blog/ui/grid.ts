import * as React from 'react';
import styled from 'styled-components';

import { media } from './responsive';

export const Grid =  styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  justify-content: space-around;
  
  
`;


export const ItemDesign = {
    highlight: "highlight",
    secondary: "secondary"
}

export interface IItemProps {
    design: string | undefined,
    error: boolean | undefined

}

export const Item: IItemProps =  styled.div`
   ${({ theme }) => media.desktop`
      width: calc(${props => Math.floor(100*props.desktop / 12)+"%"} - ${props => props.design ? "48px" : "0px"});
   `}
   
   ${({ theme }) => media.landscape`
      width: calc(${props => Math.floor(100*(props.landscape !== undefined ?  props.landscape: props.desktop) / 12)+"%"} - ${props => props.design ? "48px" : "0px"});
   `}
   
   ${({ theme }) => media.tablet`
      width: calc(${props => Math.floor(100*(props.tablet !== undefined ?  props.tablet: props.desktop) / 12)+"%"} - ${props => props.design ? "48px" : "0px"});
   `}
   
   ${({ theme }) => media.mobile`
      width: calc(${props => Math.floor(100*(props.mobile !== undefined ?  props.mobile: (props.tablet !== undefined ?  props.tablet: props.desktop)) / 12)+"%"} - ${props => props.design ? "48px" : "0px"});
   `}
   
   
   
    background: ${props => {
        if (props.design === ItemDesign.highlight) {
            return "#FFF";
        } else if (props.design === ItemDesign.secondary) {
            return props.theme.secondaryColor
        } else {
            return "#transparent";
        }
    
    }};
    
    border: ${props => props.error ? "3px solid red" : "none"};
  
  border-radius: ${props => props.design === ItemDesign.highlight ? "8px" : "0"};
  padding: ${props => props.design ? (props.error ? "5px" : "16px") : "0"};
  margin: ${props => props.design ? (props.error ? "5px" : "8px") : "0"};
  position: relative;
  overflow: hidden;
  
`;

export const NoMobileItem = styled(Item)`
    visibility: visible;
    height: auto;
    ${({ theme }) => media.mobile`
        visibility: hidden;
        height: 0px;
    `}   
`;

export default Grid;