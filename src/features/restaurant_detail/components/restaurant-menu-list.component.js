import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export default function RestaurantMenuList({ isExpanded, onPress, title, leftIcon, list }) {
    const handleOnPress = () => {
        onPress?.(!isExpanded);
    };

    return (
        <List.Section>
            <List.Accordion
                title={title}
                left={(props) => (
                    <List.Icon
                        {...props}
                        icon={leftIcon}
                        color={isExpanded ? colors.text.error : colors.text.primary}
                    />
                )}
                expanded={isExpanded}
                onPress={handleOnPress}
                titleStyle={{ color: isExpanded ? colors.text.error : colors.text.primary }}
                rippleColor={'transparent'}
            >
                {list?.map((item, index) => (
                    <List.Item key={`menu-${item?.title}-${index}`} title={item?.title} />
                ))}
            </List.Accordion>
        </List.Section>
    );
}
