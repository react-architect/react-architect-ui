import React, { useState } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModalFrame = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    pointer-events: auto;
    transition: all 0.3s;
    
    
    opacity: 0.5;
    z-index: 100;
    background: #000;
    
`;


export const ModalContent = styled.div`
    z-index: 101;
    border: 2px solid black;
    border-radius: 8px;
    width: 75%;
    max-width: 800px;
    position: fixed;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    background: #FFF;
    
    & p {
        padding: 0 0 0.1em 0;
        font-family: ${props => props.theme.textFont};
        font-size: 1.5em;
        line-height: 1.4em;
    }
`;


export const ModalHeader = styled.h2`
    padding: 0;
    margin: 20px 0;
    font-family: ${props => props.theme.headlineFont};
    color: #000;
    font-size: 2.5em;
    font-weight: bold;
    line-height: 1.1em;
    color:  ${props => props.theme.headlineColor};
    display : inline-block;
    width: 100%;
    text-align: center;
`;


export const Option = styled.button`
    position: relative;
    width: calc(100% - 0.4em);
    height: auto;
    margin: 0.5em 0.2em;
    
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.1em;
    color: ${props=> props.disabled ? "#000" :  props.theme.mainColor };
    
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color:  ${props=> props.changed ? "#606" : "#000" };

    padding: 8px;
    background-color: ${props=> props.disabled ? "#dddddd" : "#FFF" };
    
    cursor: auto;
    
    &:hover {
        cursor: ${props=> props.disabled ? "auto" : "pointer"};
        background-color: ${props=> props.disabled ? "#dddddd" :  props.theme.mainColor };
        color: #FFF;
    }
    
`;

export const OptionIcon = styled(FontAwesomeIcon)`
    
    margin: 0 auto 0.2em auto;
    display: block;
    
`;


// create empty context as default
const ModalContext = React.createContext({});


/**
 * This HOC attaches the auth-callback to a webapp, may be undefined!
 */
const AttachModal = (props) => {

    const [ModalComponent, setModalComponent] = useState(undefined);

    const WrapperComponent = (props) => {
        return <>
            <ModalFrame onClick={()=>setModalComponent(undefined)}/>
            <ModalComponent {...props}/>
        </>
    };

    return <ModalContext.Provider
        value={{
            setModal: (props) => setModalComponent(()=> (props))
        }}>
        {props.children}
        { ModalComponent !== undefined && <WrapperComponent {...props}/> }
    </ModalContext.Provider>

};

export function withModal(Component) {
    return function WrapperComponent(props) {
        return (
            <ModalContext.Consumer>
                {(context: any) => {

                    return <Component
                        {...props}
                        setModal={context.setModal}
                    />
                }}
            </ModalContext.Consumer>
        );
    };
}

export default AttachModal;