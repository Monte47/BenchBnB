import { Link } from 'react-router-dom';
import React from 'react';

class sessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(()=> this.setState({
        username: "",
        password: ""
      }));
  }

  handleUpdate(key) {
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  render() {
    let heading;
    let linkRoute;
    let linkText;
    if(this.props.formType === '/login') {
      heading = "Login";
      linkRoute = "/signup";
      linkText = "Sign Up";
    } else {
      heading = "Sign Up";
      linkRoute = '/login';
      linkText = "Log In";
    }
    // let heading = this.props.formType === '/login' ? "Login" : "Sign Up";
    return(
      <div>
        <h2>{heading}</h2>
        <Link to={linkRoute}>{linkText}</Link>
        <ul>
          {this.props.errors.map( (error, i) => <li key={i}>{error}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            onChange={this.handleUpdate('username')}
            value={this.state.username}/>

          <label>Password: </label>
          <input
            onChange={this.handleUpdate('password')}
            value={this.state.password}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default sessionForm;
