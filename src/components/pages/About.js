import React from 'react'

function About() {
    return (
        // React requires returned content to be wrapped in an element like <div>
        // If you don't want a wrapping element you can use <React.Fragment> to
        // satisfy React's requirement
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0.  It is part of
                a React crash course.</p>
        </React.Fragment>
    )
}

export default About;