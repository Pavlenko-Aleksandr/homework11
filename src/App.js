import React, { useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function App() {

    const [modalOpened, setModalOpened] = useState(false);
    const toggleModal = () => setModalOpened(!modalOpened);
    return(
        <Provider store={store}>
            <Router>
                <TodoForm 
                    modalOpened={modalOpened}
                    toggleModal={toggleModal}
                />
                <Switch>
                    <div className="main">
                        <Route path="/todos" exact>
                            <Todos
                                toggleModal={toggleModal}
                                modalOpened={modalOpened}
                            />
                        </Route>
                        <Route path="*" exact>
                            <Redirect to="/todos" />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </Provider>
    ) 
}