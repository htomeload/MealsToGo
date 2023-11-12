import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../assets/star';
import open from '../../../assets/open';
import Spacer from '../spacer/Spacer.components';

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
import ViewVisibility from '../view-visibility/ViewVisibility.components';
import Favorite from '../favorites/favorite.component';

const PHOTO_PLACEHOLDER = 'https://i.imgur.com/4q0Jo6G.jpg';

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    const ratingArray =
        Array(Math.round(Math.abs(rating ?? 0)))
            .fill()
            .map((x, i) => Math.abs(i) ?? 0) ?? [];

    return (
        <RestaurantCard elevation={2}>
            <Favorite restaurant={restaurant} />
            <RestaurantCardCover
                resizeMethod="scale"
                resizeMode="cover"
                key={name}
                source={{
                    uri: photos?.[0] ? photos?.[0] : PHOTO_PLACEHOLDER,
                }}
            />
            <Title variant="body">{name}</Title>
            <RatingAndOpening>
                <ViewVisibility isVisible={ratingArray?.length > 0}>
                    <Rating>
                        {ratingArray?.map((item, index) => (
                            <SvgXml
                                key={`${name}-rating-${index}`}
                                xml={star}
                                width={20}
                                height={20}
                            />
                        ))}
                    </Rating>
                </ViewVisibility>
                <SectionEnd>
                    <ViewVisibility isVisible={isClosedTemporary}>
                        <ClosedTemporary variant="error">CLOSE TEMPORARY</ClosedTemporary>
                    </ViewVisibility>
                    <ViewVisibility isVisible={isOpenNow}>
                        <Spacer position="left" scale="large">
                            <SvgXml xml={open} width={20} height={20} />
                        </Spacer>
                    </ViewVisibility>
                    <Spacer position="left" scale="large">
                        <CategoryIcon source={{ uri: icon }} />
                    </Spacer>
                </SectionEnd>
            </RatingAndOpening>
            <Address variant="caption">{address}</Address>
        </RestaurantCard>
    );
}
