import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateTextComponentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        text: ''
      },
      name: 'Text'
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
        <TextField
          label="Text Component Data" margin="normal" variant="outlined"
          value={this.state.data.text} onChange={this.handleTextChange.bind(this)}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addTextComponent.bind(this)} color="primary">Create</Button>
      </div>
    );
  }
}

export default CreateTextComponentForm;
