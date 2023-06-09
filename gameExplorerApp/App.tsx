import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Root from './screens/RootScreen/Root';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const Log = () => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!loggedIn ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Root}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain={'dev-6iath7yetcajgvxx.us.auth0.com'}
      clientId={'K8W1i5k5NcNbd5aoaPNBHTZPouoOYwJN'}>
      <Log />
    </Auth0Provider>
  );
};

export default App;
