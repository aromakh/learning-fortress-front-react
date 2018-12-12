import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateHorizontalShuffleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        choices: [],
        reveal: '' 
      },
      name: 'HorizontalShuffle'
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
          label="Reveal" margin="normal" variant="outlined"
          value={this.state.data.reveal} onChange={this.handleTextChange.bind(this)}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addTextComponent.bind(this)} color="primary">Create</Button>
      </div>
    );
  }
}

export default CreateHorizontalShuffleForm;
