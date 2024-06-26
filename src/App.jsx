import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import GlobalProvider from './context/GlobalState'
import './App.css'
import React from 'react'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
       <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
