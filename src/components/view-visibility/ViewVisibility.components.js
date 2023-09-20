import React from 'react';
import { View } from 'react-native';

export default function ViewVisibility(props) {
    if (!props?.isVisible) return null;

    return <View {...props}>{props?.children}</View>;
}
