import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from "antd"
import zh_CN from "antd/lib/locale-provider/zh_CN"
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
    <LocaleProvider locale={zh_CN}>
	    <Router >
	    	<div>
		    	<Route exact path="/" component={App}/>
		    	<Route path="/login" component={Login}/>
	    	</div>
	    </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)