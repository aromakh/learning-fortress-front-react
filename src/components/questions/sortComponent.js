import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


class CreateSortForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        categories: [],
        choices: {},
        reveals: {}
      },
      newCategory: '',
      newChoice: {text: '', category: 0, reveal: ''},
      name: 'Sort'
    };
  }

  onDataChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  onNewChoiceChange = name => event => {
    const {newChoice} = this.state;
    newChoice[name] = event.target.value;
    this.setState({newChoice});
  }

  addCategory() {
    const {newCategory} = this.state;
    const {data} = this.state;
    data.categories.push(newCategory);
    this.setState({newCategory: ''});
    this.setState({data});
    this.sendToParent(data);
  }

  addChoice() {
    const {newChoice} = this.state;
    const {data} = this.state;
    data.choices[newChoice.text] = newChoice.category;
    data.reveals[newChoice.text] = newChoice.reveal;
    this.setState({newCategory: ''});
    this.setState({data});
    this.sendToParent(data);
  }

  sendToParent(data) {
    const componentData = { data: data, name: this.state.name };
    this.props.onQuestionDataChanged(componentData);
  }

  render() {
    return (
      <div>
        <p>Categories</p>
        {
          this.state.data.categories.map((category, index) => {
            return <p key={index}>{category}</p>;
          })
        }
        <Divider />
        <p>New Category</p>
        <TextField
          label="Category" margin="normal" variant="outlined" type="text"
          value={this.state.newCategory} onChange={this.onDataChange('newCategory')}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addCategory.bind(this)} color="primary">Add Category</Button>
        <br />
        <Divider />
        <p>Choices</p>
        {
          Object.keys(this.state.data.choices).map((choice, index) => {
            return <p key={index}>Choice {index + 1}: {choice} | category: {this.state.data.categories[this.state.data.choices[choice]]} | reveal: {this.state.data.reveals[choice]}</p>;
          })
        }
        <Divider />
        <p>New Choice</p>
        <TextField
          label="Category number" margin="normal" variant="outlined" type="number"
          value={this.state.newChoice.category} onChange={this.onNewChoiceChange('category')}
        />
        <br />
        <TextField
          label="Text" margin="normal" variant="outlined" type="text"
          value={this.state.newChoice.text} onChange={this.onNewChoiceChange('text')}
        />
        <br />
        <TextField
          label="Reveal" margin="normal" variant="outlined" type="text"
          value={this.state.newChoice.reveal} onChange={this.onNewChoiceChange('reveal')}
        />
        <br />
        <Button type="button" variant="contained" onClick={this.addChoice.bind(this)} color="primary">Add Choice</Button>
      </div>
    );
  }
}

export default CreateSortForm;
