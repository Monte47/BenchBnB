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
    return(
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
    );
  }
}

export default sessionForm;
