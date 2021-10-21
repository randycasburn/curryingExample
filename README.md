A very common question in the JavaScript community relates to the practical use of Currying functions. In this very short article I hope I can help with an explanation.

Let me set up one of two scenarios first.

1. We have a RESTful backend that allows no filtering. In other words, you must retrieve the entire dataset and filter yourself.
2. There is a requirement to gather the entire dataset and filter client side.

Either way, let's say there are several filtering requirements that will be used throughout the application. Examples include:

- Very large posts
- Small posts
-Posts from a specific userId
- Posts with certain content in the title
- Very long posts from a specific userId with certain content in the title
- I'm certain you get the idea. One can easily use Array.Prototype.filter() for each of these requirements. But what about not repeating yourself (DRY principle)? - One can image writing and rewriting the same filter code over and over again.

Enter the concept of currying. I invite you to take a look at the linked Plunker I put together to help explain a practical use of currying. I've separated out the various MVC type concerns so one may concentrate on the utility provided by the currying functions. The small app is comprised of:

- index.html
- main.js - Main function utilizes the currying functions in concert with Array.Prototype.filter()
- Posts.js - Pseudo Model that contains all the currying functions with comments
- View.js - Outputs content to both browser and console.
- I hope you find this example demonstrates a practical use of currying and that it is helpful and instructive.

[Working GitHub Pages](https://randycasburn.github.io/curryingExample/)

Working Plunker: [A practical example of a Model using Currying](http://plnkr.co/edit/Jqbu07cd9bFFTMtVrz5c?p=preview)
