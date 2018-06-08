import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions/decks'

class Decks extends React.Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    const { decks } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {Object.keys(decks).map(key =>
          <Text key={key}>{decks[key].title}</Text>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks.data
  }
}

export default connect(mapStateToProps, {
  fetchDecks
})(Decks)
