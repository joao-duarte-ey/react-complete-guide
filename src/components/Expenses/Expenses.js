import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const addFilter = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    return(
        <div>
            <ExpensesFilter selected={filteredYear} onSelectYear={addFilter} />
            <Card className='expenses'>
                {props.expenses
                .filter(item => item.date.getFullYear() === parseInt(filteredYear))
                .map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} 
                amount={expense.amount} date={expense.date} />
                ))
                }
            </Card>
        </div>
    )
}

export default Expenses;