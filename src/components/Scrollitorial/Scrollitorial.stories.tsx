import * as React from "react"
import { storiesOf } from "@storybook/react"
import { specs, describe, it } from "storybook-addon-specifications"
import { mount } from "enzyme"
import * as expect from "expect"
import Scrollitorial from './Scrollitorial';

import styled from "styled-components"



storiesOf("Scrollitorial", module)

  /**
   * The Scrollitorial should consist of different sections that take the whole visible area each
   * see: https://codepen.io/GreenSock/pen/KKpLdWW
   */
  .add("Pinned layers", () => {
    const story = (
      <Scrollitorial></Scrollitorial>
    );

    specs(() =>
      describe("show a few layers", function () {
        it("should show a few layers", function () {
          const output = mount(story)


          expect(false)
        })
      })
    );

    return story
  });
