import React from 'react';
import { View } from 'react-native';

export default function ViewVisibility({ isVisible, style, children }) {
    if (!isVisible) return null;

    return <View style={style}>{children}</View>;
}
