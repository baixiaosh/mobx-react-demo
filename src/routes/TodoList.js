import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
<<<<<<< 10f81f39d49b5b6a4bed713f883797d0086c42c0
import styles from './index.less';
=======
import styles from './index.less'

import { Button } from 'antd'
>>>>>>> 添加UI库,ant-design

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
<<<<<<< 10f81f39d49b5b6a4bed713f883797d0086c42c0
          <button type='submit'>添加</button>
=======
          <Button type='primary'>添加</Button>
>>>>>>> 添加UI库,ant-design
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        剩余: {this.props.store.unfinishedTodoCount}
        <div><Link to="/login" className={styles.test}>登录</Link></div>
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
