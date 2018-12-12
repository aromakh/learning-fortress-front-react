import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


class CreateHorizontalShuffleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { choices: [], reveal: '' },
      newChoice: '',
      name: 'HorizontalShuffle'
    };
  }

  onNewChoiceChange(e) { this.setState({newChoice: e.target.value}); }

  onRevealChanged(e) {
    const {data} = this.state;
    data.reveal = e.target.value
    this.setState({data});
    this.sendToParent(data);
  }

  addChoice() {
    const {newChoice} = this.state;
    const {data} = this.state;
    data.choices.push(newChoice); 
    this.setState({data});
    this.sendToParent(data);
  }

  sendToParent(data) {
    const componentData = { data: data, name: this.state.name };
    this.props.onQuestionDataChanged(componentData);
  }

  render() {
    return (
      <div>
        <TextField
          label="Single reveal" margin="normal" variant="outlined"
          value={this.state.data.reveal} onChange={this.onRevealChanged.bind(this)}
        />
        <p>Choices:</p>
        {
          this.state.data.choices.map((choice, index) => {
            return <p key={index}>Choice {index + 1}: {choice}</p>;
          })
        }
        <Divider />
        <p>New Choice</p>
        <TextField
          label="New choice" margin="normal" variant="outlined"
          value={this.state.newChoice} onChange={this.onNewChoiceChange.bind(this)}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addChoice.bind(this)} color="primary">Add Choice</Button>
      </div>
    );
  }
}

export default CreateHorizontalShuffleForm;
