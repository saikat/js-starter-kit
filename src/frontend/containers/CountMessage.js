import React from 'react'
import { addCount } from '../actions'
import { connect } from 'react-redux'

// Read https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ow9yfsj2h to see the distinction between components and containers. As a rule of thumb, components that are aware of redux are containers
const CountMessage = ({ count, onAddCount }) => (
  <div>
    The count is {count}
    <br />
    <button onClick={() => onAddCount(1)}>Add Count</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCount: (amount) => {
      dispatch(addCount(amount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountMessage)