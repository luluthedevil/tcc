import React, { useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainAppScreen from './src/screens/MainAppScreen';
import { DrawerContent } from './src/screens/DrawerContent';
import { SettingsScreen } from './src/screens';
import RootStackScreen from './src/screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './src/components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

export default function App() {
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      
      default:
        return {
          ...prevState,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const username = String(foundUser[0].username)
      try{
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e){
        console.log(e);
      }
      dispatch({
        type: 'LOGIN',
        id: username,
        token: userToken,
      });
    },
    signOut: async() => {
      try{
        await AsyncStorage.removeItem('userToken');
      } catch (e){
        console.log(e);
      }
      dispatch({
        type: 'LOGOUT',
      });
    },
    signUp: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    toogleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e){
        console.log(e);
      }
      dispatch({
        type: 'RETRIEVE_TOKEN',
        token: 'qwerty',
      });
    }, 1000);
  }, []);

  if(loginState.isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value ={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
          >
            <Drawer.Screen 
              name='HomeDrawer' 
              component={MainAppScreen} 
            />
            <Drawer.Screen 
              name='Settings' 
              component={SettingsScreen} 
            />
          </Drawer.Navigator>
          )
        :
          <RootStackScreen />
        }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);