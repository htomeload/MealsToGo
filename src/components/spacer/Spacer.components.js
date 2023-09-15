import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const TopSmall = styled(View)`
    height: ${(props) => props.theme?.space?.[1]};
`;

const TopMedium = styled(View)`
    height: ${(props) => props.theme?.space?.[2]};
`;

const TopLarge = styled(View)`
    height: ${(props) => props.theme?.space?.[3]};
`;

const LeftSmall = styled(View)`
    width: ${(props) => props.theme?.space?.[1]};
`;

const LeftMedium = styled(View)`
    width: ${(props) => props.theme?.space?.[2]};
`;

const LeftLarge = styled(View)`
    width: ${(props) => props.theme?.space?.[3]};
`;

export default function Spacer({ variant }) {
    switch (variant) {
        case 'top.small':
            return <TopSmall />;
        case 'top.medium':
            return <TopMedium />;
        case 'top.large':
            return <TopLarge />;
        case 'left.small':
            return <LeftSmall />;
        case 'left.medium':
            return <LeftMedium />;
        case 'left.large':
            return <LeftLarge />;
        default:
            return <LeftLarge />;
    }
}
