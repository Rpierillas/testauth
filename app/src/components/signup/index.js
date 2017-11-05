/*
 * Npm import
 */

import React from 'react';

/*
 * Component Import
 */

import SignUpForm from 'src/components/signup';

/*
 * code
 */
class SignUpPage extends React.Component {
// set the initial component state
    state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: '',
      },
    };
  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
    changeUser = (event) => {
      const field = event.target.name;
      const { user } = this.state;
      user[field] = event.target.value;

      this.setState({
        user,
      });
    }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
    processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
      event.preventDefault();

      console.log('name:', this.state.user.name);
      console.log('email:', this.state.user.email);
      console.log('password:', this.state.user.password);
    }

  /**
   * Render the component.
   */
    render() {
      return (
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      );
    }
}

export default SignUpPage;
