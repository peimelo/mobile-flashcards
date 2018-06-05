import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import Decks from './Decks'
import NewDeck from './NewDeck'

const Tabs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
    }
  },
};

export default MainNavigator = Platform.OS === 'ios'
  ? createBottomTabNavigator(Tabs)
  : createMaterialTopTabNavigator(Tabs)
