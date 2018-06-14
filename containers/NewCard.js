import { Button, Text } from 'native-base'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

class NewCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    const { addCardToDeck, navigation } = this.props
    const { answer, question } = this.state

    if (!!question.length && !!answer.length) {
      const title = navigation.getParam('title', 'NO DECK FOUND')

      addCardToDeck(title, this.state).then(() => {
        this.setState({ question: '', answer: '' })
        navigation.goBack()
      })
    }
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text>Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
        />
        <Text>Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
        />
        <Button primary onPress={this.handleSubmit}><Text>Submit</Text></Button>
      </KeyboardAvoidingView>
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
    width: 300
  }
})

export default connect(null, {
  addCardToDeck
})(NewCard)
