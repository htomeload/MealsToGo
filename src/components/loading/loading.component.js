import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';
import { View } from 'react-native';

export default function Loading({
    loadingIconSize = 'medium',
    loadingIconColor = colors.text.error,
    containerStyle = {},
    isVisible = false,
}) {
    if (!isVisible) return null;

    return (
        <View style={containerStyle}>
            <ActivityIndicator animating={true} size={loadingIconSize} color={loadingIconColor} />
        </View>
    );
}
