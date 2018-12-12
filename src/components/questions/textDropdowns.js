import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


class CreateTextDropdownsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        choices: [],
        dropdowns: [],
        reveal: ''
      },
      newChoice: '',
      newDropdown: this.getNewDropdown(),
      name: 'TextDropdowns'
    };
  }

  getNewDropdown() { return { afterWord: 0, correctChoiceNum: 0, text: '', reveal: '' }; }

  onDataChange = name => event => {
    const {data} = this.state;
    data[name] = event.target.value;
    this.setState({data});
    this.sendToParent(data);
  }

  onStateChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  onDropdownChange = name => event => {
    const {newDropdown} = this.state;
    newDropdown[name] = event.target.value;
    this.setState({newDropdown});
  }

  addChoice() {
    const {newChoice} = this.state;
    const {data} = this.state;
    data.choices.push(newChoice);
    this.setState({newChoice: ''});
    this.setState({data});
    this.sendToParent(data);
  }

  addDropdown() {
    const {newDropdown} = this.state;
    const {data} = this.state;

    data.dropdowns.push(newDropdown);
    this.setState({newDropdown: this.getNewDropdown()});
    this.setState(data);

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
          label="Question Text" margin="normal" variant="outlined" type="text"
          value={this.state.data.text} onChange={this.onDataChange('text')}
        />
        <br />
        <TextField
          label="Question Reveal" margin="normal" variant="outlined" type="text"
          value={this.state.data.reveal} onChange={this.onDataChange('reveal')}
        />
        <br />
        <p>Choices</p>
        {
          this.state.data.choices.map((choice, index) => {
            return <p key={index}>Choice {index + 1}: {choice}</p>;
          })
        }
        <Divider />
        <p>New Choice</p>
        <TextField
          label="Choice" margin="normal" variant="outlined" type="text"
          value={this.state.newChoice} onChange={this.onStateChange('newChoice')}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addChoice.bind(this)} color="primary">Add choice</Button>
        <Divider />
        <p>Dropdowns</p>
        {
          this.state.data.dropdowns.map((dropdown, index) => {
            return <p key={index}>Dropdown {index + 1}: {dropdown.text}</p>
          })
        }
        <Divider />
        <p>New Dropdown</p>
        <TextField
          label="After word" margin="normal" variant="outlined" type="number"
          value={this.state.newDropdown.afterWord} onChange={this.onDropdownChange('afterWord')}
        />
        <TextField
          label="Choice Number" margin="normal" variant="outlined" type="number"
          value={this.state.newDropdown.correctChoiceNum} onChange={this.onDropdownChange('correctChoiceNum')}
        />
        <TextField
          label="Dropdown Text" margin="normal" variant="outlined" type="text"
          value={this.state.newDropdown.text} onChange={this.onDropdownChange('text')}
        />
        <TextField
          label="Dropdown Reveal" margin="normal" variant="outlined" type="text"
          value={this.state.newDropdown.reveal} onChange={this.onDropdownChange('reveal')}
        />
        <Button type="button" variant="contained" onClick={this.addDropdown.bind(this)} color="primary">Add dropdown</Button>
      </div>
    );
  }
}

export default CreateTextDropdownsForm;
