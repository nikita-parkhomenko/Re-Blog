import React from 'react';

import './Post.css';

const Post = (props) => {
    return(
        <article onClick={props.selected} className='Post'>
            <h1> {props.title} </h1>
            <div>
                <p> {props.body} </p>
            </div>

        </article>
    )
};

export default Post;