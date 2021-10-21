export function output(...args) {
  let outputTags = document.querySelectorAll('p span');
  for (let i = 0; i < args.length; i++) {
    outputTags[i].textContent = args[i].length;
  }
  log(args);
}

function log(args) {
  console.clear();
  console.log('First three posts length: ' + args[0].length);
  console.log('Number of long posts: ' +  args[1].length);
  console.log('Number of UserId 1 posts: ' +  args[2].length);
  console.log('Number of posts with "tempora" in title: ' +  args[3].length);

  console.log('Number of long posts limited to 3: ' +  args[4].length);
  console.log('Number of very long userId 9 posts: ' +  args[5].length);
  console.log('Number of short userId 2 posts with "tempora" in title: ' +  args[6].length);
}
