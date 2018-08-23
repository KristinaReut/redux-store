import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

class Products extends React.Component {

render() {
  const { classes } = this.props;
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              E-commerce
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List component="nav">
            <ListItem button component={props => <Link to="/" {...props} />}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText>Categories</ListItemText>
            </ListItem>
            <ListItem button component={props => <Link to="/products" {...props} />}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItem>
            <ListItem button component={props => <Link to="/orders" {...props} />}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText>Orders</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </Router>
  );
}
}

export default withStyles(styles)(Products);