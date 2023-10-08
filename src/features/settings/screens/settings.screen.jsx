import React, { useContext } from 'react';
import { SettingScreenContainer } from './settings.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Button } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {
    const { onLogout } = useContext(AuthenticationContext);

    const handleOnPressLogout = () => {
        onLogout?.();
    };

    return (
        <SettingScreenContainer>
            <Button onPress={handleOnPressLogout}>Logout</Button>
        </SettingScreenContainer>
    );
}
