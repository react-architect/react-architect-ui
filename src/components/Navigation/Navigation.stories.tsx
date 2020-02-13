import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import {mount} from "enzyme";
import * as expect from "expect";
import styled from 'styled-components';

import { UserInterface } from '../UserInterface/UserInterface';
import {Navigation, NAVIGATION_POS} from "./Navigation";

const content = 'Hello World';

const Content = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: yellow;
    border: blue 5px solid;
    
`;

const contentTheme = {};

storiesOf('Navigation', module)

    .add('A small fullscreen UI with navigation-bar and footer', () => {

        const story = <UserInterface fullscreen theme={contentTheme}>
            <Navigation routes={[
                {
                    position: NAVIGATION_POS.LEFT,
                    Component: <div>Left</div>
                }, {
                    position: NAVIGATION_POS.RIGHT,
                    Component: <div>Right</div>
                }, {
                    position: NAVIGATION_POS.FOOTER,
                    Component: <div>Footer</div>
                }
            ]}>
                <Content>{content}</Content>
            </Navigation>
        </UserInterface>;

        specs(() => describe('render content', function () {
            it('should render its content', function () {
                const output = mount(story);
                //console.log(output)
                expect(output.text()).toContain(content);
            });
        }));

        return story;
    })

    .add('A big fullscreen UI with navigation-bar and footer', () => {

        const story = <UserInterface fullscreen theme={contentTheme}>
            <Navigation routes={[
                {
                    position: NAVIGATION_POS.LEFT,
                    Component: <div>Left</div>
                }, {
                    position: NAVIGATION_POS.RIGHT,
                    Component: <div>Right</div>
                }, {
                    position: NAVIGATION_POS.FOOTER,
                    Component: <div>Footer</div>
                }
            ]}>
                <Content  style={{height: "2000px"}}>{content}</Content>
            </Navigation>
        </UserInterface>;

        specs(() => describe('render content', function () {
            it('should render its content', function () {
                const output = mount(story);
                //console.log(output)
                expect(output.text()).toContain(content);
            });
        }));

        return story;
    })

;
