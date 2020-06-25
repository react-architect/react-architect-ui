/**
 * TypeScript support requires us to import React this way!
 * And not `import React from 'react';`
 */
import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { ITheme } from "../../theme"

import { TopWaveBackground } from "./Background"
import { toFullScreen, AttachFullScreen } from "./fullscreen"

interface IUserInterfaceProps {
  /**
   * The UI design theme customizes the look and feel
   */
  theme: ITheme;

  /**
   * set to `true` to let the content take the whole window
   */
  fullscreen?: boolean;

  /**
   * set to `true` to show a gradient background
   */
  background?: boolean;

  /**
   * The user's app
   */
  children?: React.ReactNode;
}

/**
 * A top-level component to apply the UI design to the app
 *
 */
export function UserInterface(props: IUserInterfaceProps): any {
  /**
   * Render the children of the user interface
   */
  const children = toFullScreen(props.fullscreen, props.children)

  const BackgroundFrame = styled.div`
    ${props.fullscreen
      ? `
            display: block;
            height: 100%;
        `
      : ""}
  `

  return (
    <ThemeProvider theme={props.theme}>
      <AttachFullScreen fullscreen={props.fullscreen}>
        {props.background ? (
          <BackgroundFrame>
            <TopWaveBackground></TopWaveBackground>
            {children}
          </BackgroundFrame>
        ) : (
          children
        )}
      </AttachFullScreen>
    </ThemeProvider>
  )
}
