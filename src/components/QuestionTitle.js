import React from 'react';

function QuestionTitle(props) {
    return (
        <h1 className='text-center belleza text-2xl'>
            {props.children}
        </h1>
    );
}

export default QuestionTitle;