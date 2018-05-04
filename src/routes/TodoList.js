import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import styles from './index.less'

import { Button, Form, Input } from 'antd'
const FormItem = Form.Item

import Todo from './Todo'

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = ''

  render() {
    let { list } = this.props.store.global
    let unfinishedTodoCount = computed(()=> list.filter(item => !item.finished).length )
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
          {list.map((todo, index) => (
            <Todo todo={todo} key={index} />
          ))}
        </ul>
        未选中: {unfinishedTodoCount.get()}
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
    let list = this.props.store.global.list
    list.push({
      title: this.newTodoTitle,
      finished: false
    })
    this.props.store.setGlobal({
      list 
    })
    this.newTodoTitle = ''
    e.preventDefault()
  }

  @action
  handleDelete = e => {
    let list = this.props.store.global.list
    list = list.filter(i=>!i.finished)
    this.props.store.setGlobal({
      list 
    })
    e.preventDefault()
  }
}

export default TodoList
