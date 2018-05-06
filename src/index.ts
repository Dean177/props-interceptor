import { ComponentType, createElement } from 'react'

export const interceptor = <OP>(onProps: (props: OP) => void) =>
  (WrappedComponent: ComponentType<OP>): ComponentType<OP> =>
    (props: OP) => {
      onProps(props)
      return createElement(WrappedComponent, props)
    }