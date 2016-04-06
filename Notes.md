## My Notes

### Reducers

1. Reducers is a pure function that takes the previous state and an action, and returns the next state. `(previousState, action) => newState`
1. No side effects to be done with in reducers
1. No routing transitions
1. Non pure functions like Date.now() or Math.random

### Store

1. Hold application state
1. Allows access to state via `getState()`
1. Allows state to be updated via `dispatch(action)`
1. Registers listeners via `subscribe(listener)`
1. Handles unregistering of listeners via the function returned by subscribe(listener)


### Flow

1. Define Reducers `todoApp`
1. use `createStore` from `redux`. Then get store by `createStore(todoApp)`
