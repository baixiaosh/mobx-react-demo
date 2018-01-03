import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import Todo from './Todo'

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = ''

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type='text'
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type='submit'>添加</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        剩余: {this.props.store.unfinishedTodoCount}
        <div><Link to="/login">登录</Link></div>
      </div>
    )
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value
  }

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle)
    this.newTodoTitle = ''
    e.preventDefault()
  }
}

export default TodoList
