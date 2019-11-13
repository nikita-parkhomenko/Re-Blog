import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        redirect: false
    }

    createPostHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        axios.post('https://simple-blog-api.crew.red/posts', post)
            .then( resp => {
                console.log(resp);
                this.setState({ redirect: true })
            })
            .catch(err => console.log(err))
    }
    render() {
        let redirect = this.state.redirect ? <Redirect to='/' /> : null;
        return(
            <section className='NewPost'>
                {redirect}
                <h1>Create a new post</h1>
                <label>Title</label>
                <input type='text' value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows='4' type='text' value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
                <button onClick={this.createPostHandler}>Create new post</button>
            </section>
        )
    }
};

export default NewPost;
