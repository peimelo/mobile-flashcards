import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}
