import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function add(title) {
  const deck = newDeck(title)
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function getAll() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    if (results === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
      return initialData
    } else {
      return JSON.parse(results)
    }
  })
}

function newDeck(title) {
  return {
    [title]: {
      title,
      questions: []
    }
  }
}
