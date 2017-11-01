/*
 * Npm import
 */


/*
 * Local import
 */


/*
 * Code
 */
const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    default:
      console.log(action);
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default createMiddleware;
