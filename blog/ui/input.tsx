import React from 'react'

import styled from 'styled-components'



const InputFrame = styled.span`
    width: ${props => props.width};
    position: relative;
    padding: 10px;
    
    display:inline-table;
    border:2px solid ${props => props.theme.mainColor};
    border-radius: 8px;;
  
    margin: 12px 4px;
`;


const Main = styled.input`
    
    display:table-cell;
    border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid ${props => props.theme.mainColor};
   width: calc(100% - 16px);
   
  margin: 8px 8px 0px 8px;
  
  font-family: ${props => props.theme.headlineFont};
    color: ${props => !props.error ? "#000" : "#F00"};
    font-size: 1.2em;
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.headlineColor};
      opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.headlineColor};
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.headlineColor};
    }
`;

const Message = styled.div`
    color: red;
    font-weight: bold;
    padding: 10px;
    font-family: ${props => props.theme.navbarFont};
`;

const Label = styled.label`
    font-family: ${props => props.theme.headlineFont};
    position:absolute;
    top:-8px;
    left:16px;
    background-color: ${props => props.theme.altLightColor};
    padding: 0 3px;
    display:table-cell;
`


const Meta = styled.div`
    padding: 10px;
    padding-bottom: 0;
    width: calc(100% - 20px);
    font-family: ${props => props.theme.navbarFont};
`;

interface IInputProps {
    label: string,
    color: string,
    width: string,
    message: string,
    meta: any
}



export default function Input (props: IInputProps) {
    return <InputFrame color={props.color} width={props.width}>
        <Label>{props.label}</Label>
        { props.meta && <Meta>{props.meta}</Meta>}
        <Main {...props} />
        {
            props.message && props.message.length > 0 && <Message>{props.message}</Message>
        }
    </InputFrame>
};