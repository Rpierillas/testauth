/*
 * Npm import
 */
import React from 'react';


/*
 * Code
 */

const Home = ({ secretData }) => (
  <div id="home">
    <div id="app-hello">This is the home page</div>
    {secretData}
  </div>
);


/*
 * Export default
 */
export default Home;
