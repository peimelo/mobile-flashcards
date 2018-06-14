import { Button, Content, Text } from 'native-base'
import React from 'react'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {
  render() {
    const { deck, navigation } = this.props
    const title = navigation.getParam('title', 'NO DECK FOUND')
    const totalQuestions = deck.questions.length

    return (
      <Content>
        <Text>{title}</Text>
        <Text note>
          {`${totalQuestions} ${totalQuestions > 1 ? 'cards' : 'card'}`}
        </Text>
        <Button light onPress={() => navigation.navigate('newCard', { title })}>
          <Text>Create New Question</Text>
        </Button>
        <Button dark onPress={() => navigation.navigate('quiz', { title })}>
          <Text>Start a Quiz</Text>
        </Button>
      </Content>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.getParam('title')]
})

export default connect(mapStateToProps)(DeckDetail)
