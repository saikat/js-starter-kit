import { ADD_COUNT } from '../actions'

// Individual reducers should normally be split into their own files.
function count(state = 0, action) {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.amount
    default:
      return state
  }
}

export default { count }
