import { Button, Card, CardItem, Container, Content, Text } from 'native-base'
import React from 'react'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {
  render() {
    const { deck, navigation } = this.props
    const title = navigation.getParam('title', 'NO DECK FOUND')
    const totalQuestions = deck.questions.length

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text>{title}</Text>
            </CardItem>
            <CardItem>
              <Text note>
                {`${totalQuestions} ${totalQuestions > 1 ? 'cards' : 'card'}`}
              </Text>
            </CardItem>
          </Card>
          <Button
            light
            full
            onPress={() => navigation.navigate('newCard', { title })}
          >
            <Text>Create New Question</Text>
          </Button>
          <Button
            dark
            full
            disabled={!totalQuestions}
            onPress={() => navigation.navigate('quiz', { title })}
          >
            <Text>Start a Quiz</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.getParam('title')]
})

export default connect(mapStateToProps)(DeckDetail)
