// @flow
import * as React from 'react';
import s from './ErrorBoundary.scss';

type Props = {
  children?: React.Node,
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    // console.log('derived error', error)
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: {}) {
    // You can also log the error to an error reporting service
    // console.log('component did catch error', error)
    // console.log('info', info)
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id={s.error_container}>
          <p className={s.error}>
            There has been an error displaying this component.
          </p>
        </div>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary