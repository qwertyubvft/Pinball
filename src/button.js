import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {//using class allows your to create different buttons on the screen, as well as render different information
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Page1')}//navigate to 'Details'
        />
      </View>
    );
  }
}
class Page1Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button
          onPress={this._onPressButton}
          title ='press me'
          color ='blue'
        />
    </View>
  </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Page1: Page1Screen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class ButtonBasics extends Component {

      render() {
        return <AppContainer />;

      }
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 150

  },
  buttonContainer: {
    margin:20,
    backgroundColor: 'red'
  },

})
