import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components';

export const ViewFullScreen = styled(View)`
    flex: 1;
    padding-left: ${(props) => props.theme?.space?.[3]};
    padding-right: ${(props) => props.theme?.space?.[3]};
`;

export const CartIconContainer = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
    icon: 'cart-off',
    size: 128,
})`
    background-color: ${(props) => props?.bg || props.theme.colors?.brand?.primary};
`;

export const CheckOutFormContainer = styled(ScrollView)`
    padding-top: ${(props) => props.theme?.space?.[2]};
`;
