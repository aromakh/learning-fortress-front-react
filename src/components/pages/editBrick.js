import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBrick, updateBrick } from '../../actions/brickActions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditBrickForm from '../bricks/editBrickForm';

class EditBrickPage extends Component {
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
    const brickId = props.match.params.brickId;
    this.props.fetchBrick(brickId);
  }

  render() {
    const brick = this.props.brick;
    if (Object.keys(brick).length === 0 && brick.constructor === Object) {
        return (<div className="list-container"></div>);
    }
    brick.pallet = '';
    const data = {brickId: this.props.match.params.brickId, brick};
    return <EditBrickForm props={data}></EditBrickForm>;
  }
}

const mapStateToProps = state => ({
  brick: state.bricks.item,
});

export default connect(mapStateToProps, { fetchBrick, updateBrick })(EditBrickPage);
