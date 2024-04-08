
EXPRESS JS
    - with node js you have to write of crunchy codes
    - what is express.js?
    - Middle ware
    - requsts and responses 
    - Routing 
    - api route hand
    - btw how do you write backend in next.js, it is a full stack frame work which sytax do we use for doin that
    - reuturning html file pages


frame work - express.js
    - express.js without having the express.js
    - express.js is not just used during production it is to be used during the production deployment also so we have to install it on the system as well 


MIDDLE WARE

the incomming request is automatically funneled through a buch of functions
muliple function
    - request is funneled thorugh these then send res
    - you travel from middleware to middle ware using next

HANDLING INCOMMING REQUESTS

    - EXPRESS.JS is all about MIDDLE WARE
    - REQUEST -> MIDDLEWARE -> MIDDLE WARE -> RESPONSE


APP.USE 
    - every use of the app.use creates a new middle ware 
    - i.e the function that will be called whenver that path is reached 
    - anothe thing for the paht it does not have to be the absolute path
        - if the thing starts with the '/' -- then any time any path that will be started with the '/' -- this code will be executed 
        - so it just need to start with that thing for it to be executed


RERUN
    - helps you shorten things  
    - we want to focus on the main things only
    - frame work = is a set of helper functions
    - there are a lot of third party things that are here to make
    
    we are going to use --save not --save-dev becuase this will be a production dependecy
    
    express exprorts a function  - to initalize a new object : where things will be managed bts


    MIDDLE WARE

    when request is passed to a backend - it goes through a buch of function before sending back the response 
    - thrid party packeages can give you middle ware


    // app.use is used to create a new middle ware function
        // app.use accepts first the path to which it should receive the order from basicaly what order matter wether
        // even if we have a function which - is being activated complety different handle we still have to call NEXT()  to ensure the transimission
        // jumping from middle ware to middle ware using the next

    // HANDLING ROUTES AND INCOMMING ROUTES 
        //  we have an optional first argument -- which accepts the path 
        // then the second argument and so on are all callback functions
        // like this we can funnel the request

INCOMMING REQUEST




MODEL VIEW CONTROLLER (MVC)

    MODELS: - data to or from a file
        - objects
        - data
        - save/fetch data... to and from a file
    VIEWS: - what the user sees
        -  deccoupled from the application code
        - things that are rendererd
    CONTROLLER : - connecting the model and the views
        - routes, so we are here to make this one   


ROUTER
    - if i go down the react way this is going to take time and shit am going to have to switch to the other next.js it is simpler and sucks less
    - naah this is just a COPING MECAHNIAH