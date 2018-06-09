import { FETCH_DECKS_SUCCESS } from '../actions/decks'

function decks(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}

export default decks
