import React, { Component } from 'react';

import CreateArrowComponentForm from './arrowComponent';
import CreateHorizontalShuffleForm from './horizontalShuffle';
import CreateLineHighlightingForm from './lineHighlighting';
import CreateMultipleChoiceForm from './multipleChoice';
import CreateOrderForm from './orderComponent';
import CreateShortAnswerForm from './shortAnswer';
import CreateSingleChoiceForm from './singleChoice';
import CreateSortForm from './sortComponent';
import CreateTextDropdownsForm from './textDropdowns';
import CreateTextHighlightingForm from './textHighlighting';

class CreateComponentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleChange = name => event => {
    this.props.brick[name] = event.target.value;
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  render() {
    const {questionType} = this.props;


    if (questionType === 'Arrow') {
      return <CreateArrowComponentForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateArrowComponentForm>
    } else if (questionType === 'HorizontalShuffle') {
      return <CreateHorizontalShuffleForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateHorizontalShuffleForm>
    } else if (questionType === 'LineHighlighting') {
      return <CreateLineHighlightingForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateLineHighlightingForm>
    } else if (questionType === 'MultipleChoice') {
      return <CreateMultipleChoiceForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateMultipleChoiceForm>;
    } else if (questionType === 'Order') {
      return <CreateOrderForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateOrderForm>;
    } else if (questionType === 'ShortAnswer') {
      return <CreateShortAnswerForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateShortAnswerForm>;
    } else if (questionType === 'SingleChoice') {
      return <CreateSingleChoiceForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateSingleChoiceForm>;
    } else if (questionType === 'Sort') {
      return <CreateSortForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateSortForm>;
    } else if (questionType === 'TextDropdowns') {
      return <CreateTextDropdownsForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateTextDropdownsForm>
    } else if (questionType === 'TextHighlighting') {
      return <CreateTextHighlightingForm onQuestionDataChanged={this.props.onQuestionDataChanged}></CreateTextHighlightingForm>
    }
    return <p>You not selected component type</p>;
  }
}

export default CreateComponentForm;
