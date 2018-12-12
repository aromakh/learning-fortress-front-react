import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBrick } from '../../actions/brickActions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateBrickPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subject: '',
      brief: '',
      pallet: '',
      prep: '',
      summary: ''
    }
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();

    const brick = {
      title: this.state.title,
      subject: this.state.subject,
      brief: this.state.brief,
      pallet: this.state.pallet,
      prep: this.state.prep,
      summary: this.state.summary
    }
    this.props.createBrick(brick);
  }

  render() {
    return (
      <div className="list-container">
        <p>Creation Brick</p>
        <form onSubmit={this.handleSubmit.bind(this)} noValidate autoComplete="off">
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
          <Button type="submit" variant="contained" color="primary">
            Create Brick
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createBrick })(CreateBrickPage);
