import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { navConstants, svgPath } from '../../constant/constants'
import Wallet from '../../../assets/icons/wallet.svg';
import AccountStack from '../stack/AccountStack';
import { Text } from 'react-native';
import SvgLoader from '../../components/SvgLoader/SvgLoader';

const Tabs = createBottomTabNavigator()
const BottomTabs = () => {
    const { WALLET_SVG, INVOICE_SVG, PAY_SVG, SUMMARY_SVG, MORE_SVG  } = svgPath;
    const { SEVENTEEN, ACCOUNT, INVOICE, PAY, SUMMARY, MORE } = navConstants

    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color}) => {
                    let icon;
                    if (route.name === ACCOUNT) {
                        focused ? color = 'red' : 'gray'
                        return <SvgLoader xml={WALLET_SVG} width={30} height={30} />
                    }else if (route.name === INVOICE) {
                        focused ? color = 'red' : 'gray'
                        return <SvgLoader xml={INVOICE_SVG} width={60} height={60} />
                    }else if (route.name === PAY) {
                        return <SvgLoader xml={PAY_SVG} width={60} height={60} />
                    }else if (route.name === SUMMARY) {
                        return <SvgLoader xml={SUMMARY_SVG} width={60} height={60} />
                    }else{
                        return <SvgLoader xml={MORE_SVG} width={60} height={60} />
                    }
                }
            })}
        >
            <Tabs.Screen 
                name={ACCOUNT}
                component={AccountStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tabs.Screen 
                name={INVOICE}
                component={AccountStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tabs.Screen 
                name={PAY}
                component={AccountStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tabs.Screen 
                name={SUMMARY}
                component={AccountStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tabs.Screen 
                name={MORE}
                component={AccountStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
        </Tabs.Navigator>
    )
} 


export default BottomTabs