import React from "react";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 110,
  },
  menu: {
    width: 200,
  },
  input: {
    display: 'none',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  button: {
 
    width: 145,
    height: 30,
    marginTop : 27
  },
});

const  Categories = () => {
    const {classes} = this.props
  return (
    <div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        label="Categories"
        className={classes.textField}
        margin="normal"
      />
      <Button variant="contained" color="primary" className={classes.button} type="submit" >
        Add Category
     </Button>
    </form>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Category</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}

Categories.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Categories);