import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { navConstants } from '../../constant/constants';
import ScreenEighteen from '../../screens/Eighteen/ScreenEighteen';
import ScreenNineteen from '../../screens/Nineteen/ScreenNineteen';
import ScreenSeventeen from '../../screens/Seventeen/ScreenSeventeen';

const Stack = createStackNavigator()
const AccountStack = () => {
    const {SEVENTEEN, EIGHTEEN, NINETEEN} = navConstants
    return (
        <Stack.Navigator
            initialRouteName={SEVENTEEN}
            screenOptions={{
                headerShown: false,
                header: () => null
            }}
        >
            <Stack.Screen
                name={SEVENTEEN}
                component={ScreenSeventeen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen
                name={EIGHTEEN}
                component={ScreenEighteen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen
                name={NINETEEN}
                component={ScreenNineteen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
        </Stack.Navigator>
    )

}

export default AccountStack;