import React from 'react';
import styled from 'styled-components';
import { View, Image, Platform } from 'react-native';
import Text from '../typography/text.components';
import WebView from 'react-native-webview';

const ImageAndroid = styled(WebView)`
    width: 120px;
    height: 100px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    overflow: hidden;
`;

const CompactImage = styled(Image)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled(View)`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

export default function CompactRestaurantInfo({ restaurant }) {
    return (
        <Item>
            {Platform.OS === 'android' ? (
                <ImageAndroid
                    source={{
                        uri: restaurant?.photos?.[0],
                    }}
                />
            ) : (
                <CompactImage source={{ uri: restaurant?.photos?.[0] }} resizeMode="cover" />
            )}
            <Text variant="caption" center numberOfLines={3}>
                {restaurant?.name}
            </Text>
        </Item>
    );
}
