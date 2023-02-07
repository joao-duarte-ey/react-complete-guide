import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [newTitle, SetNewTitle] = useState('');

    const titleChangeHandler = (event) =>{
        SetNewTitle(event.target.value);
    }
    
    const [newAmount, SetNewAmount] = useState('');

    const amountChangeHandler = (event) =>{
        SetNewAmount(event.target.value);
    }
    
    const [newDate, SetNewDate] = useState('');

    const dateChangeHandler = (event) =>{
        SetNewDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onSaveExpenseData(expenseData);
        SetNewTitle('');
        SetNewAmount('');
        SetNewDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={newAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' value={newDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;