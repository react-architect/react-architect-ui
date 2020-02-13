import * as React from 'react';


export const toFullScreen = (fullscreen?: Boolean, children?: React.ReactNode): React.ReactNode => React.Children.map(children, child => {
    /**
     * We need to check whether the child is a valid React-element, otherwise it can't be cloned
     */
    if (!React.isValidElement(child)) {
        return child
    }

    /**
     * We add our styling to the child provided by the user
     */
    return React.cloneElement(
        child,
        Object.assign({}, child.props, {
            style: Object.assign({}, child.props.style,

                /**
                 * Apply the fullscreen styling
                 */
                fullscreen ? {
                    display: "block",
                    height: "100%"
                } : {}
            )
        })
    );
});


// create empty context as default
const FullScreenContext = React.createContext({});


export interface IAttachFullScreen {

    fullscreen?: Boolean,

    /**
     * Wrap your React app into this component at a high level.
     */
    children: React.ReactNode
}

export const AttachFullScreen = (props: IAttachFullScreen) => {

    return <FullScreenContext.Provider
        value={{fullscreen: props.fullscreen}}>
            {props.children}
    </FullScreenContext.Provider>

};

export function withFullScreen(Component) {
    return function WrapperComponent(props) {
        return (
            <FullScreenContext.Consumer>
                {(context: any) => {
                    return <Component
                        {...props}
                        fullscreen={context.fullscreen}
                    />
                }}
            </FullScreenContext.Consumer>
        );
    };
}