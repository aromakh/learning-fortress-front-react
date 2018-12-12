import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


class CreateShortAnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        entries: [],
        reveal: "",
        text: ""
      },
      newEntry: this.getNewEntry(),
      name: 'ShortAnswer'
    };
  }

  getNewEntry() { return {answer: '', name: ''}; }

  addEntry() {
    const {newEntry} = this.state;
    const {data} = this.state;
    data.entries.push(newEntry);

    this.setState({newEntry: this.getNewEntry()});
    this.setState({data});

    this.sendToParent(data)
  }

  onDataChange = name => event => {
    const {data} = this.state;
    data[name] = event.target.value;
    this.setState({data});
    this.sendToParent(data);
  }

  onNewEntryChange = name => event => {
    const {newEntry} = this.state;
    newEntry[name] = event.target.value;
    this.setState({newEntry});
  }

  sendToParent(data) {
    const componentData = { data: data, name: this.state.name };
    this.props.onQuestionDataChanged(componentData);
  }

  render() {
    return (
      <div>
        <TextField
          label="Text" margin="normal" variant="outlined"
          value={this.state.data.text} onChange={this.onDataChange('text')}
        />
        <TextField
          label="Single reveal" margin="normal" variant="outlined"
          value={this.state.data.reveal} onChange={this.onDataChange('reveal')}
        />
        <Divider />
        <p>Entries:</p>
        {
          this.state.data.entries.map((entry, index) => {
            return <p key={index}>Entry {index + 1}. Name: {entry.answer} | Answer: {entry.answer}</p>;
          })
        }
        <Divider />
        <p>New Entry</p>
        <TextField
          label="Entry name" margin="normal" variant="outlined"
          value={this.state.newEntry.name} onChange={this.onNewEntryChange('name')}
        />
        <TextField
          label="Entry answer" margin="normal" variant="outlined"
          value={this.state.newEntry.answer} onChange={this.onNewEntryChange('answer')}
        />
        <Button type="button" variant="contained" onClick={this.addEntry.bind(this)} color="primary">Add Entry</Button>
      </div>
    );
  }
}

export default CreateShortAnswerForm;
