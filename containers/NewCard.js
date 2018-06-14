import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Input,
  Item,
  Label,
  Text
} from 'native-base'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
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
    const { answer, question } = this.state

    return (
      <Container>
        <Content padder>
          <KeyboardAvoidingView behavior='padding'>
            <Card>
              <CardItem>
                <Item floatingLabel last>
                  <Label>Question</Label>
                  <Input
                    onChangeText={(question) => this.setState({ question })}
                    value={this.state.question}
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item floatingLabel last>
                  <Label>Answer</Label>
                  <Input
                    onChangeText={(answer) => this.setState({ answer })}
                    value={this.state.answer}
                  />
                </Item>
              </CardItem>
            </Card>
            <Button
              dark
              full
              disabled={!question.length || !answer.length}
              onPress={this.handleSubmit}
            >
              <Text>Submit</Text>
            </Button>
          </KeyboardAvoidingView>
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
    width: 300
  }
})

export default connect(null, {
  addCardToDeck
})(NewCard)
