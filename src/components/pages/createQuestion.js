import React, { Component } from 'react';
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

import { createQuestion } from '../../actions/questionActions';

import CreateComponentForm from '../questions/createComponentForm';


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
      textComponent: this.getTextComponent(''),
      mainComponent: { data: {}, name: '' },
      questionTypes: [
        'Arrow',
        'HorizontalShuffle',
        'LineHighlighting',
        'MultipleChoice',
        'Order',
        'ShortAnswer',
        'SingleChoice',
        'Sort',
        'TextDropdowns',
        'TextHighlighting'
      ],
      questionId: '',
      newQuestionType: '',
      number: 0
    }
  }

  getTextComponent(text) {
    return { data: {text}, name: 'Text'};
  }

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  }

  handleQuestionIdChange = event => {
    this.setState({ questionId: event.target.value });
  }

  handleQuestionTypeChange = event => {
    this.setState({ newQuestionType: event.target.value });
  }

  handleTextChange = event => {
    const textComponent = this.getTextComponent(event.target.value);
    this.setState({ textComponent });
  }

  handleSubmit (e) {
    const {brickId} = this.props.match.params;
    const {questionId} = this.state;

    const question = {
      components: [this.state.textComponent, this.state.mainComponent],
      number: this.state.number
    };
 
    console.log(question);
    this.props.createQuestion(brickId, questionId, question).then(res => {});
  }

  onQuestionDataChanged(mainComponent) {
    this.setState({mainComponent});
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <p>Creation Question</p>
            <TextField
              label="Id" margin="normal" variant="outlined"
              value={this.state.questionId} onChange={this.handleQuestionIdChange}
            />
            <TextField
              label="Number" margin="normal" variant="outlined" type="number"
              value={this.state.number} onChange={this.handleNumberChange}
            />
            <br/>
            <TextField
              label="Text" margin="normal" variant="outlined" type="text"
              value={this.state.textComponent.data.text} onChange={this.handleTextChange}
            />
          </CardContent>
          <Divider light component="div" />
          <CardContent>
            <FormControl>
              <InputLabel shrink htmlFor="question-type-label-placeholder">Question Type</InputLabel>
              <Select
                className={classes.select}
                value={this.state.newQuestionType}
                onChange={this.handleQuestionTypeChange}
                input={<Input name="questionType" id="question-type-label-placeholder" />}
                displayEmpty
              >
              {
                this.state.questionTypes.map((questionType, index) => {
                  return <MenuItem key={index} value={questionType}>{questionType}</MenuItem>;
                })
              }
              </Select>
            </FormControl>
            <br />
            <CreateComponentForm questionType={this.state.newQuestionType} onQuestionDataChanged={this.onQuestionDataChanged.bind(this)}></CreateComponentForm>
          </CardContent>
          <Divider light component="div" />
          <CardContent>
            <Button type="submit" variant="contained" onClick={this.handleSubmit.bind(this)} color="primary">
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

export default connect(null, { createQuestion })(withStyles(styles)(CreateQuestionPage));