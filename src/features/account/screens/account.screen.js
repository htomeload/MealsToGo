import React from 'react';
import Text from '../../../components/typography/text.components';
import { BackgroundFullScreen, ViewFullScreen } from '../components/account.styles';

export default function AccountScreen() {
    return (
        <BackgroundFullScreen source={require('../../../assets/imgs/home_bg.jpg')}>
            <ViewFullScreen>
                <Text>Account screen</Text>
            </ViewFullScreen>
        </BackgroundFullScreen>
    );
}
