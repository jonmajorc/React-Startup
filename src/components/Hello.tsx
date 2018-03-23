import React, { Component } from 'react';

interface Props {
  greeting: string
}

export class Hello extends Component<Props, object> {
  render() {
    return (
      <div>
        {this.props.greeting} React Startup ❤️
      </div>
    )
  }
};

export default Hello;
