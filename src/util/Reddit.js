// const snoowrap = require('snoowrap');
// const clientID = "P2HXDS5EHDX2SA";
// const clientSecret = "jpksl6bGscFjSrEd8NMDJLzcHco";
// const redirectURI = "http://localhost:3000/";

// const REDDIT_ACCESS_TOKEN_URL = 'https://www.reddit.com/api/v1/access_token'
// const APP_ONLY_GRANT_TYPE = 'https://oauth.reddit.com/grants/installed_client'

// const r = new snoowrap({
//     userAgent: 'Lurker 1.0 by /u/AtomicPhos',
//     clientId: clientID,
//     clientSecret: clientSecret,
//     refreshToken: '',
// });

// const dataStore = window.localStorage;


// const subreddits = ['all'];


// const tokenDuration = 'permanent';
// const tokenScope = 'mysubreddits';

const Reddit = {

    async fetchSubreddit(url) {
        try {
            const response = await fetch(`https://www.reddit.com/r/${url}.json`)
            const jsonResponse = await response.json();
            console.log(jsonResponse.data);
            if (jsonResponse.data) {
                console.log('working')
                return jsonResponse.data.children.map(post => ({
                    title: post.data.title,
                    subreddit: post.data.subreddit_name_prefixed,
                    score: post.data.score,
                    thumbnail: post.data.thumbnail,
                    num_comments: post.data.num_comments,
                    created: post.data.created,
                    url: post.data.url,
                    hint: post.data.post_hint,
                    author: post.data.author,
                    permalink: post.data.permalink,
                    
                }))
            };
        } catch (error) {
            console.log(error)
        }
    }

}
export default Reddit;