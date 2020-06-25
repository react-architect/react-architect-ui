import * as React from "react"
import { css } from "styled-components"

export const sizes = {
  desktop: {
    min: 1280,
    max: undefined,
    container: 1280,
  },
  landscape: {
    min: 960,
    max: 1280,
    container: undefined,
  },
  tablet: {
    min: 640,
    max: 960,
    container: undefined,
  },
  mobile: {
    min: undefined,
    max: 640,
    container: undefined,
  },
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (args) => css`
        @media only screen
        ${
          sizes[label].max !== undefined
            ? "and (max-width: " + sizes[label].max + "px)"
            : ""
        }
        ${
          sizes[label].min !== undefined
            ? "and (min-width: " + sizes[label].min + "px)"
            : ""
        } {
            ${css(args)};
        }
    `
  return acc
}, {})
