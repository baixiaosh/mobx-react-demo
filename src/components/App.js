import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import TodoList from 'routes/TodoList'
import TodoListModel from 'models/TodoListModel'


@inject('app') @withRouter @observer
class App extends React.Component {

  render() {
    const store = new TodoListModel()
    store.addTodo("Get Coffee")
    store.addTodo("Write simpler code")
    return <TodoList store={store} />
  }
}

export default App