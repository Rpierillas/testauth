/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import HomePage from 'src/components/Home';
import LoginPage from 'src/components/login';
import SignUpPage from 'src/components/signup';
/*
 * Code
 */
const App = () => (
  <div id="main">
    <HomePage />
    <LoginPage />
    <SignUpPage />
  </div>
);


/*
 * Export default
 */
export default App;
