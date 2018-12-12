import React, { Component } from 'react';

import CreateArrowComponentForm from './arrowComponent';
import CreateHorizontalShuffleForm from './horizontalShuffle';
import CreateLineHighlightingForm from './lineHighlighting';
import CreateMultipleChoiceForm from './multipleChoice';
import CreateOrderForm from './orderComponent';
import CreateShortAnswerForm from './shortAnswer';
import CreateSingleChoiceForm from './singleChoice';
import CreateSortForm from './sortComponent';
import CreateTextComponentForm from './textComponent';
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
    const {componentType} = this.props;
    console.log(this.props);
    if (componentType === 'Arrow') {
      return <CreateArrowComponentForm onComponentAdded={this.props.onComponentAdded}></CreateArrowComponentForm>
    } else if (componentType === 'HorizontalShuffle') {
      return <CreateHorizontalShuffleForm onComponentAdded={this.props.onComponentAdded}></CreateHorizontalShuffleForm>
    } else if (componentType === 'LineHighlighting') {
      return <CreateLineHighlightingForm onComponentAdded={this.props.onComponentAdded}></CreateLineHighlightingForm>
    } else if (componentType === 'MultipleChoice') {
      return <CreateMultipleChoiceForm onComponentAdded={this.props.onComponentAdded}></CreateMultipleChoiceForm>;
    } else if (componentType === 'Order') {
      return <CreateOrderForm onComponentAdded={this.props.onComponentAdded}></CreateOrderForm>;
    } else if (componentType === 'ShortAnswer') {
      return <CreateShortAnswerForm onComponentAdded={this.props.onComponentAdded}></CreateShortAnswerForm>;
    } else if (componentType === 'SingleChoice') {
      return <CreateSingleChoiceForm onComponentAdded={this.props.onComponentAdded}></CreateSingleChoiceForm>;
    } else if (componentType === 'Sort') {
      return <CreateSortForm onComponentAdded={this.props.onComponentAdded}></CreateSortForm>;
    } else if (componentType === 'Text') {
      return <CreateTextComponentForm onComponentAdded={this.props.onComponentAdded}></CreateTextComponentForm>;
    } else if (componentType === 'TextDropdowns') {
      return <CreateTextDropdownsForm onComponentAdded={this.props.onComponentAdded}></CreateTextDropdownsForm>
    } else if (componentType === 'TextHighlighting') {
      return <CreateTextHighlightingForm onComponentAdded={this.props.onComponentAdded}></CreateTextHighlightingForm>
    }
    return <p>You not selected component type</p>;
  }
}

export default CreateComponentForm;
