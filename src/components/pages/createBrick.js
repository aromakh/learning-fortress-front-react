import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class CreateBrick extends Component {
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
    console.log('create brick')
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
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
            label="Pallet" margin="normal" variant="outlined"
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

export default CreateBrick;
