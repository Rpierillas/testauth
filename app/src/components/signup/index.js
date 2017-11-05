/*
 * Npm import
 */

import React from 'react';

/*
 * Component Import
 */
import SignUpForm from 'src/components/signup/SignUpform';

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


      // create a string for an HTTP body message
      const name = encodeURIComponent(this.state.user.name);
      const email = encodeURIComponent(this.state.user.email);
      const password = encodeURIComponent(this.state.user.password);
      const formData = `name=${name}&email=${email}&password=${password}`;

      // create an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open('post', '/auth/signup');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
        // success

        // change the component-container state
          this.setState({
            errors: {},
          });

          // set a message
          localStorage.setItem('successMessage', xhr.response.message);

          // make a redirect
          this.context.router.replace('/login');
        }
        else {
        // failure

          const errors = xhr.response.errors ? xhr.response.errors : {};
          errors.summary = xhr.response.message;

          this.setState({
            errors,
          });
        }
      });
      xhr.send(formData);

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
