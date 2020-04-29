import React, { Component } from 'react';
import Card from '../card/Card';

class feedComp extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            posts: [],
            error: false
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:4000${this.props.location.pathname}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let newsPosts = data.slice(0,15)
            this.setState({
                posts: newsPosts 
            });

        })
        .catch(err => {
            console.log(err);
            this.setState({
                error: true
            })
        })
    }

    storySelectedHandler = (id) => {

    }

    render() {
        return(
        <React.Fragment>
            <h1>Hello</h1>
            {this.state.posts.map(story => {
                return <Card key={story.id} {...story} />
            })}
        </React.Fragment>
        );
    }
}

export default feedComp;