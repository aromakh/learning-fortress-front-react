import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class EditBrickForm extends Component {
  constructor(props) {
    super(props);
    const {brick} = props.props;

    this.state = brick
    console.log(this.state);
  }

  handleChange = name => event => {
    this.props.brick[name] = event.target.value;
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    const brickId = this.props.props.brickId;

    return (
      <div className="list-container">
        <p>Creation Brick</p>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Title" margin="normal" variant="outlined"
            value={this.state.title} onChange={this.handleChange('title')}
          />
          <TextField
            label="Subject" margin="normal" variant="outlined"
            value={this.state.subject} onChange={this.handleChange('subject')}
          />
          <TextField
            label="Brief" margin="normal" variant="outlined"
            value={this.state.brief} onChange={this.handleChange('brief')}
          />
          <br />
          <TextField
            label="Pallet Id" margin="normal" variant="outlined"
            value={this.state.pallet} onChange={this.handleChange('pallet')}
          />
          <TextField
            label="Prep" margin="normal" variant="outlined"
            value={this.state.prep} onChange={this.handleChange('prep')}
          />
          <TextField
            label="Summary" margin="normal" variant="outlined"
            value={this.state.summary} onChange={this.handleChange('summary')}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">Update Brick</Button>
          <Link to={`/brick/${brickId}/question`}><Button type="button" variant="contained" color="primary">Add Question</Button></Link>
        </form>
      </div>
    );
  }
}

export default EditBrickForm;
