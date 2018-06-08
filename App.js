import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import MainNavigator from './components/MainNavigator'
import FlashStatusBar from './components/FlashStatusBar'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashStatusBar backgroundColor="blue" barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
