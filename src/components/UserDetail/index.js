import React from 'react';
const UserDetail = (props) => (
<div className="col-sm-4 card" style={{width: '18rem'}}>
    <img className="card-img-top" atl={props.name} src={props.avatar} alt="Card image cap" />
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{'sd'}</p>
    <a href={`/users/${props.id}`} className="card-link">Who is this?</a>
</div>
);

export default UserDetail;