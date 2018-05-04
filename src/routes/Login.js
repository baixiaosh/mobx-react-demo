import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@inject('store') @withRouter @observer
class App extends React.Component {

  render() {
    return <div><Link to="/">列表</Link></div>
  }
}

export default App