/*
*npm import
 */
import React from 'react';
/*
* local import
 */
import Auth from 'src/modules/Auth';
import Home from 'src/components/Home/Home';
/*
*code
 */

class HomePage extends React.Component {
  /**
   * Class constructor.
   */
   state = {
     secretData: '',
   };
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/Home');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
        });
      }
    });
    xhr.send();
  }
  /**
   * Render the component.
   */
  render() {
    return (
      <Home
        secretData={this.state.secretData}
      />
    );
  }
}

export default HomePage;
