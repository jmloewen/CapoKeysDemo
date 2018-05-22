import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { closeChordsModal } from '../actions';

class CloseChordsButton extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Button
          raised
          icon = {{ name: 'close' }}
          title="Close"
          backgroundColor="#2196F3"
          onPress={() => this.props.closeChordsModal()}
        />
      </View>
    );
  }
}

export default connect(null, { closeChordsModal })(CloseChordsButton);
