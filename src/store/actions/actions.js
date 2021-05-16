import api from '../../api';
import { URL } from '../../constants';

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const ACTION_ADD_TODO = 'ACTION_SAVE_TODO';

export const fetchTodos = () => {
    return (dispatch) => {
        api.get(URL).then(({data}) => {
            dispatch({ 
                type: ACTION_SET_TODOS, 
                payload: data 
            })
        });
    }
};


export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        const state = getState();
        const todo = state.list.find((item) => item.id === id);
        const updatedTodo = { ...todo, isDone: !todo.isDone };
        api.put(URL + id, updatedTodo );
        dispatch({
            type: ACTION_TOGGLE_TODO,
            payload: updatedTodo
        });
    }
};


export const deleteTodo = (id) => {
    return (dispatch) => {
        api.delete(URL + id );
        dispatch({
            type: ACTION_DELETE_TODO,
            payload: id
        });
    }
};

export const addTodo = (todo) => {
    return (dispatch) => {
        api.post(URL, todo).then(({ data }) => {
            dispatch({
                type: ACTION_ADD_TODO,
                payload: data
            });
        });
    }
};
