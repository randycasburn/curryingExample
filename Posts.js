/**
 * A Posts Model implementation showing the use of Currying functions
 * 
 * Each Curry method provides a callback for the Array.prototype.filter method
 */

/**
 * Only returns first n records
 * 
 * @param int n - the number of records to return
 */
export var limit = n => (arr, i) => i < n;
/**
 * Returns records with body >= provided length
 * 
 * @param int length - the length to eval
 */
export var postGTSize = length => obj => obj.body.length >= length;
/**
 * Returns records with body <= provided length
 * 
 * @param int length - the length to eval
 */
export var postLTSize = length => obj => obj.body.length <= length;
/**
 * Returns records from userID id
 * 
 * @param int id - the userId property to match
 */
export var userPosts = id => obj => obj.userId == id;
/**
 * Returns records with title that includes str
 * 
 * @param string str - the string to search for in the title
 */
export var postTitleIncludes = str => obj => obj.title.includes(str);

/**
 * Various AJAX methods used for CRUD ops
 * 
 * Only GET method is used for demo purposes
 */ 

export function getPosts(url, callback) {
  fetch(url)
    .then(result => result.json())
    .then(callback);
}
