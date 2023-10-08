import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components';
import { colors } from '../../infrastructure/theme/colors';

const ViewStyled = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export function LoadingIndicator() {
    return (
        <ViewStyled style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating={true} size={'large'} color={colors.text.error} />
        </ViewStyled>
    );
}
