import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            deadline: "",
        }
    }

    onSubmitForm = (evt) => {
        evt.preventDefault();
        if (this.state.value !== "") {
            this.props.addTodo(this.state);
        }
    }

    onInputChange = (evt) => {
        this.setState({value: evt.target.value});
        console.log("Текущее значение контрольруемого инпута:", evt.target.value);
    }

    onDeadlineChange = (evt) => {
        this.setState({deadline: evt.target.value});
        console.log("Текущее значение deadline:", evt.target.value);
    }

    render() {
        return (
            <form
                style={{display: 'flex', marginTop: '30px', marginBottom: '30px'}}
                onSubmit={this.onSubmitForm}
            >
                <input type='date' style={{height: '52px', background: '#0e803d', fontSize: '30px', color: 'black', border: '2px solid lightgray'}} required={true} onChange={this.onDeadlineChange}/>
                <input type='text'
                       name='title'
                       placeholder='Add todo'
                       style={{flex: '10', height: '50px', background: '#0e803d', fontSize: '30px', color: 'black'}}
                       onChange={this.onInputChange}
                />
                <input type='submit'
                       value='Добавить'
                       className='btm'
                       style={{flex: '2', background: '#0e803d', cursor: 'pointer', fontSize: '30px'}}
                />
            </form>
        );
    }
}

export default AddTodo;
