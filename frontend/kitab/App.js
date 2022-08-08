import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/Navigation/AppStack';
import AuthStack from './src/Navigation/AuthStack';

const App = () => {
  return(
    <NavigationContainer>
      {/* <AppStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
