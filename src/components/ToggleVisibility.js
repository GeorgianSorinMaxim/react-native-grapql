// @flow

import React, { Component } from 'react';
import { Button } from 'react-native';
import { graphql } from 'react-apollo';

import { updateVisbilityFilter } from '../apollo/queries';

type State = {
  visible: boolean
};

type Props = {
  mutate: any
};

export class ToggleVisibility extends Component<Props, State> {
  state = {
    visible: true
  };

  onPress = visible => {
    this.props
      .mutate({ variables: { visibilityFilter: visible } })
      .then(res => {
        if (res) this.setState({ visible });
      });
  };

  render() {
    return (
      <Button
        color="#841584"
        onPress={() => this.onPress(!this.state.visible)}
        title={this.state.visible ? 'Hide list' : 'Show list'}
      />
    );
  }
}

const ToggleVisibilityWithMutation = graphql(updateVisbilityFilter)(
  ToggleVisibility
);

export default ToggleVisibilityWithMutation;
