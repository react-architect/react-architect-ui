import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import {mount} from "enzyme";
import * as expect from "expect";
import styled, { css } from 'styled-components';

import { UserInterface } from '../UserInterface/UserInterface';
import {Navigation, NAVIGATION_POS} from "../Navigation/Navigation";
import { Scrollytale } from './Scrollytale';

import { Content, contentTheme, routes, gradientBackground} from "../../../test/TestData";

export const ScrolliControl = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: yellow;
    border: blue 5px solid;
`;

storiesOf('Scrollytale', module)

    .add('The first step', () => {

        const story = <UserInterface fullscreen theme={contentTheme}>
            <Navigation routes={routes} navBackground={gradientBackground}>
                <Scrollytale>
                    <Content>Hi</Content>
                </Scrollytale>
            </Navigation>
        </UserInterface>;

        specs(() => describe('render content', function () {
            it('should render its content', function () {
                const output = mount(story);
            });
        }));

        return story;
    })

;
