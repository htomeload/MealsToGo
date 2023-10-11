import React from 'react';
import {
    AccountContainer,
    AnimationWrapper,
    AuthButton,
    BackgroundFullScreen,
    RegisterButton,
    Title,
    ViewFullScreen,
} from '../components/account.styles';
import Spacer from '../../../components/spacer/Spacer.components';
import { routeName } from '../../../constants/app.constants';
import AnimatedLottieView from 'lottie-react-native';

export default function AccountScreen({ navigation }) {
    const navigateToLoginScreen = () => {
        navigation?.navigate(routeName.login);
    };

    const navigateToRegisterScreen = () => {
        navigation?.navigate(routeName.register);
    };

    return (
        <BackgroundFullScreen>
            <ViewFullScreen>
                <AnimationWrapper>
                    <AnimatedLottieView
                        key={'animation'}
                        autoPlay
                        loop
                        resizeMode="cover"
                        source={require('../../../../assets/watermelon.json')}
                    />
                </AnimationWrapper>
                <Title>Meals To Go</Title>
                <AccountContainer>
                    <Spacer position={'top'} scale={'medium'}>
                        <AuthButton onPress={navigateToLoginScreen}>Login</AuthButton>
                    </Spacer>
                    <Spacer position={'top'} scale={'medium'}>
                        <RegisterButton onPress={navigateToRegisterScreen}>Register</RegisterButton>
                    </Spacer>
                </AccountContainer>
            </ViewFullScreen>
        </BackgroundFullScreen>
    );
}
