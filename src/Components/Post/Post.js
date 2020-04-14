import React from 'react'
import styles from './Post.module.css';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import { postTime } from "./Time";

const Post = (props) => {
    const postCreateTime = new Date(props.post.created * 1000);
    const postedTime = postTime(postCreateTime);

    // if post hint is an image, display the media below the title 
    const contentType = props.post.hint; 
    let imageDisplay;

    if (contentType === 'image') {
        imageDisplay = 
            <div className={styles.image}>
                <h1>{props.post.title}</h1>
                <img 
                src={props.post.url} 
                alt={props.post.title}
                />
            </div>
    } else if (contentType === 'rich:video') {
        let redditVideo = props.post.media.oembed.thumbnail_url
        imageDisplay = 
            <div className={styles.image}>
                <h1>{props.post.title}</h1>
                <img src={redditVideo} alt={props.post.title}/>
            </div>  
    } else if (contentType === 'hosted:video') {
        let redditVideo = props.post.media.reddit_video.scrubber_media_url;
        imageDisplay = 
            <div className={styles.video}>
                <h1>{props.post.title}</h1>
                <Player
                playsInline
                autoPlay
                fluid={true} 
                src={redditVideo} 
                alt={props.post.title}
                />
            </div>
    }
    else {
        // thumbnail
        imageDisplay = 
            <div className={styles.thumbnail}>
                <h1>{props.post.title}</h1>
                <img
                poster={props.post.thumbnail} 
                src={props.post.thumbnail} 
                alt="thumbnail" 
                />
            </div>
    }

    return (
        <a href={"http://reddit.com" + props.post.permalink}>
        <div className={styles.Post}>
            <div className={styles.Score}>
                <p>{props.post.score}</p>
            </div>
            <div className={styles.PostHeader}>
                <p>{props.post.subreddit}</p>
                <p>Posted by {props.post.author} {postedTime} ago</p>
                <p>{props.post.hint}</p>
            </div>
            {imageDisplay}
        </div>
        </a>
    );
}

export default Post;