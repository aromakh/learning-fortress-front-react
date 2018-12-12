import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

class CreateLineHighlightingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        lines: [],
        text: []
      },
      newLine: this.getNewLine(),
      name: 'LineHighlighting'
    };
  }

  getNewLine() { return {text: '', isCorrect: false}; }

  handleCheckboxChange(e) { 
    const {newLine} = this.state;
    newLine.isCorrect = e.target.checked;
    this.setState({newLine});
  }

  onNewLineChange = event => {
    var {newLine} = this.state;
    newLine.text = event.target.value;
    this.setState({newLine});
  }

  addLine() {
    const {newLine} = this.state;
    const {data} = this.state;

    newLine.isCorrect == true ? data.lines.push(1) : data.lines.push(0);
    data.text.push(newLine.text);

    this.setState({newLine: this.getNewLine()});
    this.setState({data});

    this.sendToParent(data);
    console.log(data);
  }

  sendToParent(data) {
    const componentData = { data: data, name: this.state.name };
    this.props.onQuestionDataChanged(componentData);
  }

  render() {
    return (
      <div>
        <p>Lines:</p>
        {
          this.state.data.text.map((lineText, index) => {
            const isCorrect = this.state.data.lines[index] == 1 ? 'true' : 'false';
            return <p key={index}>Choice {index + 1}: {lineText} | isCorrect: {isCorrect}</p>;
          })
        }
        <Divider />
        <p>New Line</p>
        <TextField
          label="New choice" margin="normal" variant="outlined"
          value={this.state.newLine.text} onChange={this.onNewLineChange}
        />
        <span>isCorrect:</span>
        <Checkbox
          color="primary"
          checked={this.state.newLine.isCorrect} onChange={this.handleCheckboxChange.bind(this)}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addLine.bind(this)} color="primary">Add Line</Button>
      </div>
    );
  }
}

export default CreateLineHighlightingForm;
