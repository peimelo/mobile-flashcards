import { Content, Left, ListItem, Right, Text } from 'native-base'
import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

class Decks extends React.Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props
    const count = item.questions.length

    return (
      <ListItem
        onPress={() => navigation.navigate('DeckDetail', { title: item.title })}
      >
        <Left>
          <Text>{item.title}</Text>
        </Left>
        <Right>
          <Text note>{`${count} ${count > 1 ? 'cards' : 'card'}`}</Text>
        </Right>
      </ListItem>
    )
  }

  render() {
    const { decks } = this.props

    return (
      <Content>
        <FlatList
          data={decks}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}
        />
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: Object.keys(state).reduce((decks, id) => {
      return decks.concat(state[id])
    }, [])
  }
}

export default connect(mapStateToProps, {
  fetchDecks
})(Decks)
