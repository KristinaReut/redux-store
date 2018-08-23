import React from "react";

function Categories() {
  return (
    <div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        label="Categories"
        className={classes.textField}
        margin="normal"
      
      />
      <Button disabled={this.state.disabled} variant="contained" color="primary" className={classes.button} type="submit" >
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
          {
            categories.map((category, index) => {
              if (category.name.trim().length > 0) {
                return (
                  <CategoriesTableRow
                    deleteCategory={this.deleteCategory}
                    updateCategory={this.updateCategory}
                    index={index}
                    category={category}
                  />)
              }
              else { return (null) }
            })
          }

        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}

export default Categories;