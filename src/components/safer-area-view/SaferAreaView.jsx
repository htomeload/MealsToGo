import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const SafeAreaViewStyled = styled(SafeAreaView)`
    padding-top: ${Platform?.OS === 'android' ? StatusBar?.currentHeight : 0}px;
    background-color: ${(props) => props.theme?.colors?.bg?.primary};
`;

export default function SaferAreaView(props) {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <SafeAreaViewStyled style={props?.style}>
                {/* eslint-disable-next-line react/prop-types */}
                {props?.children}
            </SafeAreaViewStyled>
            {/* eslint-disable-next-line react/style-prop-object */}
            <ExpoStatusBar style="auto" />
        </>
    );
}
