import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import styled from 'styled-components';

export const OrderButton = styled(Button).attrs({
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
