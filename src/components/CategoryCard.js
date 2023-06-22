import React from 'react';

function CategoryCard(props) {
    return (
        <div className='rounded-xl drop-shadow border-solid border-[1px] border-light-gray  w-[100%] bg-white mb-10'>
            <div className={props.twGradient + ' bg-gradient-to-br h-[80px] w-full border-b-[1px] flex justify-center items-end rounded-tr-xl rounded-tl-xl'}>
                <div className='bg-white drop-shadow h-[80px] w-[80px] rounded-full flex text-3xl border-b-[1px] border-solid justify-center items-center mb-[-40px]'>
                    <img src={props.icon} className='h-[60%] w-[60%] top-0'/>
                </div>
            </div>
            <div className='px-[50px] pt-[56px] pb-8'>
                <h1 className='belleza text-3xl text-center'>{props.name}</h1>
                <p className='mb-6 text-center'>{props.description}</p>
                {props.children}
            </div>
        </div>
    );
}

export default CategoryCard;