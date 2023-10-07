import React, { useContext, useState } from 'react';
import {
    AccountButton,
    AccountContainer,
    AuthButton,
    BackgroundFullScreen,
    EmailInput,
    PasswordInput,
    Title,
    ViewFullScreen,
} from '../components/account.styles';
import Spacer from '../../../components/spacer/Spacer.components';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import Text from '../../../components/typography/text.components';

export default function LoginScreen({ navigation }) {
    const { onLogin, error, clearError } = useContext(AuthenticationContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnLogin = () => {
        onLogin?.(email, password);
    };

    const handleBack = () => {
        clearError?.();
        navigation?.pop();
    };

    return (
        <BackgroundFullScreen>
            <ViewFullScreen>
                <Title>Meal To Go</Title>
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
                    {error && (
                        <Spacer position={'bottom'} scale={'medium'}>
                            <Text variant="error">{error}</Text>
                        </Spacer>
                    )}
                    <Spacer position={'bottom'} scale={'medium'}>
                        <AuthButton onPress={handleOnLogin}>Login</AuthButton>
                    </Spacer>
                </AccountContainer>
                <Spacer position={'top'} scale={'medium'}>
                    <AccountButton onPress={handleBack}>Back</AccountButton>
                </Spacer>
            </ViewFullScreen>
        </BackgroundFullScreen>
    );
}
