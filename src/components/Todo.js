import React from 'react';
import { Button, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export default function Todo({ onToggle, onDelete, todo }) {
    function onItemClick() {
        onToggle(todo.id);
    };

    function onDeleteBtnClick(e) {
        e.stopPropagation();
        onDelete(todo.id);
    };

    function getItemStyle(isDone) {
        return {
            cursor: 'pointer',
            backgroundColor: isDone ? 'green' : 'yellow',
        };
    };

    return (
        <TableRow style={getItemStyle(todo.isDone)} onClick={onItemClick}>
            <TableCell align="center" component="th" scope="row">
                {todo.title}
            </TableCell>
            <TableCell align="right">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={onDeleteBtnClick}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    )
}