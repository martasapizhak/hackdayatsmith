import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(when, what, where) {
    return {when, what, where};
}

const rows = [
    createData("10 AM", 'Breakfast', "Carrol Room"),
    createData("11 AM", 'Openning', "Carrol Room"),
    createData("12 PM", 'Workshop', "Carrol Room"),
    createData("3 PM", 'Hacking', "Carrol Room"),
    createData("4 PM", 'Dance', "Carrol Room"),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Event</TableCell>
                        <TableCell align="right">Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.when}</TableCell>
                            <TableCell align="right">{row.what}</TableCell>
                            <TableCell align="right">{row.where}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}