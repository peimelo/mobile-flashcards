import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Text
} from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends React.Component {
  state = {
    showQuestion: true,
    currentQuestion: 0,
    correctAnswers: 0
  }

  handleAnswer = (correct) => {
    this.setState({
      showQuestion: true,
      currentQuestion: this.state.currentQuestion + 1,
      correctAnswers: this.state.correctAnswers + correct
    })
  }

  handleRestart = () => {
    this.setState({
      showQuestion: true,
      currentQuestion: 0,
      correctAnswers: 0
    })
  }

  showQuestionOrAnswer() {
    const { currentQuestion, showQuestion } = this.state
    const { deck } = this.props

    return (
      <View>
        <Card>
          <CardItem header bordered>
            <Text>{showQuestion ? 'Question' : 'Answer'}</Text>
          </CardItem>
          <CardItem>
            <Text>
              {showQuestion
                ? deck.questions[currentQuestion].question
                : deck.questions[currentQuestion].answer
              }
            </Text>
          </CardItem>
          <CardItem
            footer
            bordered
            button
            onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}
          >
            <Body>
            <Text>Show {showQuestion ? 'Answer' : 'Question'}</Text>
            </Body>
          </CardItem>

        </Card>
        <Button
          success
          full
          disabled={showQuestion}
          onPress={() => this.handleAnswer(1)}
        >
          <Text>Correct</Text>
        </Button>
        <Button
          danger
          full
          disabled={showQuestion}
          onPress={() => this.handleAnswer(0)}
        >
          <Text>Incorrect</Text>
        </Button>
      </View>
    )
  }

  render() {
    const { correctAnswers, currentQuestion } = this.state
    const { deck } = this.props
    const totalQuestions = deck.questions.length

    if (currentQuestion < totalQuestions) {
      return (
        <Container>
          <Content padder>
            <Text>{`${currentQuestion + 1}/${totalQuestions}`}</Text>
            {this.showQuestionOrAnswer()}
          </Content>
        </Container>
      )
    }

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header>
              <Text>Score</Text>
            </CardItem>
            <CardItem>
              <Text>Corrects: {correctAnswers}</Text>
            </CardItem>
            <CardItem>
              <Text>Incorrects: {totalQuestions - correctAnswers}</Text>
            </CardItem>
          </Card>
          <Button
            dark
            full
            onPress={this.handleRestart}
          >
            <Text>Restart Quiz</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200
  }
})

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.getParam('title')]
})

export default connect(mapStateToProps)(Quiz)
