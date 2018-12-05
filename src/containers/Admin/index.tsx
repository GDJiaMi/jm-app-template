/**
 * 根组件
 */
import { Title } from '@gdjiami/rc-components'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { Provider } from 'mobx-react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import React from 'react'
import { Router } from 'react-router-dom'
import history from '~/history'

import Routes from './Routes'
import stores from './stores'
import './style.css'

export default class App extends React.Component {
  public render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Provider {...stores}>
          <Router history={history}>
            <Title.Provider>
              <Routes />
            </Title.Provider>
          </Router>
        </Provider>
      </LocaleProvider>
    )
  }
}

moment.locale('zh-cn')
