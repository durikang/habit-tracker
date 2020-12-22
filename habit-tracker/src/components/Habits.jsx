import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

class Habits extends Component {

  
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete=(habit)=>{
    this.props.onDelete(habit);
  };
  handleAdd=(name)=>{
    this.props.onAdd(name);
  }
  handleReset=()=>{
    this.props.onReset();
  }

  render() {
    return (
        <>
        <HabitAddForm onAdd={ this.handleAdd }/>
          <ul>
            {this.props.habits.map(habit => (
              <Habit 
                key={habit.id} 
                habit={habit} 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
              />
            ))}
          </ul>
          <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
              
        </>

    );
  }
}

export default Habits;
