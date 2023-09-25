import React, { useState } from 'react';
import RestaurantInfoCard from '../restaurants/components/restaurant-info-card.components';
import RestaurantMenuList from './components/restaurant-menu-list.component';
import { mockMenus } from '../../services/restaurants/mock';
import { FlatList, ScrollView } from 'react-native';

export default function RestaurantDetailScreen({ navigation, route }) {
    const { restaurant } = route?.params;

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <RestaurantMenuList
                    title={mockMenus?.[0]?.title}
                    leftIcon={mockMenus?.[0]?.leftIcon}
                    list={mockMenus?.[0]?.list}
                    isExpanded={breakfastExpanded}
                    onPress={setBreakfastExpanded}
                />
                <RestaurantMenuList
                    title={mockMenus?.[1]?.title}
                    leftIcon={mockMenus?.[1]?.leftIcon}
                    list={mockMenus?.[1]?.list}
                    isExpanded={lunchExpanded}
                    onPress={setLunchExpanded}
                />
                <RestaurantMenuList
                    title={mockMenus?.[2]?.title}
                    leftIcon={mockMenus?.[2]?.leftIcon}
                    list={mockMenus?.[2]?.list}
                    isExpanded={dinnerExpanded}
                    onPress={setDinnerExpanded}
                />
                <RestaurantMenuList
                    title={mockMenus?.[3]?.title}
                    leftIcon={mockMenus?.[3]?.leftIcon}
                    list={mockMenus?.[3]?.list}
                    isExpanded={drinksExpanded}
                    onPress={setDrinksExpanded}
                />
            </ScrollView>
        </>
    );
}
