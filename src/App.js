import Users from './data/details';
import './App.css';
import React, { Component } from 'react';
import logo from './images/logo.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_data : [],
      loading : true
    }
    this.displayUsers = this.displayUsers.bind(this)
  }

  displayUsers() {
    document.getElementById("main").style.display = 'flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
    .then(response => response.json())
    .then((users) => {
      this.setState({
        user_data : users.data,
        loading : false
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
      <>
        <nav>
        {/* <img src = {logo} alt = "LGM-Logo" width="200" className="logo" /> */}
        <div className="container">
           <img src = {logo} alt = "LGM-Logo" width="200" className="logo" /> 
            <h3>Our Team</h3>
            <center><button onClick={this.displayUsers} users={this.state.user_data}> Get Users</button></center>
            
          </div>
          </nav>
        <Users loading = {this.state.loading} users = {this.state.user_data} />
      </>
    )
  }
}


export default App;
