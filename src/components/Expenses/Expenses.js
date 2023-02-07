import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card';

const Expenses = (props) => {

    const addFilter = (year) =>{
        console.log(year + ' Bottom-up');
    }

    return(
        <div>
            <ExpensesFilter onSelectYear={addFilter} />
            <Card className='expenses'>
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            </Card>
        </div>
    )
}

export default Expenses;