import { Button, Text } from 'native-base'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class NewCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    if (!!this.state.question.length && !!this.state.answer.length) {
      const { navigation } = this.props
      const title = navigation.getParam('title', 'NO DECK FOUND')

      this.props.addCard(title, this.state).then(() => {
        this.setState({ question: '', answer: '' })
        navigation.goBack();
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
  addCard
})(NewCard)
