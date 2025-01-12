# NOTICE: This will not be updated for a while. I'm spending as much of my time as possible on other projects. For now use React, there isn't a better option out there atm
# About the project
Helium is a WIP web framework intending to make web development more simplified rather than complicated. One of the big things I've grown to hate about current web frameworks is their over saturated terminology. React has two ways to create components both with their own set of terminology when creating them, too many differant ways to handle web APIs, atleast three/four differant options that I've seen for state management, and overall it feels far more complicated than needed. Angular being even more so over complicated. There is alot of over complication involved and many differant things to go over.

Helium is intended to be stupid simple to the point any basic developer with little experiance can jump right in and for the most part know the majority of the frameworks features without spending more than a couple days reading the docs. That is how simple this is aiming to be, while at the same time offering the same benefits in regards to scalability and performance that one would get from either React or Vue.

That's just the front end, we've not even gotten involved with backend stuff like restAPI, databases, sockets, or other things like that. After the front end portion is done this framework is intended to provide the same simplicity for the frontend AND backend.


# Core Feature Requirements:
1. Clientside Routing - Basic routing for pages like other frameworks, this will be very similar to react.
2. State Management - A performant state management system very similar to Redux but with some differences. Goal being that it can work well for simple and complex data being stored and manipulated.
3. RestAPI - This requirement may change, but something I feel like at least seeing if it's simpler to work with is a API controller of sorts for interacting with an API on your behalf.
4. Built-in Internationalization - Something very important to alot of companies I've noticed is internationalization. I intend to have built in internationalization in an extremely simplified form.
5. Building with Webpack and Babel - Basic building just like with React to provide an extremely efficient production build for the web application.
6. Virtual DOM and JSX - This one is seeming to be a little complex to implement ATM but I intend to implement JSX for component rendering, this way migration from React to Helium will be extremely quick and easy.
7. Lazy Loading - Same as with lazy loading in React.
8. CSS HTML and JS within same file - Basically just like with Vue, but more similar to how a react component file is written
9. Class Components Recommended - Classes to me are more organized and universally understood even outside of web development. While React seems to feel otherwise, I don't particularly plan to implement functional components anytime soon, MAYBE in the future but at this time no.


# Components:
Components are only written as classes, no function style components. Components can be stateful or stateless depending on implementation of the component. Components are similar to react class components in terms of using them and writing them, with the added benefit of writing your CSS, JS and HTML within the same file including the internationalization for the component. JSX is on the todo list as well to further ease transition away from React.


# HTTP requests and APIs:
This feature may be scrapped later or made optional. Helium has a HTTPController class used for creating controllers for differant RestAPIs.


# State Management:
Helium implements it's own state management inspired by Redux Toolkit, this way there is no confusion or differing methods for the state management of the application.


# Routing:
Helium has a router class on the todo list to handle clientside routing in a similar manner to React. Complete with lazy loading of the routes.


# Internationalization:
Helium intends to support internationalization without the need to complicate things with a third party library. Internationalization can be handled through globally available internationalization files or within a component file.


# Bundling:
Helium has webpack on the todo list to be implemented along side babel. Building result identical to React applications.


# DOM and Virtual DOM
Helium implements its own virtual dom, currently in a simple form that will evolve further later as needed. The end goal is to have this as efficient as possible and very similar to React.


# Typescript:
Helium does not utilize Typescript, nor is it planned or desired. Javascript is dynamically typed, and Helium aims to not implement things unless they are needed. This way development remains simple. One of the things I've started to notice is Typescript slows down development compared to manually type checking as needed. As such I don't intend to utilize it.


# TODO LIST:
1. Implement JSX
2. Implement Webpack and Babel
3. Implement Internationalization
4. Implement Clientside Routing
5. Refine State Management
6. Refine HTTPController class
7. Refine Component class
8. Implement testing via Jest
9. Implement https://babeljs.io/docs/babel-plugin-syntax-jsx or https://chriscoyier.net/2023/08/07/jsx-without-react/ or https://nakedjsx.org/
10. Fully build out the TODO LIST section


