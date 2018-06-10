import { ADD_DECK_SUCCESS, FETCH_DECKS_SUCCESS } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK_SUCCESS: {
      const title = action.payload
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      }
    }

    case FETCH_DECKS_SUCCESS: {
      return action.payload
    }

    default:
      return state
  }
}

export default decks
