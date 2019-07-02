import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class Todo extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                    <TodoList {...this.props} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 float-right">
                    <AddTodo {...this.props} />
                </div>
            </div>
        )
    }
}

export default Todo;