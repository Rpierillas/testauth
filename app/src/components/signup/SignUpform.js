/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */


/*
 * Code
 */
const SignUpform = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div className="signup">
    <form onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>



      <div className="field-line">
        <input
          placeholder="Name"
          name="name"
        //  errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

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
        <button type="submit" label="Create New Account"> OK </button>
      </div>

      <p>Already have an account? Log in </p>
    </form>
  </div>
);

SignUpform.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

/*
 * Export default
 */
export default SignUpform;
