import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< 10f81f39d49b5b6a4bed713f883797d0086c42c0
=======
import { LocaleProvider } from "antd"
import zh_CN from "antd/lib/locale-provider/zh_CN"
>>>>>>> 添加UI库,ant-design
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
<<<<<<< 10f81f39d49b5b6a4bed713f883797d0086c42c0
    <Router >
    	<div>
	    	<Route exact path="/" component={App}/>
	    	<Route path="/login" component={Login}/>
    	</div>
    </Router>
=======
    <LocaleProvider locale={zh_CN}>
	    <Router >
	    	<div>
		    	<Route exact path="/" component={App}/>
		    	<Route path="/login" component={Login}/>
	    	</div>
	    </Router>
    </LocaleProvider>
>>>>>>> 添加UI库,ant-design
  </Provider>,
  document.getElementById('root')
)