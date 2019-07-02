import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/Layout';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todo from './components/Todo/';
import AddTodo from './components/Todo/AddTodo';
import TodoList from './components/Todo/TodoList';

class App extends Component {
	render() {
		return(
			<Layout>
				<BrowserRouter>
					<Header/>
					<Switch>
						<Route exact path='/' component = {Todo}/>
						<Route exact path='/addTodo' component = { (props)=> <div className="container"><AddTodo {...props}/></div> } />
						<Route path='/addTodo/:id' component = { (props)=> <div className="container"><AddTodo {...props}/></div> } />
						<Route path='/todolist' component = { (props)=> <div className="container"><TodoList {...props} /></div> } />
					</Switch>
				</BrowserRouter>
			</Layout>
		)
	}
}

export default App;
