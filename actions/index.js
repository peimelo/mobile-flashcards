import * as DecksAPI from '../utils/api'

export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS'
export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS'

export function addCardToDeck(title, card) {
  return dispatch => {
    return DecksAPI.addCardToDeck(title, card)
      .then(() => dispatch(addCardSuccess(title, card)))
  }
}

export const addCardSuccess = (title, card) => ({
  type: ADD_CARD_SUCCESS,
  payload: { title, card }
})

export function saveDeckTitle(title) {
  return dispatch => {
    return DecksAPI.saveDeckTitle(title)
      .then(() => dispatch(addDeckSuccess(title)))
  }
}

export const addDeckSuccess = (title) => ({
  type: ADD_DECK_SUCCESS,
  payload: title
})

export function fetchDecks() {
  return dispatch => {
    return DecksAPI.getDecks()
      .then(data => dispatch(fetchDecksSuccess(data)))
  }
}

export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: decks
})
