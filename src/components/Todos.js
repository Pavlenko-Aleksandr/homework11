import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, toggleTodo } from '../store/actions/actions';
import Todo from './Todo';
import { Container, Paper, Table, TableBody, TableContainer, Button } from '@material-ui/core';

function Todos({ list, fetchTodos, deleteTodo, toggleTodo, toggleModal, modalOpened }) {
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);
    

    return (
        <Container maxWidth="xl">
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableBody>
                        {list.map((todo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                onToggle={toggleTodo}
                                onDelete={deleteTodo}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="secondary" onClick={() => toggleModal(modalOpened)}>ADD</Button>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {list: state.list}
}


const mapDispatchToProps =  {
    deleteTodo,
    toggleTodo,
    fetchTodos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);