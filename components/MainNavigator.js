import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import DeckDetail from '../containers/DeckDetail'
import Decks from '../containers/Decks'
import NewDeck from '../containers/NewDeck'

const Tabs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Entypo name='list' size={30}
                                             color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30}
                                             color={tintColor} />
    }
  }
}

export default MainNavigator = createStackNavigator({
  Home: {
    screen: Platform.OS === 'ios'
      ? createBottomTabNavigator(Tabs)
      : createMaterialTopTabNavigator(Tabs),
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    }),
  }
})
