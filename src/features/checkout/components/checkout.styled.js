import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';
import styled from 'styled-components';
import { colors } from '../../../infrastructure/theme/colors';

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

export const NameInput = styled(TextInput)`
    margin: ${(props) => props.theme?.space?.[3]};
`;

export const PayButton = styled(Button).attrs({
    buttonColor: colors.brand.primary,
    textColor: 'white',
    mode: 'contained',
    icon: 'cash',
})`
    padding: ${(props) => props.theme?.space?.[2]};
    width: 80%;
    align-self: center;
    margin-top: ${(props) => props.theme?.space?.[3]};
    border-radius: 4px;
`;

export const ClearButton = styled(Button).attrs({
    buttonColor: colors.ui.error,
    textColor: 'white',
    mode: 'contained',
    icon: 'cart-off',
})`
    padding: ${(props) => props.theme?.space?.[2]};
    width: 80%;
    align-self: center;
    margin-top: ${(props) => props.theme?.space?.[3]};
    border-radius: 4px;
`;
