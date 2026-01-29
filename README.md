# React Hooks Examples Documentation

A comprehensive guide to the React Hooks examples in this Next.js application. This documentation provides an overview of each hook, its examples, and direct links to the code.

## Table of Contents

- [useState](#usestate)
- [useEffect](#useeffect)
- [useRef](#useref)
- [useContext](#usecontext)
- [useReducer](#usereducer)
- [useMemo](#usememo)
- [useCallback](#usecallback)
- [Custom Hooks](#custom-hooks)
- [Quick Reference](#quick-reference)

---

## useState

The `useState` hook allows you to add state to functional components. It returns an array with the current state value and a function to update it.

### Examples

1. **[Basic State Management](pages/usestate/index.js)**
   - **File**: `pages/usestate/index.js`
   - **Components**: `src/Components/usestate/1.UsestateHook.js`
   - **Concept**: Basic counter with increment/decrement functionality
   - **Key Features**: Simple state updates, button interactions

2. **[Object State Management](src/Components/usestate/2.UsestateObject.js)**
   - **File**: `src/Components/usestate/2.UsestateObject.js`
   - **Concept**: Managing object state with spread operator
   - **Key Features**: Object destructuring, state immutability

3. **[Array State Management](src/Components/usestate/3.UsestateArray.js)**
   - **File**: `src/Components/usestate/3.UsestateArray.js`
   - **Concept**: Managing array state with push and filter operations
   - **Key Features**: Array methods, state updates with new references

---

## useEffect

The `useEffect` hook allows you to perform side effects in functional components. It runs after the component renders and can be controlled with dependency arrays.

### Examples

1. **[After Every Render](pages/useeffect/1-after-every-render.js)**
   - **File**: `pages/useeffect/1-after-every-render.js`
   - **Concept**: Effect runs after every render
   - **Key Features**: Document title updates, cookie management

2. **[Conditional Run](pages/useeffect/2-conditional-run.js)**
   - **File**: `pages/useeffect/2-conditional-run.js`
   - **Concept**: Effect runs only when specific dependencies change
   - **Key Features**: Dependency array usage, performance optimization

3. **[Run Only Once](pages/useeffect/3-run-only-once.js)**
   - **File**: `pages/useeffect/3-run-only-once.js`
   - **Concept**: Effect runs only on component mount
   - **Key Features**: Empty dependency array, initialization logic

4. **[With Cleanup](pages/useeffect/4-with-cleanup.js)**
   - **File**: `pages/useeffect/4-with-cleanup.js`
   - **Concept**: Effect with cleanup function for resource management
   - **Key Features**: Event listener cleanup, memory leak prevention

5. **[Dependency Array](pages/useeffect/5-dependency-array.js)**
   - **File**: `pages/useeffect/5-dependency-array.js`
   - **Concept**: Understanding dependency array behavior
   - **Key Features**: Multiple dependencies, selective re-runs

6. **[Data Fetching](pages/useeffect/6-data-fetching.js)**
   - **File**: `pages/useeffect/6-data-fetching.js`
   - **Concept**: Fetching data from API endpoints
   - **Key Features**: Async operations, loading states

7. **[Data Fetching on Enter](pages/useeffect/7-data-fetching-on-enter.js)**
   - **File**: `pages/useeffect/7-data-fetching-on-enter.js`
   - **Concept**: Fetching data when user presses Enter key
   - **Key Features**: Event handling, conditional fetching

8. **[Data Fetching on Submit](pages/useeffect/8-data-fetching-on-submit.js)**
   - **File**: `pages/useeffect/8-data-fetching-on-submit.js`
   - **Concept**: Fetching data on form submission
   - **Key Features**: Form handling, user interaction

---

## useRef

The `useRef` hook allows you to persist values between renders and access DOM elements directly.

### Examples

1. **[Access DOM Nodes](pages/useref/1-access-dom-nodes.js)**
   - **File**: `pages/useref/1-access-dom-nodes.js`
   - **Concept**: Direct DOM manipulation using refs
   - **Key Features**: Focus management, DOM element access

2. **[Access Mutable Object](pages/useref/2-access-mutable-object.js)**
   - **File**: `pages/useref/2-access-mutable-object.js`
   - **Concept**: Storing mutable values that persist across renders
   - **Key Features**: Value persistence, avoiding re-renders

---

## useContext

The `useContext` hook allows you to consume context values without using context consumer components.

### Examples

1. **[Context Provider Pattern](pages/usecontext/index.js)**
   - **File**: `pages/usecontext/index.js`
   - **Components**: `src/Components/usecontext/ComponentA.js`, `src/Components/usecontext/ComponentB.js`, `src/Components/usecontext/ComponentC.js`, `src/Components/usecontext/ComponentD.js`
   - **Concept**: Sharing state across component tree without prop drilling using two contexts (userName and userAuthDetails)
   - **Key Features**: Multiple context providers, nested component access, state management, API data fetching

---

## useReducer

The `useReducer` hook is an alternative to `useState` for managing complex state logic with a reducer function.

### Examples

1. **[Simple Counter](pages/usereducer/1-simple-counter.js)**
   - **File**: `pages/usereducer/1-simple-counter.js`
   - **Concept**: Basic counter using reducer pattern
   - **Key Features**: Action types, state transitions

2. **[Complex Counter](pages/usereducer/2-complex-counter.js)**
   - **File**: `pages/usereducer/2-complex-counter.js`
   - **Concept**: Counter with multiple operations
   - **Key Features**: Multiple action types, complex state logic

3. **[Counter Object](pages/usereducer/3-counter-object.js)**
   - **File**: `pages/usereducer/3-counter-object.js`
   - **Concept**: Managing object state with reducer
   - **Key Features**: Object state management, nested updates

4. **[Multiple Reducers](pages/usereducer/4-multiple-reducers.js)**
   - **File**: `pages/usereducer/4-multiple-reducers.js`
   - **Components**: `src/Components/usereducer/ComponentA.js`, `src/Components/usereducer/ComponentB.js`, `src/Components/usereducer/ComponentC.js`
   - **Concept**: Using multiple reducers for different state slices
   - **Key Features**: State separation, modular reducers

5. **[Global State](pages/usereducer/5-global-state.js)**
   - **File**: `pages/usereducer/5-global-state.js`
   - **Concept**: Global state management with context and reducer
   - **Key Features**: Provider pattern, global state access

6. **[Simple Data Fetching](pages/usereducer/6-simple-data-fetching.js)**
   - **File**: `pages/usereducer/6-simple-data-fetching.js`
   - **Concept**: Data fetching with reducer for state management
   - **Key Features**: Loading states, error handling

7. **[useReducer Data Fetching](pages/usereducer/7-usereducer-data-fetching.js)**
   - **File**: `pages/usereducer/7-usereducer-data-fetching.js`
   - **Concept**: Advanced data fetching with reducer pattern
   - **Key Features**: Complex async operations, state management

---

## useMemo

The `useMemo` hook allows you to memoize expensive calculations and only re-compute when dependencies change.

### Examples

1. **[Performance Optimization](pages/usememo/index.js)**
   - **File**: `pages/usememo/index.js`
   - **Concept**: Memoizing expensive calculations to prevent unnecessary re-computation
   - **Key Features**: Performance optimization, dependency tracking

---

## useCallback

The `useCallback` hook returns a memoized callback function that only changes if dependencies change.

### Examples

1. **[With React.memo](pages/usecallback/1-with-react.memo.js)**
   - **File**: `pages/usecallback/1-with-react.memo.js`
   - **Components**: `src/Components/usecallback/Title.js`, `src/Components/usecallback/DataCounter.js`, `src/Components/usecallback/Action.js`
   - **Concept**: Demonstrates how child components re-render when parent state changes, even with React.memo
   - **Key Features**: React.memo usage, performance demonstration, re-render behavior

2. **[With useCallback](pages/usecallback/2-with-usecallback.js)**
   - **File**: `pages/usecallback/2-with-usecallback.js`
   - **Components**: `src/Components/usecallback/Title.js`, `src/Components/usecallback/DataCounter.js`, `src/Components/usecallback/Action.js`
   - **Concept**: Shows how useCallback prevents unnecessary re-renders of memoized child components
   - **Key Features**: Callback memoization, dependency arrays, performance optimization

---

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions.

### Examples

1. **[Document Title Custom Hook](pages/customhooks/1-doc-title-custom-hook.js)**
   - **File**: `pages/customhooks/1-doc-title-custom-hook.js`
   - **Components**: `src/Components/customhooks/DocTitleOne.js`, `src/Components/customhooks/DocTitleTwo.js`
   - **Hook**: `src/Hooks/useDocTitleCountHook.js`
   - **Concept**: Custom hook for managing document title
   - **Key Features**: Reusable logic, state encapsulation

2. **[Counter Custom Hook](pages/customhooks/2-counter-custom-hook.js)**
   - **File**: `pages/customhooks/2-counter-custom-hook.js`
   - **Components**: `src/Components/customhooks/CounterOne.js`, `src/Components/customhooks/CounterTwo.js`
   - **Hook**: `src/Hooks/useCounter.js`
   - **Concept**: Custom hook for counter functionality
   - **Key Features**: State management, custom logic

3. **[useInput Custom Hook](pages/customhooks/3-useinput-custom-hook.js)**
   - **File**: `pages/customhooks/3-useinput-custom-hook.js`
   - **Hook**: `src/Hooks/useInput.js`
   - **Concept**: Custom hook for form input management
   - **Key Features**: Input handling, validation, state management

---

## Quick Reference

### Hook Comparison

| Hook          | Purpose                | When to Use                     | Key Features                      |
| ------------- | ---------------------- | ------------------------------- | --------------------------------- |
| `useState`    | Local state management | Simple state updates            | Basic state, immediate updates    |
| `useEffect`   | Side effects           | Data fetching, subscriptions    | Dependency arrays, cleanup        |
| `useRef`      | Mutable references     | DOM access, value persistence   | No re-renders, direct access      |
| `useContext`  | Context consumption    | Sharing state across components | No prop drilling, global access   |
| `useReducer`  | Complex state logic    | State with multiple actions     | Action-based updates, predictable |
| `useMemo`     | Value memoization      | Expensive calculations          | Performance optimization          |
| `useCallback` | Function memoization   | Preventing re-renders           | Dependency tracking               |

### Performance Tips

- Use `useMemo` for expensive calculations
- Use `useCallback` for function props in memoized components
- Use `useRef` for values that don't need to trigger re-renders
- Use `useReducer` for complex state logic
- Use `useContext` to avoid prop drilling

### Best Practices

- Keep hooks at the top level of components
- Use descriptive names for custom hooks
- Always include dependency arrays in `useEffect` and `useCallback`
- Return cleanup functions from `useEffect` when needed
- Use TypeScript for better type safety with hooks

---

## Running the Application

To run this React Hooks examples application:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:4040`

The application uses Next.js with Chakra UI for styling and provides an interactive way to explore each React hook with practical examples.
