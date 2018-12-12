import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import { createBrick } from '../../actions/brickActions';

import CreateComponentForm from '../components/createComponentForm';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    margin: 20,
    minWidth: 400,
    maxWidth: 600
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  select: {
    minWidth: 200,
    marginBottom: 10
  }
});

class CreateQuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [],
      componentTypes: [
        'Arrow',
        'HorizontalShuffle',
        'LineHighlighting',
        'MultipleChoice',
        'Order',
        'ShortAnswer',
        'SingleChoice',
        'Sort',
        'Text',
        'TextDropdowns',
        'TextHighlighting'
      ],
      newComponentType: '',
      number: 0
    }
  }

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  }

  handleNewComponentTypeChange = event => {
    this.setState({ newComponentType: event.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  addComponent(newComponent) {
    this.setState(prevState => ({
      components: [...prevState.components, newComponent]
    }))
    console.log('add component', newComponent );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <p>Creation Question</p>
            <TextField
              label="Number" margin="normal" variant="outlined"
              value={this.state.number} onChange={this.handleNumberChange}
            />
          </CardContent>
          <Divider light component="div" />
          <CardContent>
            <FormControl>
              Components
            </FormControl>
            <br />
            {
              this.state.components.map((component, index) => {
                return <p key={index}>{index + 1} {component.name}</p>;
              })
            }
          </CardContent>
          <Divider light component="div" />
          <CardContent>
            <p>New Component:</p>
            <br />
            <FormControl>
              <InputLabel shrink htmlFor="question-type-label-placeholder">New Component Type</InputLabel>
              <Select
                className={classes.select}
                value={this.state.newComponentType}
                onChange={this.handleNewComponentTypeChange}
                input={<Input name="componentType" id="component-type-label-placeholder" />}
                displayEmpty
              >
              {
                this.state.componentTypes.map((componentType, index) => {
                  return <MenuItem key={index} value={componentType}>{componentType}</MenuItem>;
                })
              }
              </Select>
            </FormControl>
            <br />
            <CreateComponentForm componentType={this.state.newComponentType} onComponentAdded={this.addComponent.bind(this)}></CreateComponentForm>
          </CardContent>
          <Divider light component="div" />
          <CardContent>
            <Button type="submit" variant="contained" color="primary">
              Create Question
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

CreateQuestionPage.propTypes = {
};

export default connect(null, { createBrick })(withStyles(styles)(CreateQuestionPage));