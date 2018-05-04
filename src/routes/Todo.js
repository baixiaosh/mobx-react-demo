import React, { Component } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'

import { Checkbox } from 'antd'

const Todo = observer(({ todo }) => (
  <li>
  	<Checkbox checked={todo.finished} onChange={action(() => (todo.finished = !todo.finished))}>{todo.title}</Checkbox>
  </li>
))

export default Todo
