import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', numberText: 0 };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Normal text input</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Text>Numeric input</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(numberText) => this.setState({numberText})}
          value={this.state.text}
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
