import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="story">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p className="content">{props.content}</p>
            <div className="options">
                <a href={props.link}>Link</a>
                <p>Comments</p>
                <p>Favorites</p>
            </div>
        </div>
    );
}

export default Card;