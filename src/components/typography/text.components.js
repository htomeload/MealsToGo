import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import styled from 'styled-components';

const textCenter = `text-align: center;`;

const defaultTextStyles = (theme, center = false) => `
    font-family: ${theme?.fonts?.body};
    font-weight: ${theme?.fontWeights?.regular};
    color: ${theme?.colors?.text?.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
    ${center ? textCenter : ''}
`;

const body = (theme) => `
    font-size: ${theme?.fontSizes?.body};
`;

const hint = (theme) => `
    font-size: ${theme?.fontSizes?.body};
`;

const error = (theme) => `
    color: ${theme?.colors?.text?.error};
`;

const caption = (theme) => `
    font-size: ${theme?.fontSizes?.caption};
    font-weight: ${theme?.fontWeights?.bold};
`;

const label = (theme) => `
    font-family: ${theme?.fonts?.heading};
    font-size: ${theme?.fontSizes?.body};
    font-weight: ${theme?.fontWeights?.medium};
`;

const title = (theme) => `
    font-size: ${theme?.fontSizes?.title};
    font-weight: ${theme?.fontWeights?.bold};
`;

const variants = {
    body,
    hint,
    error,
    caption,
    label,
    title,
};

const TextStyled = styled(ReactNativeText)`
    ${({ theme }) => defaultTextStyles(theme)}
    ${({ variant, theme }) => variants?.[variant](theme)}
    ${({ variant, center, theme }) => variants?.[variant](theme, center)}
`;

export default function Text({
    variant = 'body',
    center = false,
    numberOfLines = 1,
    style = {},
    children,
}) {
    return (
        <TextStyled variant={variant} center={center} numberOfLines={numberOfLines} style={style}>
            {children}
        </TextStyled>
    );
}
