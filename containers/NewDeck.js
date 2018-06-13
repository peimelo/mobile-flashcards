import { Button, Text } from 'native-base'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewDeck extends React.Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const { title } = this.state

    if (!!title.length) {
      const { navigation } = this.props
      this.props.addDeck(title).then(() => {
        this.setState({ title: '' })
        navigation.navigate('deckDetail', { title })
      })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
        />
        <Button primary onPress={this.handleSubmit}>
          <Text>Create Deck</Text>
        </Button>
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
    width: 200
  }
})

export default connect(null, {
  addDeck
})(NewDeck)
