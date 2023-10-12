import { View } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components';
import Text from '../../../components/typography/text.components';

export const SettingScreenContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme?.space?.[3]};
`;

export const SettingMenuItem = styled(List.Item)`
    padding: ${(props) => props.theme?.space?.[3]};
`;

export const UserIcon = styled(Avatar.Icon).attrs({
    size: 180,
    icon: 'human',
    color: 'white',
})`
    background-color: #2182bd;
`;

export const UserIconWrapper = styled(View)`
    align-items: center;
`;

export const UserEmailText = styled(Text).attrs({
    variant: 'label',
})``;
