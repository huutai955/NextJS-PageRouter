import * as React from 'react';
import { Table as TableMUI } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
type Props = {
    data: any
}


function createData(
    email: string,
    firstName: number,
    lastName: number,
) {
    return { email, firstName, lastName };
}



export default function Table({ data }: Props) {
    const rows = data.map((item: any) => {
        return createData(item.email, item.firstName, item.lastName)
    })
    return (
        <TableContainer  component={Paper} sx={{
            height: 400
        }}>
            <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Name&nbsp;(g)</TableCell>
                        <TableCell align="right">Last Name&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any, index: number) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.email}
                            </TableCell>
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableMUI>
        </TableContainer>
    );
}