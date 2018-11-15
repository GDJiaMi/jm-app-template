/**
 * 首页
 */
import { Title, AdminLayout } from '@gdjiami/rc-components'
import { Input, Form } from 'antd'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'

@observer
export default class Home extends React.Component {
  @observable
  private count = 1

  public render() {
    return (
      <AdminLayout.Body>
        <Title>首页 {this.count}</Title>
        <Form layout="inline">
          <Form.Item label="用户名">
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item label="密码">
            <Input />
          </Form.Item>
        </Form>
        <button onClick={this.handleClick}>add</button>
      </AdminLayout.Body>
    )
  }

  private handleClick = () => {
    this.count++
  }
}
