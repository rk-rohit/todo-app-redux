import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">Todo App</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/todolist">Todo List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/addtodo">Add Todo</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;