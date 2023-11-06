import React, { useEffect } from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { KEY } from './src/constant/Key';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoadingModal from './src/components/modal/LoadingModal';
function App(): JSX.Element {
    GoogleSignin.configure({ webClientId: KEY.GoogleAuthClientId });
    console.log(KEY.GoogleAuthClientId)
  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
        <LoadingModal />
      </Provider>
    </>

  );
}
export default App;
