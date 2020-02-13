import React, {useState} from 'react';
import styled, { withTheme, css } from 'styled-components';
import { IRoute, withRoutes, withUser, userLogout } from 'infrastructure-components';
import { Link, withRouter } from 'react-router-dom';
import { gradientBackground } from './background';
import { media } from './responsive';
import Grid, { Item, ItemDesign } from '../ui/grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


/** fixed height of the navbar*/
const navBarHeight = "calc(1.2em + 20px)";

import { ModalContent, ModalHeader, Option, OptionIcon} from '../ui/modal';

/**
 * A styled navigation bar.
 */
export const NavBar = withTheme(styled.div`   
    ${gradientBackground};
      
    /** fixes the navbar to the top */
    position: fixed;
    top:0;
    
    /** let the navbar take the whole width and do not scroll horizontally */
    display: block;
    overflow: hidden;
    width:100%;
    
    /** sets a fixed height that we can use when styling the content */
    height: ${navBarHeight};
    
    /** make sure the navbar is in front of the content*/
    z-index: 5;
    
    //background-color: #888;
    border-bottom: 1px solid white;
    
    font-family: ${props => props.theme.navbarFont};
    font-size: ${props => props.theme.navbarFontSize};
    
    ${({ theme, expanded }) => expanded !== "true" ? "" : media.mobile`
        background-color: #888;
        height: auto;
        display: flex;
        flex-direction: column;
    `}   
`);

export const Footer = styled.div`
    ${gradientBackground};
    
    bottom: ${navBarHeight};
    position: fixed;
    background-color: ${props => props.background};
    overflow: hidden;
    font-family: ${props => props.theme.navbarFont};
    font-size: ${props => props.theme.navbarFontSize};
    display: block;
    text-align: center;
    width: 100%;
    height: ${navBarHeight};
    padding: 0;
    
    left: 0;
    bottom: 0;
    
    border-top: 1px solid white;
    
    z-index: 20;
    
`;

export interface ILink {
    left: string | undefined,
    active: boolean | undefined,
    expanded: boolean | undefined
}

const positioned = css`
    position: relative;
    float: ${props => props.left === "true" ? "left" : props.footer ? "center" : "right"};
    display: inline-block;
    
    color: ${props => props.theme.navbarTextColor};
    text-align: center;
    padding: 10px 12px;
    padding-bottom: ${navBarHeight};
    text-decoration: none;
    cursor: default;
     
    &:hover {
        text-decoration: none;
        color: ${props => props.theme.navbarHoverColor};
        cursor: pointer;
    }
    
     height: calc(100% - ${navBarHeight});
     
     ${({ theme, left, footer }) => footer ===  "true" ? "" : media.mobile`
        display: ${({expanded})=> expanded === "true" ? "block" : "none"};
        border-top: 1px solid white;
        padding-bottom: 10px;
    `}   
 `;

const Expand = styled(FontAwesomeIcon)`
    position: relative;
    float: right;
    display: none;
    color: ${props => props.theme.navbarTextColor};
    
    &:hover {
        text-decoration: none;
        color: ${props => props.theme.navbarHoverColor};
        cursor: pointer;
    }
    
    align-self: flex-end;
    
    padding: 4px;
    
    ${media.mobile`
        display: block;
    `}
`;

const PositionedLink: ILink = styled(Link)`
    ${positioned};
`;

const MenuButton = styled.div`
    ${positioned};
`;

/*${props => props.active === "true" ? `
 color: #333;
 ` : ""} */

/**
 * The styled content
 */
export const Content = styled.div`
    position: absolute;
    /** leave some space at the top for the navbar */
    margin: 0;
    top: ${navBarHeight};
    padding-bottom: ${navBarHeight};
    
    min-height: calc(100% - 2* ${navBarHeight});
    width: 100%;
    min-width:320px;
    
    /** put the content behind the navbar (smaller z-index)*/
    z-index: 0;
    
    display: flex;
    flex-flow: column;
`;


const Wrapper = styled.div`
    min-height: 100%;
    margin-bottom: -${navBarHeight};
`;

interface IWithNavigationProps {
    /** attached through withRoutes: a list of all the specified <Route /> components in our app */
    routes: Array<IRoute>,

    /**  attached through withRouter */
    location: any,

    /** any children that we get passed from the parent component*/
    children: any,

    userId: string | undefined, // attached through withUser
}


/**
 * A functional React component as a wrapper for a page with navigation.
 * Renders the page's navbar and content
 */
function WithNavigation (props: IWithNavigationProps) {

    const [expanded, setExpanded] = useState(false);

    return <Wrapper>
        <NavBar expanded={expanded ? "true" : "false"}>

            <Expand icon={faBars} size="2x" onClick={()=>setExpanded(!expanded)}/>
            {
                props.userId && <MenuButton  expanded={expanded ? "true" : "false"} left="false" active="false" onClick={() => userLogout("/")}>
                    Logout
                </MenuButton>
            }

            {
                /** take all the routes of the app ... */
                props.routes.filter(route => !route.customType || (
                        !route.customType.footer &&
                        (!route.customType.login || !props.userId) &&
                        (!route.isSecured || props.userId) &&
                        (!route.customType.hidden)
                )).map((route, i) => (
                    /**
                     * ... and transform them into a Link to the respective path,
                     * each item in the React-dom requires a unique key
                     */
                    <PositionedLink
                        key={'ROUTE_'+i}
                        to={ route.path }
                        left={route.customType && route.customType.left ? "true" : "false"}
                        active={props.location.pathname === route.path ? "true" : "false"}
                        expanded={expanded ? "true" : "false"}
                    >
                        {
                            /** display the name of the <Route /> component*/
                            route.name
                        }
                    </PositionedLink>
                ))
            }




        </NavBar>

        <Content>
            {
                /** show as content whatever we provide */
                props.children
            }
        </Content>
        <Footer>
            {
                /** take all the routes of the app ... */
                props.routes.filter(route => route.customType && route.customType.footer).map((route, i) => (
                    /**
                     * ... and transform them into a Link to the respective path,
                     * each item in the React-dom requires a unique key
                     */
                    <PositionedLink
                        key={'ROUTE_'+i}
                        to={ route.path }
                        active={props.location.pathname === route.path ? "true" : "false"}
                        footer="true"
                    >
                        {
                            /** display the name of the <Route /> component*/
                            route.name
                        }
                    </PositionedLink>
                ))
            }
        </Footer>
    </Wrapper>;
}

export default withUser(withRouter(withRoutes(WithNavigation)));