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
const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div className="login">
    <form onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      <div className="field-line">
        <input
          placeholder="Email"
          name="email"
          //errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={onChange}
          //errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <button type="submit" label="Log in" />
      </div>

      <p>Don't have an account? Create one.</p>
    </form>
  </div>
);

/*
 * export default
 */
export default LoginForm;
