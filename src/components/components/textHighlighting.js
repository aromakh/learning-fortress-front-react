import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateTextHighlightingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        lines: [],
        text: []
      },
      name: 'TextHighlighting'
    };
  }

  handleTextChange = event => {
    this.setState({data: {text: event.target.value}});
  }

  addTextComponent() {
    this.props.onComponentAdded(this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.name} Component</p>
        <br />
        <Button type="button" variant="contained" onClick={this.addTextComponent.bind(this)} color="primary">Create</Button>
      </div>
    );
  }
}

export default CreateTextHighlightingForm;
