/**
 * 通用的工具函数
 */
import Loadable, { OptionsWithoutRender } from 'react-loadable'

// tslint:disable-next-line:no-null-keyword
const noopComponent = () => null
export function loadComponent<P, T extends React.ComponentType<P> | { default: React.ComponentType<P> }>(
  loader: () => Promise<T>,
) {
  const config: OptionsWithoutRender<P> = {
    loader,
    loading: noopComponent,
  }
  return Loadable(config)
}
