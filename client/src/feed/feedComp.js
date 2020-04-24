import React, { Component } from 'react';

class feedComp extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/feed/ab')
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then(data => {
            // const { posts } = { ...this.state };
             
            console.log(data.data);
            this.setState({
                posts: data.data 
            });

        })
    }

    render() {
        return(
        <React.Fragment>
            <h1>Hello</h1>
            {this.state.posts.map(story => {
                return <p>{story.title}</p>
                // <p>{story.link}</p>
                
            })}
        </React.Fragment>
        );
    }
}

export default feedComp;