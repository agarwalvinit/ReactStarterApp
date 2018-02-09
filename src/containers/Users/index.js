import React from 'react';
import UserList from 'components/UserList';

export default class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount (){
        const url = 'https://api.github.com/users'
        fetch(url).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => this.setState({users: response}));
    }
    
    render(){
        const { users } = this.state;
       return <UserList users={users} />
    }
};