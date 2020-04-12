import React from 'react'
import Post from '../Post/Post';
import styles from './Feed.module.css';

const Feed = (props) => {
    return (
        <div className={styles.Feed}>
            {props.posts.map(post => {
                return (
                    <Post 
                    post={post}
                    key={post.title}
                    />
                )
            })}
        </div>
    );
}

export default Feed;