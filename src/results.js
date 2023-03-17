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

function createData(name, link, notes) {
  return { name, link, notes };
}

const rows = [
  createData("Lumeni", "https://www.youtube.com/watch?v=-XyEWLm3d_w"),
  createData("Baby Name Map", "https://www.youtube.com/watch?v=p_06qWaJN2M"),
  createData("Cars for Hack", "https://github.com/Swaha294/HackSmith"),
  createData("MaskedUp", "https://youtu.be/cZJerRTiVfI", "Best Use of Data"),
  createData("(re)cyclescan", "https://www.youtube.com/watch?v=IF11fbUw_68"),
  createData("SafeTravels", "https://youtu.be/DNxtxZ3mH4E"),
  createData("Zenith", "https://youtu.be/ldUU9PP9ux0"),
  createData("The Unconventional Knitting Pattern Generator", "https://youtu.be/FUJfPbtPJeU?t=1", "Best in Design: 1st Place"),
  createData("Environmental Header", "https://youtu.be/7V8L1mhxthE", "Best in Design: Runner up"),
  createData("Eat You Way Out of COVID-19", "https://www.youtube.com/watch?v=ZXjBvEdu7P4"),
  createData("Breakdown of Boston's Health Inspections ", "https://rpubs.com/veebz/746129"),
  createData("Fighting COVID in America", "https://youtu.be/YH1XJzbkq7s"),
  createData("fridge poetry", "https://youtu.be/ldUU9PP9ux0", "Best in Innovation/Best in Design: 2nd Place"),
  createData("Geolife", "https://youtu.be/16KT3j9CFAk", "Best Use of AWS"),
  createData("StonksART", "https://youtu.be/5DwZyEuxL7E"),

];


export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="left"><b>Notes</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <a href={row.link}>{row.name}</a>
              </TableCell>
              <TableCell align="left">{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
