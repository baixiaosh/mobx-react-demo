import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import styles from './index.less'

import { Button, Form, Input } from 'antd'
const FormItem = Form.Item

import Todo from './Todo'

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = ''

  render() {
    return (
      <div className={styles.body}>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            New Todo:
          </FormItem>
          <FormItem>
            <Input value={this.newTodoTitle} onChange={this.handleInputChange} placeholder="请输入内容" />
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType="submit">添加</Button>
          </FormItem>
        </Form>
        <hr />
        <ul className={styles.ul}>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        未选中: {this.props.store.unfinishedTodoCount}
        <div>
          <Button type='danger' onClick={this.handleDelete}>删除选中</Button>
        </div>
        <div><Link to="/login" className={styles.test}>其他页面</Link></div>
      </div>
    )
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value
  }

  @action
  handleSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle)
    this.newTodoTitle = ''
    e.preventDefault()
  }

  @action
  handleDelete = e => {
    this.props.store.removeTodo()
    e.preventDefault()
  }
}

export default TodoList
