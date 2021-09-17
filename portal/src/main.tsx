import 'antd/dist/antd.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'

import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        errorRetryCount: 3,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root'),
)
