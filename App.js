import { AppLoading, Font } from 'expo'
import { Root } from 'native-base'
import React from 'react'
import { Provider } from 'react-redux'
import FlashStatusBar from './components/FlashStatusBar'
import MainNavigator from './components/MainNavigator'
import store from './store'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isLoading: false })
  }

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return <AppLoading />
    }

    return (
      <Provider store={store}>
        <Root>
          <FlashStatusBar backgroundColor="steelblue" barStyle="light-content" />
          <MainNavigator />
        </Root>
      </Provider>
    )
  }
}
