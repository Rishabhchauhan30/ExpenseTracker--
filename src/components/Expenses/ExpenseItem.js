import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from "../UI/Cards";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
      const [title, setTitle] = useState(props.title); 

      const clickHandler = () => {
            setTitle('Updated!');
            console.log('Button Clicked!!!');
      }

      return (
            <li>
            <Card className="expense-item">
                  <ExpenseDate date = {props.date}/>
                  <div className="expense-item__description"> 
                        <h2> {title} </h2>
                        <div className="expense-item__price">💷 {props.amount} </div>
                  </div>
            </Card>
            </li>
      );
}

export default ExpenseItem;