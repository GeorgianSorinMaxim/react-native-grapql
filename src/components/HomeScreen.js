// @flow

import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList
} from 'react-native';

import { Colours } from '../styles';
import ToggleVisibility from './ToggleVisibility';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colours.common.backgroundColor
  },
  content: {
    flex: 1,
    width: '100%'
  },
  listRow: {
    minHeight: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.common.border,
    backgroundColor: Colours.common.white
  },
  listHeader: {
    minHeight: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.common.border,
    backgroundColor: Colours.common.backgroundColor
  },
  left: {
    flex: 1,
    color: Colours.common.greyText
  },
  middle: {
    flex: 1
  },
  right: {
    flex: 1,
    color: Colours.common.blue
  },
  placeholer: {
    textAlign: 'center'
  }
});

type Props = {
  data: Object,
  error: any,
  loading: Boolean,
  visible: String
};

type State = {};

export class HomeScreen extends Component<Props, State> {
  renderItem = (element: Object) => (
    <View key={`list_{element.item.id}`} style={styles.listRow}>
      <Text style={styles.left}>
        {element.item.author.firstName} {element.item.author.lastName}
      </Text>
      <Text style={styles.middle}>{element.item.title}</Text>
      <Text style={styles.right}>{element.item.votes}</Text>
    </View>
  );

  renderHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.left}>Author</Text>
      <Text style={styles.middle}>Item</Text>
      <Text style={styles.right}>Votes</Text>
    </View>
  );

  render() {
    const renderList =
      this.props.data &&
      Object.keys(this.props.data).length &&
      this.props.data.length > 0 &&
      this.props.visible;

    const renderListPlaceholder =
      !this.props.error && !this.props.loading && !this.props.visible;

    const renderPlaceholer =
      this.props.loading &&
      this.props.data &&
      Object.keys(this.props.data).length &&
      this.props.data.length === 0;

    console.log(this.props);

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {this.props.error ? (
            <Text style={styles.placeholer}>Data fetch error :(</Text>
          ) : null}

          {this.props.loading ? <ActivityIndicator /> : null}

          {!this.props.loading && !this.props.error ? (
            <ToggleVisibility />
          ) : null}

          {renderList ? (
            <VirtualizedList
              getItemCount={data => data.length}
              getItem={(data, index) => data[index]}
              keyExtractor={(item, index) => `list_${index}_${item.value}`}
              renderItem={item => this.renderItem(item)}
              data={this.props.data}
              initialNumToRender={25}
              windowSize={21}
              ListHeaderComponent={() => this.renderHeader()}
            />
          ) : null}

          {renderListPlaceholder ? (
            <Text style={styles.placeholer}>The list is currently hidden!</Text>
          ) : null}

          {renderPlaceholer ? (
            <Text style={styles.placeholer}>No elements :(</Text>
          ) : null}
        </View>
      </View>
    );
  }
}
export default HomeScreen;
