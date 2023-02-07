import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')

    const addFilter = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(item => item.date.getFullYear() === parseInt(filteredYear));

    let expensesContent = <p>No expenses found!</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} 
        amount={expense.amount} date={expense.date} />
        ))}

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onSelectYear={addFilter} />
            {expensesContent}
        </Card>
    )
}

export default Expenses;