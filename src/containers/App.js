import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';

import Title from '../components/Title';
import TodoList from '../components/TodoList';

import style from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'Clean room'
                }, {
                id: 2,
                    text: 'Wash the dishes'
                }, {
                id: 3,
                    text: 'Feed my cat'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return(
            <div className={style.TodoApp}>
                <Title count={this.state.data.length}/>
                <div className={style.TodoList}>
                    <TodoList data={this.state.data} removeTodo={this.removeTodo} />
                </div>
            </div>
        );
    }
}


export default hot(module) (App);