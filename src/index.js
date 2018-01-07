import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { HashRouter as Router, Route } from 'react-router-dom'

import App from 'routes/App'
import Login from 'routes/Login'
import app from 'models/AppModel'

const stores = { app }

useStrict(true)

ReactDOM.render(
  <Provider {...stores}>
    <Router >
    	<div>
	    	<Route exact path="/" component={App}/>
	    	<Route path="/login" component={Login}/>
    	</div>
    </Router>
  </Provider>,
  document.getElementById('root')
)