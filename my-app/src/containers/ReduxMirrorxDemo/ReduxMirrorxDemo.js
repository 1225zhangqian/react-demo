import React from 'react'
import mirror, { actions, connect, render } from 'mirrorx'

// declare Redux state, reducers and actions,
// all actions will be added to `actions`.
/* mirror.model({
  name: 'demo',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1
    },
    decrement(state) {
      return state - 1
    }
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      actions.demo.increment()
    }
  }
}) */

// connect state with component
// const ReactMirrorx = connect(state => {
//   return { count: state.demo }
// })(props => (
//   <div>
//     <h1>{props.count}</h1>
//     {/* dispatch the actions */}
//     <button onClick={() => actions.demo.decrement()}>-</button>
//     <button onClick={() => actions.demo.increment()}>+</button>
//     {/* dispatch the async action */}
//     <button onClick={() => actions.demo.incrementAsync()}>+ Async</button>
//   </div>
// ))

//export default ReactMirrorx