import React from 'react';

const User = (props) => {
    let data = props.data; 
    let clickMe = props.clickHandlers;


    return (
        <div>
            <div>
                <img src={data.picture.large} alt={data.name.title} />
                <h2>Name: {data.name.title} {data.name.first} {data.name.last}</h2>
                <p>Username: {data.login.username}</p>
                <p>ID: {data.id.name}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
                <p>DOB: {data.dob.date} ({data.dob.age})</p>
                <p>Location: {data.location.city}, {data.location.state}, {data.location.country}, {data.location.postcode}</p>

                <button onClick={clickMe}>
                    Click Me
                </button>
            </div>
        </div>
    );
};

export default User;
