import React from 'react';
import { View, Text, TouchableOpacity, useColorScheme, StatusBar } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Dark from './themes/dark';
import Light from './themes/light';
import HomeScreen from './pages/Home';

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#21c25e" }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const Routes = () => {
    const scheme = useColorScheme();
    const { colors } = useTheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? Dark : Light}>
            <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'My TCC2',
                    headerTransparent: true,
                    headerTitleStyle: {margin: 10, marginTop: 24}
                }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;