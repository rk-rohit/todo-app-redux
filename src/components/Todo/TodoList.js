import React, { Component } from 'react';
import { deleteTodo } from '../store/Actions';
import { connect } from 'react-redux';

class TodoList extends Component {

    handleDelete = (id) => {
        this.props.deleteTodo(id);
    }

    handleEdit = (id) => {
        this.props.history.push('/addtodo/' + id);
    }

    render() {
        const list = this.props.todos.length ? (this.props.todos.map(item => {
            return (
                <li className="list-group-item" key={item.id} >
                    <h5 className="mb-1"> {item.title} </h5>
                    <small> {item.description} </small>
                    <button className="btn btn-danger btn-sm float-right" onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
                    <button className="btn btn-primary btn-sm mx-2 float-right" onClick={this.handleEdit.bind(this, item.id)}>Edit</button>
                </li>
            )
        })) : <h5 className="text-muted mt-3 ml-1">No Todo</h5>;

        return (
            <div className="mt-3">
                <h3>Todo List</h3>
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);