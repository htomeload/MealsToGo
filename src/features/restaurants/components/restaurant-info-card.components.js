import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from './../../../../assets/star';
import open from './../../../../assets/open';
import Spacer from '../../../components/spacer/Spacer.components';

import {
    CategoryIcon,
    Address,
    ClosedTemporary,
    Rating,
    RatingAndOpening,
    RestaurantCard,
    RestaurantCardCover,
    SectionEnd,
    Title,
} from './restaurant-info-card.styles';

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos?.[0] }} />
            <Title variant="body">{name}</Title>
            <RatingAndOpening>
                <Rating>
                    {ratingArray?.map((item, index) => (
                        <SvgXml key={`${name}-rating-${index}`} xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporary && (
                        <ClosedTemporary variant="error">CLOSE TEMPORARY</ClosedTemporary>
                    )}
                    <Spacer position="left" scale="large">
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    </Spacer>
                    <Spacer position="left" scale="large">
                        <CategoryIcon source={{ uri: icon }} />
                    </Spacer>
                </SectionEnd>
            </RatingAndOpening>
            <Address variant="caption">{address}</Address>
        </RestaurantCard>
    );
}
