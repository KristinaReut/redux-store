import React from 'react'
import { Route, Link } from 'react-router-dom'
import Categories from '../categories'
import Products from '../products'
import Orders from '../orders'
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



const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    minHeight: 1000,

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


function App(props) {
  const { classes } = props;
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
        <ListItem button component={props =>   <Link to="/"  {...props}/>}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText>Categories</ListItemText>
        </ListItem>
        <ListItem button component={props =>     <Link to="/products"  {...props}/>}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
        </ListItem>
        <ListItem button component={props =>     <Link to="/orders"  {...props}/>}> 
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Orders" />
        </ListItem>
        
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Route exact path="/" component={Categories} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={Orders} />
    </main>
  </div> )









}

export default withStyles(styles)(App);