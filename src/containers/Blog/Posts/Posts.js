import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

state = {
    posts: []
};

componentDidMount = () => {
    axios
        .get('https://simple-blog-api.crew.red/posts')
        .then( resp => {
            this.setState({ posts: resp.data })
        })
        .catch( err => console.log(err))
}

selectedPost = (id) => {
    this.props.history.push('/' + id)
}

    render() {
        let posts = 'Loading';

        if (this.state.posts.length) {
            posts = (
                this.state.posts.map( post => {
                    return <Post selected={ () => this.selectedPost(post.id)}
                     key={post.id} body={post.body} title={post.title} />
                })
            )
        }

        return(
            <React.Fragment>
                <section className='Posts'>
                    <h1>Posts</h1>
                    <div className='all-posts'>
                        {posts}
                    </div>
                </section>
            </React.Fragment>
        )
    }
};

export default Posts;