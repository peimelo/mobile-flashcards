import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import MainNavigator from './MainNavigator'
import FlashStatusBar from './StatusBar'
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
