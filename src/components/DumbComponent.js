import React from 'react';

/**
 * I'm a dumb component/functional component/stateless component
 */
const DumbComponent = function(props) {
    const { title, clickHandler } = props; // this is called destructuring. one of the new features of javascript and frequently asked interview question

    return (
        <div class="box">
            <h4>{title}</h4>
            <button onClick={clickHandler}>Click me</button>
            <h5>I'm a dumb/functional/stateless component</h5>
        </div>
    )
}

/* below line is very important. you may be having hundereds of functions in this file, but what you export below
is the only function that your parent can access */
export default DumbComponent;