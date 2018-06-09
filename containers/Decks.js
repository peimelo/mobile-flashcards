import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions/decks'

class Decks extends React.Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.questions.length}{' cards'}</Text>
      </View>
    )
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    )
  }

  render() {
    const { decks } = this.props

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={decks}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}
        />
      </View>
    )
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
