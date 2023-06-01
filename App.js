import 'react-native-gesture-handler';


import { RootStack } from './src/routes/RootStack';
import { useEffect } from 'react';
import { _retrieveData } from './src/utils/utils';
import { Provider, useDispatch } from 'react-redux';
import { store } from "./src/store/store"
import authActions from './src/store/user/authActions';
import categoryAction from "./src/store/categories/categoriesActions"
const { sign_in_token } = authActions
const {get_categories} = categoryAction
export function AppWrapper() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_categories())
    _retrieveData({ key: "token" })
      .then((res) => typeof res === "string" && dispatch(sign_in_token()))
      .catch(err => console.log(err))
  }, [])
  return (

    <RootStack />
  )
}

export default function App() {


  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>

  );
}