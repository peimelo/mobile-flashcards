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
import NewCard from '../containers/NewCard'
import NewDeck from '../containers/NewDeck'
import Quiz from '../containers/Quiz'

const tabs = {
  decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Entypo name='list' size={30}
                                             color={tintColor} />
    }
  },
  newDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30}
                                             color={tintColor} />
    }
  }
}

export default MainNavigator = createStackNavigator({
  home: {
    screen: Platform.OS === 'ios'
      ? createBottomTabNavigator(tabs)
      : createMaterialTopTabNavigator(tabs),
    navigationOptions: {
      header: null
    }
  },
  deckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    }),
  },
  newCard: {
    screen: NewCard,
    navigationOptions: {
      title: "Create New Question"
    }
  },
  quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  }
})
