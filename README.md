

# Now Serving
A simple web application to remove the need for physical line ups where humans tend to form them. 


## Live Demo
The current version (very much a work in progress) is hosted on [Heroku](http://rocky-savannah-9175.herokuapp.com/nowserving.html)


## Status
This project is a work in progress and is not yet in a minimal viable product state. I will be continuing development as time permits. 

### What's working:
- Basic CRUD operations on waiting items
- All persistence is currently client side in the browser only
- Some test coverage in place

### What's next:
- Implement RESTful interfaces with MongoDB persistence on server side
- Complete test coverage on client and server side
- Tidy up client side interface and improve responsiveness (support for mobile/tablet/etc)


## Building, Testing, and Running
In a terminal with Grunt installed, build, test, and watch for changes with one command:

```
Grunt
```

Then in another terminal, run the app with:

```
node app
```

and visit [http://localhost:3000/nowserving.html](http://localhost:3000/nowserving.html). 


## Developing
Since this project is at an early stage, if you'd like to help out with new features then please contact me directly to discuss. 
If you find an issue, please log it or send me a pull request. 