import React, { useContext, useState } from 'react';
import RestaurantMenuList from './components/restaurant-menu-list.component';
import { mockMenus } from '../../services/restaurants/mock';
import { ScrollView } from 'react-native';
import RestaurantInfoCard from '../../components/restaurant-info-card/restaurant-info-card.components';
import Spacer from '../../components/spacer/Spacer.components';
import { OrderButton } from './components/restaurant_detail.styles';
import { CartContext } from '../../services/cart/cart.context';
import { tabRouteName } from '../../constants/app.constants';

export default function RestaurantDetailScreen({ navigation, route }) {
    const { restaurant } = route?.params;

    const { addToCart } = useContext(CartContext);

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const handleOnPressOrderButton = () => {
        addToCart?.({ item: 'special', price: 1299 }, restaurant);
        navigation.navigate(tabRouteName.checkOut);
    };

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
            <Spacer position={'bottom'} scale={'large'}>
                <OrderButton onPress={handleOnPressOrderButton}>
                    Order Special Only 12.99!
                </OrderButton>
            </Spacer>
        </>
    );
}
