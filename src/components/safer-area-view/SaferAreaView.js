import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export const SaferAreaView = (props) => {
    return (<>
        <SafeAreaView style={[Styles.container, props?.style]}>
            {props?.children}
        </SafeAreaView>
        <ExpoStatusBar style='auto' />
    </>)
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: Platform?.OS === 'android' ? StatusBar?.currentHeight : 0
    }
})