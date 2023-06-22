import React, { useState } from 'react';
import TheProsperityFundLogo from '../assets/TheProsperityFundLogo.svg';
import CashIcon from '../assets/Cash-Icon.png';
import JewelryIcon from '../assets/Jewelry-Icon.png';
import StocksAndCryptoIcon from '../assets/StocksAndCrypto-Icon.png';
import HouseIcon from '../assets/House-Icon.png';
import DebtsIcon from '../assets/Debts-Icon.png';
import ExpensesIcon from '../assets/Expenses-Icon.png';
import ToggleButton from '../components/ToggleButton';
import CenteringSpacer from '../components/CenteringSpacer';
import Card from '../components/Card';
import QuestionTitle from '../components/QuestionTitle';
import CategoryCard from '../components/CategoryCard';
import DueCard from '../components/DueCard';
import CashInput from '../components/CashInput';


function Calculator() {

    const [calculation, setCalculation] = useState({
        cash: 0,
        gold: 0,
        silver: 0,
        cryptoWallet: 0,
        stockPortfolio: 0,
        dividendsPayout: 0,
        pensionFunds: 0,
        investmentProperties: 0,
        rentalCashflow: 0,
        propertyExpenses: 0,
        debtsOwed: 0,
        debt: 0,
        rentOrMortgage: 0,
        utilities: 0,
        car: 0,
        grocery: 0,
        insurance: 0
    })

    function handleCashChange(e) {
        setCalculation({
            ...calculation,
            cash: parseInt(e.target.value)
        });
    }

    function handleGoldChange(e) {
        setCalculation({
            ...calculation,
            gold: parseInt(e.target.value)
        });
    }

    function handleSilverChange(e) {
        setCalculation({
            ...calculation,
            silver: parseInt(e.target.value)
        });
    }

    function handleCryptoWalletChange(e) {
        setCalculation({
            ...calculation,
            cryptoWallet: parseInt(e.target.value)
        });
    }

    function handleStockPortfolioChange(e) {
        setCalculation({
            ...calculation,
            stockPortfolio: parseInt(e.target.value)
        });
    }

    function handleDividendsPayoutChange(e) {
        setCalculation({
            ...calculation,
            dividendsPayout: parseInt(e.target.value)
        });
    }

    function handlePensionFundsChange(e) {
        setCalculation({
            ...calculation,
            pensionFunds: parseInt(e.target.value)
        })
    }

    function handleInvestmentPropertiesChange(e) {
        setCalculation({
            ...calculation,
            investmentProperties: parseInt(e.target.value)
        });
    }

    function handleRentalCashflowChange(e) {
        setCalculation({
            ...calculation,
            rentalCashflow: parseInt(e.target.value)
        });
    }

    function handlePropertyExpensesChange(e) {
        setCalculation({
            ...calculation,
            propertyExpenses: parseInt(e.target.value)
        });
    }

    function handleDebtsOwedChange(e) {
        setCalculation({
            ...calculation,
            debtsOwed: parseInt(e.target.value)
        });
    }

    function handleDebtChange(e) {
        setCalculation({
            ...calculation,
            debt: parseInt(e.target.value)
        });
    }

    function handleRentOrMortgageChange(e) {
        setCalculation({
            ...calculation,
            rentOrMortgage: parseInt(e.target.value)
        });
    }

    function handleUtilitiesChange(e) {
        setCalculation({
            ...calculation,
            utilities: parseInt(e.target.value)
        });
    }

    function handleCarChange(e) {
        setCalculation({
            ...calculation,
            car: parseInt(e.target.value)
        });
    }

    function handleGroceryChange(e) {
        setCalculation({
            ...calculation,
            grocery: parseInt(e.target.value)
        });
    }

    function handleInsuranceChange(e) {
        setCalculation({
            ...calculation,
            insurance: parseInt(e.target.value)
        });
    }


    return (
        <div className='min-h-screen'>
            <div className='w-full flex top-0 sticky z-50 border-b-[1px] border-gray-200 drop-shadow p-8 bg-white'>
                <div className='flex-1'></div>
                <div className='flex-1 h-full flex justify-center'>
                    <img src={TheProsperityFundLogo} className="min-w-[150px]"></img>
                </div>
                <div className='flex-1 justify-right'>
                    <p className='text-md text-right'>Zakatable Wealth</p>
                    <p className='text-lg text-right'>{"$" + ((calculation.cash + calculation.gold + calculation.silver + calculation.cryptoWallet + calculation.stockPortfolio + calculation.dividendsPayout + calculation.pensionFunds + calculation.investmentProperties + calculation.rentalCashflow + calculation.debtsOwed) - (calculation.propertyExpenses + calculation.debt + calculation.rentOrMortgage + calculation.utilities + calculation.car + calculation.grocery + calculation.insurance))}</p>
                </div>
            </div>
            <div className='p-1 w-[100%] mb-16 bg-gradient-to-l from-[#63C8FC] to-[#68DFEA] px-[50px] py-[100px]'>
                <p className='text-white text-center text-8xl belleza mb-5'>Zakat Calculator (beta)</p>
                <p className='text-white text-center text-lg'>Don’t know how to calculate your Zakat obligation? We can walk you through it.</p>
            </div>
            <div className="flex">
                <CenteringSpacer />
                <div className='flex-1 py-8'>
                    <CategoryCard name="Cash" twGradient="from-green-400 to-green-600" icon={CashIcon} description="Enter your current total cash balance." >
                        <CashInput placeholder="Enter how much cash you have" onChange={handleCashChange}></CashInput>
                    </CategoryCard>
                    <CategoryCard name="Jewelry" twGradient="from-blue-400 to-blue-200" icon={JewelryIcon} description="Enter the value of your jewelry below." >
                        <CashInput label="Gold" placeholder="Enter the total value of your gold" onChange={handleGoldChange}></CashInput>
                        <CashInput label="Silver" placeholder="Enter the total value of your silver" onChange={handleSilverChange}></CashInput>
                    </CategoryCard>
                    <CategoryCard name="Stocks and Crypto" twGradient="from-red-300 to-red-600" icon={StocksAndCryptoIcon} description="Fill in the value of your stock portfolio and crypto wallet." >
                        <CashInput label="Crypto Wallet" placeholder="Enter how much your crypto wallet is worth today" onChange={handleCryptoWalletChange}></CashInput>
                        <CashInput label="Stock Portfolio" placeholder="Enter the value of your stock portfolio excluding any long-term investments" onChange={handleStockPortfolioChange}></CashInput>
                        <CashInput label="Dividends Payout" placeholder="Enter how much in dividend payouts you've received" onChange={handleDividendsPayoutChange}></CashInput>
                        <CashInput label="Pension Funds and Retirement Savings" placeholder="Enter the value of pension funds and retirement savings that you have access to" onChange={handlePensionFundsChange}></CashInput>
                    </CategoryCard>
                    <CategoryCard name="Real Estate" twGradient="from-orange-400 to-orange-200" icon={HouseIcon} description="Enter the value of your real estate below." >
                        <CashInput label="Investment Properties On Sale" placeholder="Enter the total value of the properties that you're actively reselling" onChange={handleInvestmentPropertiesChange}></CashInput>
                        <CashInput label="Rental Cashflow" placeholder="Enter how much rent you've collected from your rental properties" onChange={handleRentalCashflowChange}></CashInput>
                        <CashInput label="Property Expenses" placeholder="Enter how much money you've spent on your properties" onChange={handlePropertyExpensesChange}></CashInput>
                    </CategoryCard>
                    <CategoryCard name="Debts" twGradient="from-slate-600 to-slate-800" icon={DebtsIcon} description="Fill in your debt situation.">
                        <CashInput label="Debts Owed to You" placeholder="Enter how much money is owed to you" twGradient="from-orange-400 to-orange-200" icon={HouseIcon} description="Fill in the value of your stock portfolio and crypto wallet." onChange={handleDebtsOwedChange}></CashInput>
                        <CashInput label="Debts You Owe" placeholder="Enter how much money you must pay back" onChange={handleDebtChange}></CashInput>
                    </CategoryCard>
                    <CategoryCard name="Expenses" twGradient="from-slate-300 to-slate-100" icon={ExpensesIcon} description="Fill in your expenses.">
                        <CashInput label="Rent or Mortgage" placeholder="Enter your total housing payment here" onChange={handleRentOrMortgageChange}></CashInput>
                        <CashInput label="Utilities" placeholder="Enter how much you pay in utilities" onChange={handleUtilitiesChange}></CashInput>
                        <CashInput label="Car" placeholder="Enter how much you pay in utilities" onChange={handleCarChange}></CashInput>
                        <CashInput label="Grocery" placeholder="Enter any upcoming grocery payments" onChange={handleGroceryChange}></CashInput>
                        <CashInput label="Insurance" placeholder="Enter how much you pay in insurance" onChange={handleInsuranceChange}></CashInput>
                        <CashInput label="Other Expenses" placeholder="Enter any other expenses you might have" onChange={handleInsuranceChange}></CashInput>
                    </CategoryCard>
                    <DueCard cash={calculation.cash} gold={calculation.gold} silver={calculation.silver} cryptoWallet={calculation.cryptoWallet} stockPortfolio={calculation.stockPortfolio} dividendsPayout={calculation.dividendsPayout} pensionFunds={calculation.pensionFunds} investmentProperties={calculation.investmentProperties} rentalCashflow={calculation.rentalCashflow} propertyExpenses={calculation.propertyExpenses} debtsOwed={calculation.debtsOwed} debt={calculation.debt} rentOrMortgage={calculation.rentOrMortgage} utilities={calculation.utilities} car={calculation.car} grocery={calculation.grocery} insurance={calculation.insurance}></DueCard>
                </div>
                <CenteringSpacer />
            </div>
        </div>
    );
}

export default Calculator;