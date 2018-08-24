import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function Orders (props) {
  const {classes} = props;
  return (
  <div>
  <Paper className={classes.root}>
<Table className={classes.table}>
<TableHead>
<TableRow>
 <TableCell>№</TableCell>
 <TableCell>Products</TableCell>
 <TableCell>Total Price</TableCell>
</TableRow>
</TableHead>
<TableBody>
</TableBody>
</Table>
</Paper>  
</div>
)
}

export default withStyles(styles)(Orders);