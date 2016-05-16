// Action Types
export const ADD_COUNT = 'ADD_COUNT'

// Action Creators
export function addCount(amount) {
  return { type: ADD_COUNT, amount }
}
