import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Text,
  View
} from 'native-base'
import React from 'react'
import { Animated } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles'

class Quiz extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
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
      fadeAnim: new Animated.Value(0),
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
            <Text style={styles.textSize}>
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
            <Text style={styles.red}>
              Show {showQuestion ? 'Answer' : 'Question'}
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          success
          full
          style={styles.button}
          disabled={showQuestion}
          onPress={() => this.handleAnswer(1)}
        >
          <Text>Correct</Text>
        </Button>
        <Button
          danger
          full
          style={styles.button}
          disabled={showQuestion}
          onPress={() => this.handleAnswer(0)}
        >
          <Text>Incorrect</Text>
        </Button>
      </View>
    )
  }

  render() {
    const { correctAnswers, currentQuestion, fadeAnim } = this.state
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
    } else {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 1500
        }
      ).start()
    }

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Score</Text>
            </CardItem>
            <CardItem>
              <Animated.Text style={[styles.textSize, { opacity: fadeAnim }]}>
                Corrects: {correctAnswers}
                </Animated.Text>
            </CardItem>
            <CardItem>
              <Animated.Text style={[styles.textSize, { opacity: fadeAnim }]}>
                Incorrects: {totalQuestions - correctAnswers}
                </Animated.Text>
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

const mapStateToProps = (state, ownProps) => ({
  deck: state[ownProps.navigation.getParam('title')]
})

export default connect(mapStateToProps)(Quiz)
