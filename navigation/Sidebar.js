import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import LibraryScreen from '../screens/LibraryScreen';
import AddGameScreen from '../screens/AddGameScreen';
import { loggingOut } from '../api/firebaseMethods';
export default function Sidebar() {

    const Drawer = createDrawerNavigator();
    const handlePress = () => {

    };
    return (
        <Drawer.Navigator initialRouteName="Library" drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Log out" onPress={() => {
                        loggingOut();
                        navigation.replace('Home');
                    }} />
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen name="Library" component={LibraryScreen} />
            <Drawer.Screen name="Add new game" component={AddGameScreen} />
        </Drawer.Navigator>
    );
}