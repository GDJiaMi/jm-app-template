/**
 * 登录页面
 */
import { Login } from '@gdjiami/rc-components'
import { Params } from '@gdjiami/rc-components/lib/login/Login'
import React from 'react'

export default class LoginPage extends React.Component {
  public render() {
    return <Login onSubmit={this.handleSubmit} />
  }

  private handleSubmit = async (params: Params) => {
    // 登录鉴权代码
  }
}
