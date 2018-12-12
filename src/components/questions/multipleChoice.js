import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


class CreateMultipleChoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.getEmptyState();
  }

  getEmptyState() {
    return {
      data: {
        choices: [],
        correctAnswers: 0,
        reveals: []
      },
      name: 'MultipleChoice',
      newChoice: {
        choice: '',
        reveal: ''
      },
    };
  }

  handleNewChoiceChange = name => event => {
    var {newChoice} = this.state;
    newChoice[name] = event.target.value;
    this.setState({newChoice});
  }

  addChoice() {
    const choice = this.state.newChoice;
    const {data} = this.state;
    data.choices.push(choice.choice);
    data.reveals.push(choice.reveal);
    this.setState({data});

    const newChoice = {choice: '', reveal: ''};
    this.setState({newChoice});
  }

  handleCorrectAnswerChange = event => {
    this.setState({correctAnswers: event.target.value});
  }

  addTextComponent() {
    const compData = {
      data: this.state.data,
      name: this.state.name
    };
    this.props.onComponentAdded(compData);
    this.setState(this.getEmptyState());
  }

  render() {
    return (
      <div>
        <p>{this.state.name} Component</p>
        <TextField
          label="Correct Answers (number)" margin="normal" variant="outlined" type="number"
          value={this.state.correctAnswers} onChange={this.handleCorrectAnswerChange}
        />
        <br />
        <p>Choices</p>
        {
          this.state.data.choices.map((choice, index) => {
            return <p key={index}>{index + 1}. choice: {choice} reveal: {this.state.data.reveals[index]}</p>
          })
        }
        <Divider />
        <p>New Choice</p>
        <TextField
          label="Choice text" margin="normal" variant="outlined" type="text"
          value={this.state.newChoice.choice} onChange={this.handleNewChoiceChange('choice')}
        />
        <TextField
          label="Choice reveal" margin="normal" variant="outlined" type="text"
          value={this.state.newChoice.reveal} onChange={this.handleNewChoiceChange('reveal')}
        />
        <Button type="button" variant="contained" onClick={this.addChoice.bind(this)} color="primary">Add Choice</Button>
        <Divider />
        <Button type="button" variant="contained" onClick={this.addTextComponent.bind(this)} color="primary">Create</Button>
      </div>
    );
  }
}

export default CreateMultipleChoiceForm;
