import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')

    const addFilter = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(item => item.date.getFullYear() === parseInt(filteredYear));

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onSelectYear={addFilter} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;