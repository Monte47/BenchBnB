import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentUser) {
      return(
        <div>
          <h2>Welcome to the bench, {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
          <br/>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }
}

export default Greeting;
