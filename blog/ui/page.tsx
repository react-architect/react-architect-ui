import React from 'react'

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import withStyledTheme from "../style/styled-theme";
import { UserInterface } from "../ui/index";
import WithNavigation from '../ui/navigation';
import withReduxStore from "../store/reducer";
import AttachModal from '../ui/modal';
import Recommender from 'react-recommender';

interface IPageProps {
    reduxStore: any,
    styledTheme: any
};

export const Page = (props: IPageProps) => {

    return (
        <Provider store={ props.reduxStore }>
            <ThemeProvider theme={ props.styledTheme }>
                <Recommender
                    accountId="mail@react-architect.com"
                    serverUrl="https://2r0tzp6i4l.execute-api.eu-west-1.amazonaws.com/test/_api">

                    <UserInterface>
                        <AttachModal>
                            <WithNavigation>
                                {props.children}
                            </WithNavigation>
                        </AttachModal>
                    </UserInterface>
                </Recommender>
            </ThemeProvider>
        </Provider>
    );
};

export default withReduxStore(withStyledTheme(Page));