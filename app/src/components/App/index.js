/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */


/*
 * Code
 */
const App = () => (
  <div classNameName="main">
    <h1>Register Login Widget</h1>
    <div classNameName="w3">
      <div className="signin-form profile">
        <h3>Login</h3>
        <div className="login-form">
          <form action="#" method="post">
            <input type="text" name="email" placeholder="E-mail" required="" />
            <input type="password" name="password" placeholder="Password" required="" />
            <div className="tp">
              <input type="submit" value="LOGIN NOW" />
            </div>
          </form>
        </div>
        <div className="header-social wthree">
          <a href="#" className="face"><h5>Facebook</h5></a>
          <a href="#" className="goog"><h5>Google+</h5></a>
          <div className="clear" />
        </div>
        <p><a href="#"> Don't have an account?</a></p>
      </div>
    </div>
    <div className="agile">
      <div className="signin-form profile">
        <h3>Register</h3>
        <div className="login-form">
          <form action="/" method="post">
            <input type="text" name="email" placeholder="E-mail" required="" />
            <input type="text" name="username" placeholder="Username" required="" />
            <input type="password" name="password" placeholder="Password" required="" />
            <input type="password" name="passwordConf" placeholder="Confirm Password" required="" />
            <input type="submit" value="REGISTER" />
          </form>
        </div>
        <p><a href="#"> By clicking register, I agree to your terms</a></p>
      </div>
    </div>
    <div classNameName="clear" />
  </div>
);


/*
 * Export default
 */
export default App;
