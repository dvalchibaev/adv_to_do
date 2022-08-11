import React from 'react';
import './App.css';
import UserList from './components/User.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'users': []
    };
  }

  componentDidMount(){
    const users = [
      {
        'user_name':'user1',
        'first_name':'Иван',
        'last_name':'Иванов',
        'email_address':'user1@todo.net',
      }
    ]
    this.setState(
      {
        'users': users
      }
    )
  }

  render(){
    return(
      <div>
        <UserList users={this.state.users}/>
      </div>
    )
  };
}


export default App;
