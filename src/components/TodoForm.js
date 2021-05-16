import React from 'react';
import { Button, Container, Modal } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/actions';
import { Form, Formik } from 'formik';
import FormikTextField from '../common/components/form/FormikTextField';
import FormikButton from '../common/components/form/FormikButton';
import FormikSelect from '../common/components/form/FormikSelect';
import Grid from '@material-ui/core/Grid';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '500px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TodoForm({ todo, addTodo, toggleModal, modalOpened }) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    function onSubmit(todo) {
        addTodo(todo);
        toggleModal(modalOpened)
    }
    function onCancel() {
        toggleModal(modalOpened)
    }

    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Title is required';
        } else if (values.title.length > 255) {
            errors.title = 'Title is too long';
        }

        if (values.isDone.length === 0) {
            errors.isDone = 'Status is required';
        }

        return errors;
    };

    return (
        <Modal
            open={modalOpened}
            onClose={onCancel}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Container style={modalStyle} className={classes.paper}>
            <Formik
                initialValues={todo}
                enableReinitialize
                onSubmit={onSubmit}
                validate={validate}
            >
                <Form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormikTextField
                                name="title"
                                label="Title"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormikSelect
                                name="isDone"
                                label="Status"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        justify="flex-end"
                    >
                        <Grid item xs={12} md={6} align="right">
                            <Button
                                type="button"
                                variant="contained"
                                color="secondary"
                                onClick={onCancel}
                            >
                                Cancel
                            </Button>
                            <FormikButton
                                type="submit"
                                variant="contained"
                                color="primary"
                                startIcon={<SaveIcon />}
                            >
                                Save
                            </FormikButton>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
            </Container>
        </Modal>
    );
}

const mapStateToProps = () => {
    const todo = {
        title: '',
        isDone: ''
    };
    return { todo }
}

const mapDispatchToProps = {
        addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);