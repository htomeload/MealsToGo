import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const sizesToIndex = {
    small: 1,
    medium: 2,
    large: 3,
};

const SpacerStyled = styled(View)`
    ${({ position, scale, theme }) =>
        `margin-${position}: ${theme?.space?.[sizesToIndex?.[scale]]}`}
`;

export default function Spacer({ position, scale, children }) {
    return (
        <SpacerStyled position={position} scale={scale}>
            {children}
        </SpacerStyled>
    );
}

Spacer.propTypes = {
    position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    scale: PropTypes.oneOf(['small', 'medium', 'large']),
};

Spacer.defaultProps = {
    position: 'top',
    scale: 'small',
};
