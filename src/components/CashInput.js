import React from 'react';

function CashInput(props) {
    return (
        <div>
            <p className='font-bold'>{props.label}</p>
            <input type='number' onChange={props.onChange} placeholder={props.placeholder} className='w-full px-3 py-3 border-[1px] rounded-lg border-slate-300 mb-8'></input>
        </div>
    );
}

export default CashInput;