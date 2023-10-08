import { View } from 'react-native';
import styled from 'styled-components';

export const SettingScreenContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme?.space?.[3]};
`;
