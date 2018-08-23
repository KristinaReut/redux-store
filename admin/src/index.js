import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import Link from "redux-first-router-link";
import Route from "redux-first-router-link";
import Switch from "redux-first-router-link";
import configureStore from "./store/configureStore";
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
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";


const store = configureStore();

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

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

class App extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  components  = {
    CATEGORIES: <Categories />,
    PRODUCTS: <Products />,
    ORDERS: <Orders />,
  };

  render() {
    const {classes} = this.props
    return (
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
            <ListItemText inset primary="Orders" />
          </ListItem>
          
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
        <Link to={{ type: "CATEGORIES" }}>
            Categories
          </Link>
          <Link to={{ type: "PRODUCTS" }}>
            Products
          </Link>
          <Link to={{ type: "ORDERS" }}>
            Orders
          </Link>
        </Switch>
      </main>
        {this.components[this.props.location.type]}
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

