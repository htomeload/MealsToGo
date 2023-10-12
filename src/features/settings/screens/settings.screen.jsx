import React, { useContext } from 'react';
import {
    SettingMenuItem,
    SettingScreenContainer,
    UserEmailText,
    UserIcon,
    UserIconWrapper,
} from '../components/settings.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { List } from 'react-native-paper';
import Spacer from '../../../components/spacer/Spacer.components';
import { routeName } from '../../../constants/app.constants';

export default function SettingsScreen({ navigation }) {
    const { onLogout, user } = useContext(AuthenticationContext);

    const handleOnPressLogout = () => {
        onLogout?.();
    };

    const handleOnPressViewFavorites = () => {
        navigation?.navigate(routeName.favorites);
    };

    return (
        <SettingScreenContainer>
            <UserIconWrapper>
                <UserIcon />
                <Spacer position={'top'} scale={'large'}>
                    <UserEmailText>{user?.email}</UserEmailText>
                </Spacer>
            </UserIconWrapper>
            <List.Section>
                <SettingMenuItem
                    title={'Favorites'}
                    description="View your favorites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={handleOnPressViewFavorites}
                />
                <SettingMenuItem
                    title={'Logout'}
                    left={(props) => (
                        <List.Icon {...props} color="black" icon="lock-open-outline" />
                    )}
                    onPress={handleOnPressLogout}
                />
            </List.Section>
        </SettingScreenContainer>
    );
}
