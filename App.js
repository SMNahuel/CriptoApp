import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* --------------- NAVIGATION */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/* --------------- STORE */
import {Provider} from 'react-redux';
import {createStore} from 'redux';

/* --------------- SCREEN */
import AddCrypto from './screens/AddCrypto';
import Home from './screens/Home';

/* --------------- SCREEN */
import reducer from './redux/reducer.js';

/* Navigation tab */
const Tab = createBottomTabNavigator();
/* Store conect */
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#385775" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'bitcoin';
              } else if (route.name === 'Add') {
                iconName = 'bitcoin';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#385775',
            inactiveBackgroundColor: '#385775',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Add" component={AddCrypto} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
