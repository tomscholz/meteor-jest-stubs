import React from 'react';

const createContainer = jest.fn((options = {}, component) => component );

// withTracker(cb) cb will be called once on componentWillMount
export const withTracker = jest.fn(
  Op => {
    return jest.fn(
      (WrappedComponent) => (
          class ReactMeteorDataComponent extends React.Component {
            componentWillMount() {
              this.data = Op();
            }
            
            render() {
              return <WrappedComponent {...this.props} {...this.data} />;
            }
          }
        )
    )
  }
);

export const useTracker = jest.fn(cb => cb && cb())
