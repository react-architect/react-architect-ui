import * as React from "react"
import { storiesOf } from "@storybook/react"
import { specs, describe, it } from "storybook-addon-specifications"
import { mount } from "enzyme"
import * as expect from "expect"
import styled from "styled-components"

import { UserInterface } from "./UserInterface"
import { ITheme } from "../../theme/index"

const content = "Hello World"

const Content = styled.div`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: yellow;
  border: blue 5px solid;
`

const contentTheme: ITheme = {
  navbarFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
  navbarFontSize: "20px",
  navbarFontColor: "white",
  navbarFontHover: "yellow",
}

storiesOf("UserInterface", module)
  .add("A basic UI", () => {
    const story = (
      <UserInterface theme={contentTheme}>
        <Content>{content}</Content>
      </UserInterface>
    )

    specs(() =>
      describe("render content", function () {
        it("should render its content", function () {
          const output = mount(story)

          expect(output.text()).toContain(content)
          const x = 1
          expect(x == 2)
        })
      })
    )

    return story
  })

  .add("A fullscreen UI", () => {
    let contentDiv: any = undefined
    const story = (
      <UserInterface fullscreen theme={contentTheme}>
        <Content
          ref={(self) => {
            contentDiv = self
          }}
        >
          {content}
        </Content>
      </UserInterface>
    )

    specs(() =>
      describe("render content in fullscreen", function () {
        it("should fill the full screen", function () {
          const output = mount(story)
          //console.log(contentDiv.getBoundingClientRect())
          expect(output.text()).toContain(content)
        })
      })
    )

    return story
  })

/*
    .add('A UI with background', () => {

        const story = <UserInterface fullscreen background theme={contentTheme}>
            <Content>{content}</Content>
        </UserInterface>;

        specs(() => describe('Background Gradient', function () {
            it('should show a gradient background', function () {
                const output = mount(story);
                //console.log(contentDiv.getBoundingClientRect())
                expect(output.text()).toContain(content);
            });
        }));

        return story;
    })
*/
