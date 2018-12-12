import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchBricks } from '../../actions/brickActions';
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
    minWidth: 275,
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
});

class BricksPage extends Component {
  componentWillMount() {
    this.props.fetchBricks();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <List component="nav"
              subheader={<ListSubheader component="div">Bricks List Items</ListSubheader>}>
              {
                this.props.bricks.items.map((brick, index) => {
                  return <ListItem key={ index }>
                    <ListItemText primary={brick.title} secondary={brick.brief}/>
                    <ListItemSecondaryAction>
                    <Link to={`/brick/${brick.id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      </Link>
                    </ListItemSecondaryAction>
                  </ListItem>
                })
              }
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

BricksPage.propTypes = {
  fetchBricks: PropTypes.func.isRequired,
  bricks: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  bricks: state.bricks,
});

export default connect(mapStateToProps, { fetchBricks })(withStyles(styles)(BricksPage));
