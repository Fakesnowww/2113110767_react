import 'react-native-gesture-handler'
import { View, Text ,Button,StyleSheet} from 'react-native'
import React from 'react'
import{NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function FirstScreenStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#6699ff'
      },
      headerTintColor:'#ffff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    >
      <Stack.Screen name = 'FirstPage' component={FirstPage}/>
    </Stack.Navigator>

  )
}
function MyDrawer(){
  return(
    <Drawer.Navigator 
    screenOptions={{
      drawerStyle:{
        backgroundColor:'#e6e6ff',
        width:240,
      }
    }}>
      <Drawer.Screen 
      name='FirstDrawer' 
      component={FirstScreenStack}
      options={{drawerLabel:'First Page Option'}}/>
      <Drawer.Screen 
      name='SecondDrawer' 
      component={SecondScreenStack}
      />
      
    </Drawer.Navigator>
  )
}

function SecondScreenStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#6699ff'
      },
      headerTintColor:'#ffff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    >
      <Stack.Screen name = 'Secondpage' component={SecondPage}/>
    </Stack.Navigator>

  )
}
function ThirdScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'ThirdPage' component={ThirdPage}/>
    </Stack.Navigator>

  )
}




const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}





export default App