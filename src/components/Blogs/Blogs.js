import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className="ques-ans">
                <h1>
                    Q1: What is The purpose of React Route?
                </h1>
                <p>
                    <strong>Answer:</strong> Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page.
                </p>
            </div>
            <div className="ques-ans">
                <h1>
                    Q2: How does Context API work?
                </h1>
                <p>
                    <strong> Answer:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children.
                </p>
            </div>
            <div className="ques-ans">
                <h1>
                    Q3: What is useRef hook?
                </h1>
                <p>
                    <strong>Answer:</strong> The useRef hook is the new addition in React 16.8. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.


                </p>
            </div>
        </div>
    );
};

export default Blogs;