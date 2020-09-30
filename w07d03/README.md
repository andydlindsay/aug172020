# W07D03 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow


useState
useEffect
useContext replacing Redux

useReducer
useMemo <== fibonacci numbers 
useCallback
useRef

  4s          3s
Promise => Promise => 
  
  4s
Promise
  3s
Promise

Promise.all([promises])

### Rules for Hooks
1. Can't use them conditionally (have to be top-level)
2. Can only be used in React functions
3. all hooks must start with 'use'

### Pure Functions
* Always returns the same result given the same inputs
* Does not produce side effects

### Side Effects
* An operation that modifies the state of the computer or interacts with something outside of your function/application

* console.log aka writing to standard out
* modifying the DOM directly
* establishing a socket connection
* retrieving data
* setting timers and intervals

```js
React.useEffect(() => {}, []);

```


















# 
