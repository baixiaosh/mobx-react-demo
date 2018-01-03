import React, { Component } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'

const Todo = observer(({ todo }) => (
  <li>
    <input
      type='checkbox'
      checked={todo.finished}
      onClick={action(() => (todo.finished = !todo.finished))}
    />
    {todo.title}
  </li>
))

export default Todo
