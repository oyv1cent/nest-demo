import 'antd/dist/antd.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'

import App from './App'
import './index.css'
import './interceptors'

ReactDOM.render(
  <SWRConfig
    value={{
      errorRetryCount: 3,
    }}
  >
    <App />
  </SWRConfig>,
  document.getElementById('root'),
)
