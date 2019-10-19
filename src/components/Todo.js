import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.id} {this.props.text}</h3>
                <button onClick={() => this.props.removeTodo(this.props.id)}>Delete task</button>
            </div>
            
        )
    }
}

export default Todo;