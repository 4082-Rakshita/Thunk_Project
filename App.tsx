import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import RootNavigation from './src/Navigation';
import { Provider } from 'react-redux'
import {store} from './src/Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
    
   <RootNavigation/>
    
    </Provider>
  )
}

export default App;