import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage  from '../pages/FirstPage'
import Home from '../pages/home'
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="FirstPage"
                component={FirstPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

        
    )
}