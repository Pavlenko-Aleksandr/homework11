import { ACTION_DELETE_TODO, ACTION_SET_TODOS, ACTION_TOGGLE_TODO, ACTION_ADD_TODO } from '../actions/actions';

const INITIAL_STATE = {
    list: []
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_SET_TODOS:
            return {
                list: payload
            };
        case ACTION_DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };
        case ACTION_ADD_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    payload,
                ]
            };
        case ACTION_TOGGLE_TODO:
            return {
                ...state,
                list: state.list.map((item) => item.id !== payload.id ? item : { ...item, isDone: !item.isDone })
            };
        default:
            return state;
    }
}