import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps217695Navigator from '../features/Maps217695/navigator';
import Additem217694Navigator from '../features/Additem217694/navigator';
import Maps217690Navigator from '../features/Maps217690/navigator';
import UserProfile217686Navigator from '../features/UserProfile217686/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps217695: { screen: Maps217695Navigator },
Additem217694: { screen: Additem217694Navigator },
Maps217690: { screen: Maps217690Navigator },
UserProfile217686: { screen: UserProfile217686Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
