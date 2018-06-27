import React from 'react';
import { StyleSheet, Text, View, WebView, NetInfo } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isConnected: false};
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    if (this.state.isConnected) {
      return (<WebView
          source={{uri: 'https://www.novifinance.com/#/'}}
          style={{marginTop: 20}} />
        )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>We&#39;re sorry, this app requires an internet connection to run properly.</Text>
        </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'red'
  }
});
