import { AppLoading, Font } from 'expo'
import { Root } from 'native-base'
import React from 'react'
import { Provider } from 'react-redux'
import FlashStatusBar from './components/FlashStatusBar'
import MainNavigator from './components/MainNavigator'
import store from './store'

export default class App extends React.Component {
  state = {
    loading: true
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state

    if (loading) {
      return <AppLoading />
    }

    return (
      <Provider store={store}>
        <Root>
          <FlashStatusBar backgroundColor="blue" barStyle="light-content" />
          <MainNavigator />
        </Root>
      </Provider>
    )
  }
}
