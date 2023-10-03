import React from 'react';
import styled from 'styled-components';
import { View, Image, Platform } from 'react-native';
import Text from '../typography/text.components';
import WebView from 'react-native-webview';

const ImageAndroidWrapper = styled(View)`
    width: 120px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
`;

const ImageAndroid = styled(WebView)`
    padding-left: 10px;
    padding-right: 10px;
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

export default function CompactRestaurantInfo({ restaurant, isMap }) {
    return (
        <Item>
            {Platform.OS === 'android' && isMap ? (
                <ImageAndroidWrapper pointerEvents={'none'}>
                    <ImageAndroid
                        source={{
                            uri: restaurant?.photos?.[0],
                        }}
                    />
                </ImageAndroidWrapper>
            ) : (
                <CompactImage source={{ uri: restaurant?.photos?.[0] }} resizeMode="cover" />
            )}
            <Text variant="caption" center numberOfLines={3}>
                {restaurant?.name}
            </Text>
        </Item>
    );
}
