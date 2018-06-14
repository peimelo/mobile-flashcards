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
import { KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../actions'

class NewDeck extends React.Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const { navigation, saveDeckTitle } = this.props
    const { title } = this.state

    if (!!title.length) {
      saveDeckTitle(title).then(() => {
        this.setState({ title: '' })
        navigation.navigate('deckDetail', { title })
      })
    }
  }

  render() {
    const { title } = this.state

    return (
      <Container>
        <Content padder>
          <KeyboardAvoidingView behavior='padding'>
            <Card>
              <CardItem header>
                <Text>New Deck</Text>
              </CardItem>
              <CardItem>
                <Item floatingLabel last>
                  <Label>What is the title of your new deck?</Label>
                  <Input
                    onChangeText={(title) => this.setState({ title })}
                    value={title}
                  />
                </Item>
              </CardItem>
            </Card>
            <Button
              dark
              full
              disabled={!title.length}
              onPress={this.handleSubmit}
            >
              <Text>Create Deck</Text>
            </Button>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    )
  }
}

export default connect(null, {
  saveDeckTitle
})(NewDeck)
