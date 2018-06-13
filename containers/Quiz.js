import { Button, Text } from 'native-base'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
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
        <Text>
          {showQuestion
            ? deck.questions[currentQuestion].question
            : deck.questions[currentQuestion].answer
          }
        </Text>
        <TouchableOpacity
          onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}
        >
          <Text>Show {showQuestion ? 'Answer' : 'Question'}</Text>
        </TouchableOpacity>
        <Button
          success
          disabled={showQuestion}
          onPress={() => this.handleAnswer(1)}
        >
          <Text>Correct</Text>
        </Button>
        <Button
          danger
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
        <View>
          <Text>{`${currentQuestion + 1}/${totalQuestions}`}</Text>
          {this.showQuestionOrAnswer()}
        </View>
      )
    }

    return (
      <View>
        <Text>Corrects: {correctAnswers}</Text>
        <Text>Incorrects: {totalQuestions - correctAnswers}</Text>
        <Button dark onPress={this.handleRestart}>
          <Text>Restart Quiz</Text>
        </Button>
      </View>
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
