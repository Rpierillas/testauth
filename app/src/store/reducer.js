/*
 * Initial state
 */
const initialState = {};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const doSomething = () => ({
  type: 'DO_SOMETHING',
});
