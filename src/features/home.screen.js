import { View, StyleSheet, Text } from 'react-native';

export const HomeScreen = () => {
    return (<View style={Styles.container}>
        <View style={Styles.search}>
            <Text>Search</Text>
        </View>
        <View style={Styles.list}>
            <Text>List</Text>
        </View>
    </View>)
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        padding: 12,
        backgroundColor: 'blue'
    },
    list: {
        flex: 1,
        padding: 12,
        backgroundColor: 'green'
    }
})