import * as React from 'react';
import styled, { css, withTheme } from 'styled-components';


export const gradientBackground = css`
    background-image: linear-gradient(to right, ${props => props.theme.darkColor} , ${props => props.theme.lightColor});
`;



const WaveFrame = withTheme(styled.div`
    ${gradientBackground}
    position: relative;
    z-index: 0;
    min-height: 150px;
    
    ${props => {
        if (props.inverted) {
            return `background-color: ${props.theme.backgroundColor};
            background-image: none;
            `
        } else {
            return `color: #FFF; padding-bottom: 2em;`
        }
    }}
    
`);


const Wave = withTheme(styled.svg`
    position: absolute;
    z-index: -3;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: 100%;
    stroke: none;
    
    ${props => {
        if (props.inverted) {
            return `background-color: ${props.theme.altLightColor};`
               
        } else {
            return `background-color: ${props.theme.backgroundColor};`
            
        }
    }}
    
`);

interface IWaveBackgroundProps {
    children: any,
    theme: any
}



function WaveBackground (props: IWaveBackgroundProps) {

    return <WaveFrame >

        <Wave viewBox="0 0 500 65" preserveAspectRatio="xMinYMin meet">
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor={props.theme.darkColor}/>
                    <stop offset="100%" stopColor={props.theme.lightColor}/>
                </linearGradient>
            </defs>


            <path d="m0,60 C150,70 350,30 500,40 L500,00 L0,0 Z" fill={props.theme.altDarkColor}></path>
            <path d="m0,60 C150,70 350,20 500,30 L500,00 L0,0 Z" fill="url(#linear)" ></path>


        </Wave>
        {
            props.children
        }

    </WaveFrame>



}//inverted={true}


export const BottomWaveBackground = withTheme((props: IWaveBackgroundProps) => {

    return <WaveFrame inverted>

        <Wave viewBox="0 0 500 150" preserveAspectRatio="xMinYMin meet" inverted>
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor={props.theme.altDarkColor}/>
                    <stop offset="100%" stopColor={props.theme.altLightColor}/>
                </linearGradient>
            </defs>


            <path d="m0,20 C140,15 160,115 500,110 L500,00 L0,0 Z" fill={props.theme.altDarkColor} ></path>
            <path d="m0,10 C150,5 170,105 500,100 L500,00 L0,0 Z" fill={props.theme.backgroundColor} ></path>



        </Wave>
        {
            props.children
        }
    </WaveFrame>



});

export default withTheme(WaveBackground)