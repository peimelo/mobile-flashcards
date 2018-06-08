import * as DecksAPI from '../utils/DecksAPI'

export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS';

export function fetchDecks() {
  return dispatch => {
    return DecksAPI.getDecks()
      .then(data => dispatch(fetchDecksSuccess(data)))
  }
}

export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: decks
});
