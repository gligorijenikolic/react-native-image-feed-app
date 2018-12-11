import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar';
import { Constants } from 'expo';
import AuthorRow from './components/AuthorRow';
import CardList from './components/CardList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
      </View>
    );
  }
}

const items = [
  { id: 0, author: 'Bob Ross' },
  { id: 1, author: 'Chuck Norris' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  }
});