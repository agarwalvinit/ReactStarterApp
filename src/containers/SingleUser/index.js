import React from 'react';
import Heading from 'components/Heading';

import './style.css';
export default class SingleUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }
    componentDidMount (){
        const {pathname} = this.props.location;
        const userId = pathname.split('/')[2];
        const url = `https://api.github.com/user/${userId}`;
        fetch(url).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => this.setState({user: response}));
    }

    handleClick = () => {
        this.props.history.push('/users');
    }

    render(){
        const {user} = this.state;
        const {props} = this;
        console.log('props: ', props);
        if (user) {
            return (
             <div className="card">
             <img className="card-img-top" src={user.avatar_url} alt="Card image cap" />
             <div className="card-body">
               <h5 className="card-title">{user.name.replace('-', ' ')}</h5>
               <p className="card-text">{user.location}</p>
               <button type="button" className="btn badge-button btn-primary">
               Public Gists 
                <span className="badge badge-light">{user.public_gists}</span>
                </button>
                <button type="button" className="btn badge-button btn-primary">
                Public Repos 
                <span className="badge badge-light">{user.public_repos}</span>
                </button>
                <button type="button" className="btn badge-button btn-primary">
                Followers 
                <span className="badge badge-light">{user.followers}</span>
                </button>
                <button type="button" className="btn badge-button btn-primary">
                Following 
                <span className="badge badge-light">{user.following}</span>
                </button>
               <a onClick={this.handleClick} className="btn btn-link">Go Back</a>
             </div>
           </div>
            );
        }
        return <div>Please wait loading</div>
    }
};