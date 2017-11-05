/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from './reducer';
import example from './middleware-example';


/*
 * Code
 */
// DevTools
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Enhancers
const exampleMiddleware = applyMiddleware(example);
const enhancers = compose(exampleMiddleware, ...devTools);

// Store
const store = createStore(reducer, enhancers);


/*
 * Export default
 */
export default store;
