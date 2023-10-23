import { Camera } from 'expo-camera';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const CameraFullScreen = styled(Camera)`
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const TouchableOpacityFullScreen = styled(TouchableOpacity)`
    flex: 1;
`;

export const ViewFullScreen = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
