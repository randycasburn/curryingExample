import { getPosts, limit, postGTSize, postLTSize, userPosts, postTitleIncludes } from './Posts.js';
import { output } from './View.js';

getPosts('https://jsonplaceholder.typicode.com/posts', main);

function main(posts) {
  let first3Posts = posts.filter(limit(3));
  let longPosts = posts.filter(postGTSize(125));
  let user1Posts = posts.filter(userPosts(1));
  let temporaTitle = posts.filter(postTitleIncludes('tempora'));

  let longPostsLimit = longPosts.filter(limit(3));
  let veryLongUser9Posts = posts.filter(userPosts(9)).filter(postGTSize(190));
  let shortUser2TemporaInTitle = posts.filter(userPosts(2)).filter(postTitleIncludes('tempora')).filter(postLTSize(160));

  output(first3Posts, longPosts, user1Posts, temporaTitle, longPostsLimit, veryLongUser9Posts, shortUser2TemporaInTitle);

}
