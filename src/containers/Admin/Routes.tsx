/**
 * 全局路由配置
 */
import { ErrorPage } from '@gdjiami/rc-components'
import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Layout from './Layout'

const Login = lazy(() => import('./Login'))
const Home = lazy(() => import('./Home'))

export default (props: {}) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route path="/403" component={ErrorPage.Forbidden} />
        <Route path="/401" component={ErrorPage.Unauthorized} />
        <Route path="/500" component={ErrorPage.InternalError} />
        <Route path="/404" component={ErrorPage.NotFound} />
        <Route path="/login" component={Login} />
        <Route
          path="/"
          // tslint:disable-next-line:jsx-no-lambda
          render={({ location }) => (
            <Layout path={location.pathname}>
              <Switch>
                {/* 管理后台内页 */}
                <Route path="/" exact component={Home} />
                <Route>
                  <Redirect to="/404" />
                </Route>
              </Switch>
            </Layout>
          )}
        />
      </Switch>
    </Suspense>
  )
}
