import { Button, Content, Text } from 'native-base'
import React from 'react'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {
  render() {
    const { deck, navigation } = this.props
    const title = navigation.getParam('title', 'NO DECK FOUND')
    const count = deck.questions.length

    return (
      <Content>
        <Text>{title}</Text>
        <Text note>{`${count} ${count > 1 ? 'cards' : 'card'}`}</Text>
        <Button light onPress={() => navigation.navigate('NewCard', { title })}>
          <Text>AddCard</Text>
        </Button>
        <Button dark><Text>Start Quiz</Text></Button>
      </Content>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.getParam('title')]
})

export default connect(mapStateToProps)(DeckDetail)
