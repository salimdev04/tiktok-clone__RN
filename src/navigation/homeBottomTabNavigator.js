import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import plusIcon from '../assets/images/plus-icon.png';

import Home from '../screens/Home/index'

const Tab = createBottomTabNavigator()

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: '#000'
                },
                activeTintColor: '#fff'
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="Home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Search'}
                component={()=> <Text>Search</Text>}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Upload'}
                component={Home}
                options={{
                    tabBarIcon: ({ }) => (
                        <Image
                            source={plusIcon}
                            style={{ height: 35, resizeMode: 'contain' }}
                        />
                    ),
                    tabBarLabel:()=> null
                }}
            />
            <Tab.Screen
                name={'Inbox'}
                component={()=> <Text>Inbox</Text>}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-minu-outline" size={25} color={color} />
                    )
                }}
            />
            
            
            <Tab.Screen
                name={'Profile'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={25} color={color} />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}

export default HomeBottomTabNavigator
