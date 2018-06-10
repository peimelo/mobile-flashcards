import * as DecksAPI from '../utils/DecksAPI'

export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS'
export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS'

export function addCard(title, card) {
  return dispatch => {
    return DecksAPI.addCard(title, card)
      .then(() => dispatch(addCardSuccess(title, card)))
  }
}

export const addCardSuccess = (title, card) => ({
  type: ADD_CARD_SUCCESS,
  payload: { title, card }
})

export function addDeck(title) {
  return dispatch => {
    return DecksAPI.addDeck(title)
      .then(() => dispatch(addDeckSuccess(title)))
  }
}

export const addDeckSuccess = (title) => ({
  type: ADD_DECK_SUCCESS,
  payload: title
})

export function fetchDecks() {
  return dispatch => {
    return DecksAPI.getAll()
      .then(data => dispatch(fetchDecksSuccess(data)))
  }
}

export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: decks
})
