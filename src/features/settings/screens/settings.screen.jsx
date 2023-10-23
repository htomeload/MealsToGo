import React, { useCallback, useContext, useState } from 'react';
import {
    SettingMenuItem,
    SettingScreenContainer,
    UserEmailText,
    UserIcon,
    UserIconWrapper,
    UserImage,
} from '../components/settings.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { List } from 'react-native-paper';
import Spacer from '../../../components/spacer/Spacer.components';
import { routeName } from '../../../constants/app.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function SettingsScreen({ navigation }) {
    const { onLogout, user } = useContext(AuthenticationContext);

    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser?.uid}-photo`);

        if (photoUri) {
            setPhoto(photoUri);
        }
    };

    const handleOnPressLogout = () => {
        onLogout?.();
    };

    const handleOnPressProfile = () => {
        navigation?.navigate(routeName.camera);
    };

    const handleOnPressViewFavorites = () => {
        navigation?.navigate(routeName.favorites);
    };

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <SettingScreenContainer>
            <UserIconWrapper onPress={handleOnPressProfile}>
                {photo ? <UserImage source={{ uri: photo }} /> : <UserIcon />}
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
