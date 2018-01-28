import React from 'react';
import UserDetail from 'components/UserDetail';

const UserList = ({users}) => {
    let userList;
    if (users && users.length) {
        userList = users.map((user) => (
        <UserDetail
            key={`UserList_${user.id}`}
            avatar={user.avatar_url}
            name={user.login}
        />));
    }
    return (
        <div className="container">
            <div className="row">
                {userList}
            </div>
      </div> 
    );
};

export default UserList;