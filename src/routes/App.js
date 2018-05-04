import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import { login } from 'services/login'

import TodoList from 'routes/TodoList'

@inject('store') @withRouter @observer
class App extends React.Component {

  render() {
    const store = this.props.store
    let list = [{ title: 'test', finished: false }, { title: 'Write simpler code', finished: false }]
    store.setGlobal({
      list
    })
    return <TodoList store = { store }
    />
  }
}

export default App