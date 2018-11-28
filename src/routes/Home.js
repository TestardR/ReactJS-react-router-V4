import React, { Component } from 'react';

export default class Home extends Component {
  componentWillMount() {
    this.props.history.push('/home?ijustgotpushed=true');
  }

  render() {
    return <div>hi</div>;
  }
}
