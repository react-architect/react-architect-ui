import * as React from "react"
import { ITheme } from "../../theme"
import styled, { css, withTheme } from "styled-components"
import { media } from "../UserInterface/responsive"
import { toFullScreen, withFullScreen } from "../UserInterface/fullscreen"

import Style from "style-it"

/** fixed height of the navbar, depends on fontSize */
const navBarHeight = (fontSize) => `calc(1.8 * ${fontSize})`;
const navBarVPadding = (fontSize) => `calc(0.3 * ${fontSize})`;

export const NAVIGATION_POS = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  FOOTER: "FOOTER",
}

export interface IRoute {
  position: string;
  Component: React.ReactNode;
}

const Wrapper = styled.div`
  min-height: 100%;
  margin-bottom: -${navBarHeight};
`;

interface INavigationElementProps {
  navBackground?: any;
  theme: ITheme;
}

const navigationCommons = css<INavigationElementProps>`
  font-family: ${(props) => props.theme.navbarFont};
  font-size: ${(props) => props.theme.navbarFontSize};
  ${(props) => (props.navBackground ? props.navBackground : "")};
`

/**
 * A styled navigation bar.
 */
export const NavBar = styled.div<INavigationElementProps>`
  ${navigationCommons};

  /** fixes the navbar to the top */
  position: fixed;
  top: 0;

  /** let the navbar take the whole width and do not scroll horizontally */
  display: block;
  overflow: hidden;
  width: 100%;

  /** sets a fixed height that we can use when styling the content */
  height: ${(props) => navBarHeight(props.theme.navbarFontSize)};

  /** make sure the navbar is in front of the content*/
  z-index: 5;

  border-bottom: 1px solid white;

  ${/*({ theme, expanded }) => expanded !== "true" ? "" : media.mobile`
        background-color: #888;
        height: auto;
        display: flex;
        flex-direction: column;
    `*/ ""}
`

export const Footer = styled.div<INavigationElementProps>`
  ${navigationCommons};

  bottom: ${(props) => navBarHeight(props.theme.navbarFontSize)};
  position: fixed;

  overflow: hidden;
  display: block;
  text-align: center;
  width: 100%;
  height: ${(props) => navBarHeight(props.theme.navbarFontSize)};
  padding: 0;

  left: 0;
  bottom: 0;

  border-top: 1px solid white;

  z-index: 20;
`

/**
 * The styled content
 */
export const Content = styled.div`
  position: absolute;
  /** leave some space at the top for the navbar */
  margin: 0;
  top: ${(props) => navBarHeight(props.theme.navbarFontSize)};
  padding-bottom: ${(props) => navBarHeight(props.theme.navbarFontSize)};

  min-height: calc(
    100% - 2 * ${(props) => navBarHeight(props.theme.navbarFontSize)}
  );
  width: 100%;
  min-width: 320px;

  /** put the content behind the navbar (smaller z-index)*/
  z-index: 0;

  display: flex;
  flex-flow: column;
`;

interface INavigationProps {
  /** attached through withRoutes: a list of all the specified <Route /> components in our app */
  routes: Array<IRoute>;

  /**
   * The user's app
   */
  children?: React.ReactNode;

  /**
   * added by withFullScreen
   */
  fullscreen?: boolean;

  /**
   * The background of the navigation-elements as styled.css`...`
   */
  navBackground?: any;

  /**
   * added by withTheme
   */
  theme: ITheme;
}

const toNavBarElements = (routes, fFilter, theme) => {
  const navClass = "nav-bar-top-class"
  /**
   * Styling the elements of the Nav-bar without adding another layer
   *
   */
  const NavBarElement = (component, idx, position) =>
    Style.it(
      `
        .${navClass} {
            text-decoration: none;
            text-align: center;
            height: 100%;
            cursor: default;
            display: inline-block;
            padding: ${navBarVPadding(theme.navbarFontSize)} 15px;
            color: ${theme.navbarFontColor};
            float: ${
              position === NAVIGATION_POS.LEFT
                ? "left"
                : position === NAVIGATION_POS.RIGHT
                ? "right"
                : "center"
            };
        }
    
        .${navClass}:hover {
            cursor: pointer;
            color: ${theme.navbarFontHover};
        }`,

      React.cloneElement(
        component,
        Object.assign(
          {
            className: navClass,
            style: component.props.style,
          },
          component.props
        )
      )
    )

  /**
   * Filter the items to appear in the top navigation bar
   */
  return (
    <>
      {routes
        .filter(fFilter)
        .map((route, i) => {
          /**
           * We need to check whether the child is a valid React-element, otherwise it can't be cloned
           */
          if (!React.isValidElement(route.Component)) {
            return route.Component
          }

          /**
           * We add our styling to the child provided by the user
           */
          return NavBarElement(route.Component, i, route.position)
        })
        // here we need to provide the key to the object created by Style.it
        .map((e, i) =>
          React.cloneElement(e, Object.assign({}, e.props, { key: `pos_${i}` }))
        )}
    </>
  )
}

export const Navigation = withTheme(
  withFullScreen(function (props: INavigationProps) {
    //console.log(props.fullscreen);
    //const [expanded, setExpanded] = React.useState(false);

    return (
      <Wrapper>
        <NavBar navBackground={props.navBackground}>
          {toNavBarElements(
            props.routes,
            (route) =>
              route.position === NAVIGATION_POS.LEFT ||
              route.position === NAVIGATION_POS.RIGHT,
            props.theme
          )}
        </NavBar>
        <Content>
          {
            /** show as content whatever we provide */
            props.children
          }
        </Content>
        <Footer navBackground={props.navBackground}>
          {toNavBarElements(
            props.routes,
            (route) => route.position === NAVIGATION_POS.FOOTER,
            props.theme
          )}
        </Footer>
      </Wrapper>
    )
  })
)
