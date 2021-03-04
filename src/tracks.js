import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, description, prize, sponsor) {
  return { name, description, prize, sponsor };
}

const rows = [
  createData("Most Innovative", "This award goes to the most innovative and entrepreneurial hack.", "$300 to the team", "The Conway Center for Innovation"),
  createData("Best Use of Data", "For the best use of data in visualizaton, modeling, or other related tasks", "Fujifilm Instax Camera", "MassMutual"),
  createData("Best Use of AWS", "This award is for the best use of Amazon Web Services in your project", "Amazon Echo"),
  createData("Best in Design Thinking", "For the best display of design thinking principles.", "Design and Crafting Kit with TDI Swag", "The Design Thinking Initiative"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="left"><b>Description</b></TableCell>
            <TableCell align="left"><b>Prize</b></TableCell>
            <TableCell align="left"><b>Sponsor</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.prize}</TableCell>
              <TableCell align="left">{row.sponsor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
