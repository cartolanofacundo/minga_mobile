import 'react-native-gesture-handler';


import { RootStack } from './src/routes/RootStack';
import { useEffect, useState } from 'react';
import { _retrieveData } from './src/utils/utils';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from "./src/store/store"
import authActions from './src/store/user/authActions';
import categoryAction from "./src/store/categories/categoriesActions"
import { LoadingScreen } from './src/screens/auth/LoadingScreen';
const { sign_in_token } = authActions
const { get_categories } = categoryAction
export function AppWrapper() {
  const [loadingPage, setLoadingPage] = useState(true)
  const {token} = useSelector(store => store.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_categories())
    _retrieveData({ key: "token" })
      .then((res) => {
        if(typeof res === "string"){
          dispatch(sign_in_token())}
        else{
          setLoadingPage(false)
        }
        }) 
      .catch((err) => console.log(err))
  }, [])
  useEffect(() => {
    if(token){
      setLoadingPage(false)
    }
  },[token])
  return (
    <>
      {

        loadingPage ? <LoadingScreen /> :
          <RootStack />

      }
    </>

  )
}

export default function App() {


  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>

  );
}