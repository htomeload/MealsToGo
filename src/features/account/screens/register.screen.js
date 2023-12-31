import React, { useContext, useState } from 'react';
import {
    AccountButton,
    AccountContainer,
    BackgroundFullScreen,
    ConfirmPasswordInput,
    EmailInput,
    PasswordInput,
    RegisterButton,
    Title,
    ViewFullScreen,
} from '../components/account.styles';
import Spacer from '../../../components/spacer/Spacer.components';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import Text from '../../../components/typography/text.components';
import Loading from '../../../components/loading/loading.component';

export default function RegisterScreen({ navigation }) {
    const { onRegister, error, clearError, isAuthLoading } = useContext(AuthenticationContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnRegister = () => {
        onRegister?.(email, password, confirmPassword);
    };

    const handleBack = () => {
        clearError?.();
        navigation?.pop();
    };

    return (
        <BackgroundFullScreen>
            <ViewFullScreen>
                <Title>Meals To Go</Title>
                <AccountContainer>
                    <Spacer position={'bottom'} scale={'medium'}>
                        <EmailInput value={email} onChangeText={(text) => setEmail(text)} />
                    </Spacer>
                    <Spacer position={'bottom'} scale={'medium'}>
                        <PasswordInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </Spacer>
                    <Spacer position={'bottom'} scale={'medium'}>
                        <ConfirmPasswordInput
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </Spacer>
                    {error && (
                        <Spacer position={'bottom'} scale={'medium'}>
                            <Text variant="error" numberOfLines={3}>
                                {error}
                            </Text>
                        </Spacer>
                    )}
                    {!isAuthLoading ? (
                        <Spacer position={'bottom'} scale={'medium'}>
                            <RegisterButton onPress={handleOnRegister}>Register</RegisterButton>
                        </Spacer>
                    ) : (
                        <Loading isVisible={isAuthLoading} />
                    )}
                </AccountContainer>
                <Spacer position={'top'} scale={'medium'}>
                    <AccountButton onPress={handleBack}>Back</AccountButton>
                </Spacer>
            </ViewFullScreen>
        </BackgroundFullScreen>
    );
}
