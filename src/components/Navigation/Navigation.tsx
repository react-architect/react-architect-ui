import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { ITheme } from '../../theme';
import { media } from '../UserInterface/responsive';
import { toFullScreen, withFullScreen } from '../UserInterface/fullscreen';

/** fixed height of the navbar*/
const navBarHeight = "calc(1.2em + 20px)";

export const  NAVIGATION_POS = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    FOOTER: "FOOTER"
};


export interface IRoute {
    position: string,
    Component: React.ReactNode
}


const Wrapper = styled.div`
    min-height: 100%;
    margin-bottom: -${navBarHeight};
    
`;


/**
 * A styled navigation bar.
 */
export const NavBar = withTheme(styled.div`   
    
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
    
    ${/*({ theme, expanded }) => expanded !== "true" ? "" : media.mobile`
        background-color: #888;
        height: auto;
        display: flex;
        flex-direction: column;
    `*/""}   
`);


export const Footer = styled.div`
    
    bottom: ${navBarHeight};
    position: fixed;
    
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


/**
 * The styled content
 *
 * TODO: fullscreen?!
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
    background: green;
`;


interface INavigationProps {
    /** attached through withRoutes: a list of all the specified <Route /> components in our app */
    routes: Array<IRoute>,

    /**
     * The user's app
     */
    children?: React.ReactNode,

    /**
     * added by withFullScreen
     */
    fullscreen?: Boolean
}


export const Navigation = withFullScreen(function (props: INavigationProps) {

    console.log(props.fullscreen);
    const [expanded, setExpanded] = React.useState(false);

    return <Wrapper>
        <NavBar>
            {
                /**
                 * Filter the items to appear in the top navigation bar
                 */
                props.routes.filter(route => (
                    route.position === NAVIGATION_POS.LEFT ||
                    route.position === NAVIGATION_POS.RIGHT)
                ).map((route, i) => {

                    /**
                     * We need to check whether the child is a valid React-element, otherwise it can't be cloned
                     */
                    if (!React.isValidElement(route.Component)) {
                        return route.Component
                    }

                    /**
                     * We add our styling to the child provided by the user
                     */
                    return React.cloneElement(
                        route.Component,
                        Object.assign({
                            key: `NAV_${i}`
                        }, route.Component.props, {
                            style: Object.assign({}, route.Component.props.style)
                        })
                    );
                })
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
                /**
                 * Filter the items to appear in the top navigation bar
                 */
                props.routes.filter(route => (
                    route.position === NAVIGATION_POS.FOOTER)
                ).map((route, i) => {

                    /**
                     * We need to check whether the child is a valid React-element, otherwise it can't be cloned
                     */
                    if (!React.isValidElement(route.Component)) {
                        return route.Component
                    }

                    /**
                     * We add our styling to the child provided by the user
                     */
                    return React.cloneElement(
                        route.Component,
                        Object.assign({
                            key: `FOOTER_${i}`
                        }, route.Component.props, {
                            style: Object.assign({}, route.Component.props.style)
                        })
                    );
                })
            }
        </Footer>

    </Wrapper>;
});