/*
*
 */
import React from 'react';

/*
 * local import
 */
import LoginForm from 'src/components/login';


class LoginPage extends React.Component {
    // set the initial component state
    state = {
      errors: {},
      user: {
        email: '',
        password: '',
      },
    };


  /**
   * Process the form.
   */
  processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }

  /**
   * Change the user object.
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
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}


export default LoginPage;
