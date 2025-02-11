import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css'

class Blog extends Component {
    render() {
        return(
            <div className='Blog'> 
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink exact to='/' > All Posts </NavLink> </li>
                            <li> <NavLink to='/new-post' > New Post </NavLink> </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/' component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route exact path='/:id' component={FullPost} />
                </Switch>
            </div>

        )
    }
};

export default Blog;