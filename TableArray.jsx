import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableArray = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>Dhiya</TableCell>
                    <TableCell>20</TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray