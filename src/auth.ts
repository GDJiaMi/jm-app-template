/**
 * 用户鉴权
 */
/* tslint:disable:no-any */
import Auth, { AuthInfo, AuthParams, RefreshParams, TOKEN_HEADER } from '@gdjiami/jslib/lib/TokenAuthService'
import { RequestError } from '@gdjiami/jsonrpc'

import { AUTH_FAILED_CODE } from '~/constants'
import history from '~/history'
import rpc from '~/rpc'

const authService = new Auth({
  clientId: 'calendar',
  // 获取token
  getToken: async params => {
    return rpc.request<AuthInfo, AuthParams>('auth.http.login', params)
  },
  onRefreshFailed: error => {
    // 跳转到失败页面
    history.replace(`/failed?title=会话失效&desc=请退出重试`)
  },
  // 刷新token
  refreshToken: async params => {
    return rpc.request<AuthInfo, RefreshParams>('auth.http.login', params)
  },
})

// 拦截器
rpc.addInterceptor(async (request, xhr, next) => {
  const token = authService.getToken()
  if (token) {
    xhr.setRequestHeader(TOKEN_HEADER, token)
  }

  try {
    return await next()
  } catch (error) {
    const response = (error as RequestError<any, any>).response
    if (response && response.error && response.error.code === AUTH_FAILED_CODE) {
      console.warn('会话失效')
      try {
        // 刷新token
        await authService.refresh()
        return await rpc.retry<any>(request)
      } catch (err) {
        console.warn('刷新token失败', err)
        throw err
        // ignore
      }
    }

    throw error
  }
})

export default authService
