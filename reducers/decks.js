import { FETCH_DECKS_SUCCESS } from '../actions/decks'

const INITIAL_STATE = {
  data: {},
};

function decks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        data: {
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
      };

    default:
      return state
  }
}

export default decks
