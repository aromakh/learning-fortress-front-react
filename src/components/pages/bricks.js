import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBricks } from '../../actions/brickActions';

class BricksPage extends Component {
  componentWillMount() {
    this.props.fetchBricks();
  }

  render() {
    return (
      <div className="App">
        Bricks
        {
          this.props.bricks.items.map(function(brick, index) {
            return <li key={ index }>{brick.title}</li>;
          })
         }
      </div>
    );
  }
}

BricksPage.propTypes = {
  fetchBricks: PropTypes.func.isRequired,
  bricks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  bricks: state.bricks
});

export default connect(mapStateToProps, { fetchBricks })(BricksPage);
