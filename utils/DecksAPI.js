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

export function addCard(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(response => {
    const questions = JSON.parse(response)[title].questions;
    questions.push(card);
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(
      deck(title, questions)
    ));
  });
}

export function addDeck(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(
    deck(title, [])
  ))
}

export function getAll() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(response => {
    if (response === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
      return initialData
    } else {
      return JSON.parse(response)
    }
  })
}

function deck(title, questions) {
  return {
    [title]: {
      title,
      questions
    }
  }
}
