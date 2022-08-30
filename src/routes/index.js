import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin  from '../pages/signin'
import Home from '../pages/home'

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
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

        
    )
}