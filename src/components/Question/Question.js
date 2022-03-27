import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className="question-container">
           <div className="single">
           <h2>1.How React Work?</h2>
           <p>React is a JavaScript library [not a framework] that creates user interfaces - UIs in a predictable and efficient way using declarative code. You can use it to help build single page
            ther libraries</p>
           </div>

           <div className="single">
               <h2>2.Props vs State</h2>
               <p>State: is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used and modified inside the component.</p>
               <p>Props: make components reusable by giving components the ability to receive data from the parent component in the form of props.
                    hanged</p>
           </div>
        </div>
    );
};

export default Question;