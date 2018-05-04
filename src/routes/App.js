import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import { login } from 'services/login'

import TodoList from 'routes/TodoList'
import TodoListModel from 'models/TodoListModel'


@inject('app') @withRouter @observer
class App extends React.Component {

  render() {
    const store = new TodoListModel()
    store.addTodo("Get Coffee")
    store.addTodo("Write simpler code")
<<<<<<< 10f81f39d49b5b6a4bed713f883797d0086c42c0
		login({ username: '123', password: 'demo' }).then((res)=>{
			console.log(res)
			store.addTodo(res.msg)
		})
=======
		// login({ username: '123', password: 'demo' }).then((res)=>{
		// 	console.log(res)
		// 	store.addTodo(res.msg)
		// })
>>>>>>> 添加UI库,ant-design
    return <TodoList store={store} />
  }
}

export default App