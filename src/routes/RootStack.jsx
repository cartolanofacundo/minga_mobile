
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';
import { useSelector } from 'react-redux';
import { LoadingScreen } from '../screens/auth/LoadingScreen';


export function RootStack() {
  let {token} = useSelector(store => store.user)
  return (
    <NavigationContainer>
        {!token  && <AuthStack />}
        {token  && <AppTabs/>}
    </NavigationContainer>
  );
}

