import { ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../../infrastructure/theme/colors';
import { Button, TextInput } from 'react-native-paper';
import Text from '../../../components/typography/text.components';

export const ViewFullScreen = styled(View)`
    flex: 1;
    width: ${Dimensions.get('screen').width}px;
    padding: 16px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
`;

export const BackgroundFullScreen = styled(ImageBackground).attrs({
    source: require('../../../assets/imgs/home_bg.jpg'),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountContainer = styled(View)`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme?.space?.[4]};
    margin-top: ${(props) => props.theme?.space?.[2]};
`;

export const AuthButton = styled(Button).attrs({
    icon: 'lock-open-outline',
    textColor: 'white',
})`
    background-color: ${colors.brand.primary};
    border-radius: 5px;
`;

export const RegisterButton = styled(Button).attrs({
    icon: 'email',
    textColor: 'white',
})`
    background-color: ${colors.brand.primary};
    border-radius: 5px;
`;

export const AccountButton = styled(Button).attrs({
    textColor: 'white',
})`
    background-color: ${colors.brand.primary};
    border-radius: 5px;
`;

export const EmailInput = styled(TextInput).attrs({
    inputMode: 'email',
    label: 'Email',
    numberOfLines: 1,
    autoCapitalize: 'none',
})`
    min-width: ${Dimensions.get('screen').width * 0.65}px;
`;

export const PasswordInput = styled(TextInput).attrs({
    inputMode: 'text',
    label: 'Password',
    numberOfLines: 1,
    secureTextEntry: true,
    autoCapitalize: 'none',
})`
    min-width: ${Dimensions.get('screen').width * 0.65}px;
`;

export const ConfirmPasswordInput = styled(TextInput).attrs({
    inputMode: 'text',
    label: 'Confirm Password',
    numberOfLines: 1,
    secureTextEntry: true,
    autoCapitalize: 'none',
})`
    min-width: ${Dimensions.get('screen').width * 0.65}px;
`;

export const Title = styled(Text).attrs({
    variant: 'body',
})``;
