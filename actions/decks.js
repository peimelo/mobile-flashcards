import * as DecksAPI from '../utils/DecksAPI'

export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS'

export function fetchDecks() {
  return dispatch => {
    return DecksAPI.getDecks()
      .then(data => dispatch(fetchDecksSuccess(data)))
  }
}

export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: [
    {
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
    {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  ]
})
