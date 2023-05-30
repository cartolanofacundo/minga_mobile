
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';


export function RootStack() {
  let authenticated = false;
  return (
    <NavigationContainer>
        {!authenticated && <AuthStack />}
        {authenticated && <AppTabs/>}
    </NavigationContainer>
  );
}

