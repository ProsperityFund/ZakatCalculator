import React from 'react';
import TheProsperityFundLogo from '../assets/TheProsperityFundLogo.svg'
import ToggleButton from '../components/ToggleButton';
import CenteringSpacer from '../components/CenteringSpacer';
import Card from '../components/Card';

function Calculator() {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <div className="flex">
                <CenteringSpacer />
                <div className='flex-1 py-8'>
                    <div className='w-[100%] flex justify-center mb-8'>
                        <img src={TheProsperityFundLogo} className="min-w-[150px]"></img>
                    </div>
                    <div className='rounded-lg drop-shadow px-[50px] py-8 w-[100%] mb-16 bg-gradient-to-l from-[#63C8FC] to-[#68DFEA]'>
                        <p className='text-white text-center text-4xl'>Zakat Calculator</p>
                        <p className='text-white text-center text-md'>Don’t know how to calculate your Zakat obligation? We can walk you through it.</p>
                    </div>
                    <Card>
                        <p>Do you own cash?</p>
                    </Card>
                    <Card></Card>
                </div>
                <CenteringSpacer />
            </div>
        </div>
    );
}

export default Calculator;