import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { IDLE } from './constants/search-action-types'

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
<div>
  <h1>{value}</h1>
  <button onClick={onDecrement}> - </button>
  <button onClick={onIncrement}> + </button>
</div>
);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />, document.getElementById('app')
  );
};

store.subscribe(render);
render();