
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import Splash from './screens/Splash';
import Products from './screens/product';


const RootStack = createStackNavigator();

function App({navigation}) {
 
  return (
    
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
           
            headerTintColor: '#000',
            headerTitleStyle: {
              fontSize: 16,
     
            }
          }}
        >
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              cardStyle: { backgroundColor: '#fff' },
              headerShown: false,
            }}
          />
         
         <RootStack.Screen
            name="Product Screen"
            component={Products}
            options={{
              title: 'Search' ,
              headerStyle: {
                borderBottomColor: '#000',
                borderBottomWidth:3
              },
              headerTintColor: '#30384d',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:19.2,
                fontFamily:'Montserrat-Regular'
              },
            }}
         
          />
        </RootStack.Navigator>
      </NavigationContainer>
    
  )
}

export default App;