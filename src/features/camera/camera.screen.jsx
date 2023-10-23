import React, { useEffect, useState, useRef, useContext } from 'react';
import { Camera, CameraType } from 'expo-camera';
import {
    CameraFullScreen,
    TouchableOpacityFullScreen,
    ViewFullScreen,
} from './components/camera.styled';
import Text from '../../components/typography/text.components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

export default function CameraScreen({ navigation }) {
    const { user } = useContext(AuthenticationContext);

    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(false);

    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const result = await requestPermission();

            if (result.granted) {
                setHasPermission(true);
            }
        })();
    }, []);

    function toggleCameraType() {
        setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function snap() {
        if (cameraRef) {
            const result = await cameraRef.current?.takePictureAsync();

            if (result) {
                AsyncStorage.setItem(`${user?.uid}-photo`, result?.uri);
                navigation?.pop();
            }
        }
    }

    if (!hasPermission)
        return (
            <ViewFullScreen>
                <Text>No Camera Access</Text>
            </ViewFullScreen>
        );

    return (
        <CameraFullScreen ref={(camera) => (cameraRef.current = camera)} type={type} ratio={'16:9'}>
            <TouchableOpacityFullScreen onPress={snap} />
        </CameraFullScreen>
    );
}
