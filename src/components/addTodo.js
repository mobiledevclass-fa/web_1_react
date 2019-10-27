import React, {Component} from 'react';
import { format } from 'date-fns'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddTodo extends Component {
    
    state = {
        title: " ",
        date: new Date(),
      };

    handleChange = date => {
        this.setState({
          date: date
        });
    };

    handleInputChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, format(new Date(this.state.date), "dd.MM.yyyy"));
        this.setState({title: ''})
    }
    
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='text'
                       name='title'
                       value={this.state.title}
                       onChange={this.handleInputChange}
                       placeholder='Название'
                       style={{flex: '10'}}
                />
                <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
                    dateFormat="dd-MM-yyyy"
                />
                <input type='submit'
                       value='Добавить'
                       className='btm'
                       style={{flex: '3'}}
                />
            </form>
        );
    }
}

export default AddTodo;