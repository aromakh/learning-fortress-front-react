import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


class CreateArrowComponentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        categories: [{choices: []}, {choices: []}],
        reveals: []
      },
      newChoice: this.getNewChoice(),
      name: 'Arrow'
    };
  }

  getNewChoice() { return {question: '', answer: '', reveal: ''}; }

  onNewComponentChange = name => event => {
    var {newChoice} = this.state;
    newChoice[name] = event.target.value;
    this.setState({newChoice});
  }

  addChoice() {
    const {data} = this.state;
    const {newChoice} = this.state;

    data.categories[0].choices.push(newChoice.question);
    data.categories[1].choices.push(newChoice.answer);
    data.reveals.push(newChoice.reveal);

    this.setState({newChoice: this.getNewChoice()});
    this.setState({data});

    var componentData = {
      data: this.state.data,
      name: this.state.name
    };

    this.props.onQuestionDataChanged(componentData);
  }

  render() {
    return (
      <div>
        <p>Choices:</p>
        {
          this.state.data.categories[0].choices.map((choice, index) => {
            return <p key={index}>Choice {index + 1}: question: {choice} answer: {this.state.data.categories[1].choices[index]} reveal: {this.state.data.reveals[index]}</p>;
          })
        }
        <Divider />
        <p>New Choice</p>
        <TextField
          label="Choice question" margin="normal" variant="outlined"
          value={this.state.newChoice.question} onChange={this.onNewComponentChange('question')}
        />
        <br />
        <TextField
          label="Choice answer" margin="normal" variant="outlined"
          value={this.state.newChoice.answer} onChange={this.onNewComponentChange('answer')}
        />
        <br />
        <TextField
          label="Choice reveal" margin="normal" variant="outlined"
          value={this.state.newChoice.reveal} onChange={this.onNewComponentChange('reveal')}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addChoice.bind(this)} color="primary">Add Choice</Button>
      </div>
    );
  }
}

export default CreateArrowComponentForm;
