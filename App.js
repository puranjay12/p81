import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/Exchange';
import SettingsScreen from './screens/SettingsScreen'
import CustomSideBarMenu from './components/customSideBarMenu'

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Exchange: {screen: Exchange},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "Exchange"){
          return(
            <Image
            source={require("./assets/ads-icon.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

const AppDrawerNavigator = createDrawerNavigator ({
Home: {
  screen : TabNavigator
},

Settings : {
  screen : SettingsScreen
}
},
 {
  contentComponent: CustomSideBarMenu
},
{
  initialRouteName: 'home'
})