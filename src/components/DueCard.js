import React from 'react';
import DueCardCategoryTitle from './DueCardCategoryTitle';
import DueCardLine from './DueCardLine';

function DueCard(props) {


var zakatableWealth = ((props.cash + props.gold + props.silver + props.cryptoWallet + props.stockPortfolio + props.dividendsPayout + props.pensionFunds + props.investmentProperties + props.rentalCashflow + props.debtsOwed) - (props.propertyExpenses + props.debt + props.rentOrMortgage + props.utilities + props.car + props.grocery + props.insurance));
 return (
    <div className='rounded-xl drop-shadow border-solid border-[1px] border-light-gray w-[100%] bg-white mb-10 '>
        <div className='px-[80px] py-[50px] text-left border-b-[1px]'>
            <DueCardCategoryTitle alternateStyle={true} color="text-green-500" categoryTitle="Cash"></DueCardCategoryTitle>
            <DueCardLine alternateStyle={false} lineTitle="Cash Value" wealthEffect={props.cash || 0} isDeduction={false}/>
            <DueCardCategoryTitle alternateStyle={true} color="text-blue-300" categoryTitle="Jewelry" ></DueCardCategoryTitle>
            <DueCardLine alternateStyle={false} lineTitle="Gold" wealthEffect={props.gold || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={true} lineTitle="Silver" wealthEffect={props.silver || 0} isDeduction={false}/>
            <DueCardCategoryTitle alternateStyle={false} color="text-red-400" categoryTitle="Stocks and Crypto"></DueCardCategoryTitle>
            <DueCardLine alternateStyle={true} lineTitle="Crypto Wallet" wealthEffect={props.cryptoWallet || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={false} lineTitle="Stock Portfolio" wealthEffect={props.stockPortfolio || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={true} lineTitle="Dividents Payout" wealthEffect={props.dividendsPayout || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={false} lineTitle="Pension Funds and Retirement Savings" wealthEffect={props.pensionFunds || 0} isDeduction={false}/>
            <DueCardCategoryTitle alternateStyle={true} color="text-orange-300" categoryTitle="Real Estate"></DueCardCategoryTitle>
            <DueCardLine alternateStyle={false} lineTitle="Investment Properties on Sale" wealthEffect={props.investmentProperties || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={true} lineTitle="Rental Cashflow" wealthEffect={props.rentalCashflow || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={false} lineTitle="Property Expenses" wealthEffect={props.propertyExpenses || 0} isDeduction={true}/>
            <DueCardCategoryTitle alternateStyle={true} color="text-slate-700" categoryTitle="Debts"></DueCardCategoryTitle>
            <DueCardLine alternateStyle={false} lineTitle="Debts Owed To You" wealthEffect={props.debtsOwed || 0} isDeduction={false}/>
            <DueCardLine alternateStyle={true} lineTitle="Debts You Owe" wealthEffect={props.debt || 0} isDeduction={true}/>
            <DueCardCategoryTitle alternateStyle={false} color="text-slate-500" categoryTitle="Expenses"></DueCardCategoryTitle>
            <DueCardLine alternateStyle={true} lineTitle="Rent or Mortgage Payments" wealthEffect={props.rentOrMortgage || 0} isDeduction={true}/>
            <DueCardLine alternateStyle={false} lineTitle="Utilities" wealthEffect={props.utilities || 0} isDeduction={true}/>
            <DueCardLine alternateStyle={true} lineTitle="Car" wealthEffect={props.car || 0} isDeduction={true}/>
            <DueCardLine alternateStyle={false} lineTitle="Grocery" wealthEffect={props.grocery || 0} isDeduction={true}/>
            <DueCardLine alternateStyle={true} lineTitle="Insurance" wealthEffect={props.insurance || 0} isDeduction={true}/>
            <DueCardLine alternateStyle={false} lineTitle="Other Expenses" wealthEffect={props.otherExpenses || 0} isDeduction={true}/>
            <hr />
            <DueCardLine alternateStyle={true} lineTitle="Zakatable Wealth" wealthEffect={zakatableWealth} isDeduction={false}></DueCardLine>
        </div>
        <div className='px-[80px] py-[50px] text-center'>
            <p className='text-xl'>You must pay</p>
            <p className='text-4xl'>{"$" + (zakatableWealth >= 442 ? zakatableWealth*0.025 : 0)}</p>
            <p className='text-sm'>The number above is 2.5% of your Zakatable Wealth. The Silver Nisab is considered to be $442 USD.</p>
        </div>
    </div>
 );   
}

export default DueCard