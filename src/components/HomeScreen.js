// @flow

import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList,
  Button
} from 'react-native';

import { Colours, Styles } from '../styles';

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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  placeholer: {
    textAlign: 'center'
  }
});

type Props = {
  data: Object
};

type State = {};

export class HomeScreen extends Component<Props, State> {
  renderItem = (element: Object) => {
    return (
      <View key={`list_{element.item.id}`} style={styles.listRow}>
        <Text style={styles.left}>
          {element.item.author.firstName} {element.item.author.lastName}
        </Text>
        <Text style={styles.middle}>{element.item.title}</Text>
        <Text style={styles.right}>{element.item.votes}</Text>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.left}>Author</Text>
        <Text style={styles.middle}>Item</Text>
        <Text style={styles.right}>Votes</Text>
      </View>
    );
  };

  render() {
    const renderList =
      this.props.data &&
      Object.keys(this.props.data).length &&
      this.props.data.posts.length > 0;

    const renderPlaceholer =
      this.props.loading &&
      this.props.data &&
      Object.keys(this.props.data).length &&
      this.props.data.posts.length === 0;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {this.props.error ? (
            <Text style={styles.placeholer}>Data fetch error :(</Text>
          ) : null}

          {this.props.loading ? <ActivityIndicator /> : null}

          {renderList ? (
            <VirtualizedList
              getItemCount={data => data.length}
              getItem={(data, index) => data[index]}
              keyExtractor={(item, index) => `list_${index}_${item.value}`}
              renderItem={item => this.renderItem(item)}
              data={this.props.data.posts}
              initialNumToRender={25}
              windowSize={21}
              ListHeaderComponent={() => this.renderHeader()}
            />
          ) : null}

          {renderPlaceholer ? (
            <Text style={styles.placeholer}>No elements :(</Text>
          ) : null}
        </View>
        }
      </View>
    );
  }
}
export default HomeScreen;
