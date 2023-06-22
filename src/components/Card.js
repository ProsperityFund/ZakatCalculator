import React from 'react';

function Card(props) {
    return (
        <div className='rounded-lg drop-shadow px-[50px] py-8 w-[100%] bg-white mb-10'>
            {props.children}
        </div>
    );
}

export default Card;