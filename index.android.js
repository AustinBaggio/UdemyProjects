// Index.android.js - Android Location

// Import a Library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component


//comonent nesting example
const App = () => (//expand component to fill the entire content of device
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device

AppRegistry.registerComponent('albums', () => App);
