import { View } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components';
import Text from '../../../components/typography/text.components';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

export const SettingScreenContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme?.space?.[3]};
`;

export const SettingMenuItem = styled(List.Item)`
    padding: ${(props) => props.theme?.space?.[3]};
    background-color: rgba(255, 255, 255, 0.4);
`;

export const UserIcon = styled(Avatar.Icon).attrs({
    size: 180,
    icon: 'human',
    color: 'white',
})`
    background-color: ${(props) => props.theme?.colors?.brand?.primary};
`;

export const UserIconWrapper = styled(TouchableOpacity)`
    align-items: center;
`;

export const UserEmailText = styled(Text).attrs({
    variant: 'label',
})``;

export const UserImage = styled(Avatar.Image).attrs({
    size: 180,
})`
    background-color: ${(props) => props.theme?.colors?.brand?.primary};
`;

export const SettingBackground = styled(ImageBackground).attrs({
    source: require('../../../../assets/home_bg.jpg'),
})`
    position: absolute;
    width: 100%;
    height: 100%;
`;
