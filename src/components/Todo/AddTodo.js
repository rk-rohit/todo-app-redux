import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/Actions';

class AddTodo extends Component {

    state = {
        todo_title: '',
        todo_description: '',
        id: ''
    }

    componentDidMount() {
        if (this.props.searchTodo) {
            this.setState({
                todo_title: this.props.searchTodo.title,
                todo_description: this.props.searchTodo.description,
                id: this.props.searchTodo.id
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.todo_title && this.state.todo_description) {
            let date = new Date();
            let todo = {
                id: this.state.id ? this.state.id : date.getTime(),
                title: this.state.todo_title,
                description: this.state.todo_description
            };
            this.props.addTodo(todo);
            this.setState({
                todo_title: '',
                todo_description: '',
                id: ''
            })

            if (this.props.match.url != '/') {
                this.props.history.push('/todolist');
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3> {this.state.id ? 'Edit Todo' : 'Add Todo'} </h3>
                <div className="form-group">
                    <label htmlFor="todo_title">Todo Title</label>
                    <input type="text" id="todo_title" className="form-control" placeholder="Title" value={this.state.todo_title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="todo_description">Description</label>
                    <input type="text" id="todo_description" className="form-control" placeholder="Description" value={this.state.todo_description} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary float-right">Save</button>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const searchTodo = ownProps.match.params.id ? state.todos.find(item => item.id == ownProps.match.params.id) : null;
    return {
        searchTodo: searchTodo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => { dispatch(addTodo(todo)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
