
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ToDoList from './components/ToDoList/ToDoList';
import uuid from 'uuid/dist/v4'

const App = () => {
    const [todos, setToDos] = useState([]);
    const [value, setValue] = useState('');

    const addNewToDo = (text) => {
        if (text === '') {
            return
        }
        const newToDo = {
            text: text,
            id: uuid(),
            liked: false
        }

        setToDos((prevState) => prevState.concat(newToDo))
    }


    useEffect(() => {
        let storageToDo = localStorage.getItem('todos');
        if (storageToDo) {
            storageToDo = JSON.parse(storageToDo)
        } else (
            storageToDo = []
        )
        setToDos(storageToDo)
    }, [])

    useEffect(() => {
        const str = JSON.stringify(todos)
        localStorage.setItem('todos', str)
    }, [todos])

    const onDeleted = (id) => {
        setToDos((prev) => prev.filter((el) => el.id !== id));
    }

    const onLiked = (id) => {
        const newToDos = todos.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    liked: !el.liked,
                }
            } else {
                return el
            }
        })
        setToDos(newToDos)
    }

    const searchToDo = (event) => {
        setValue(event.target.value)
    }

    return (
        <Switch>
            <Route render={() => (
                <>
                    <Container>
                        <SearchPanel onClick={addNewToDo} searchToDo={searchToDo} value={value} />
                        <ToDoList todos={todos} onDeleted={onDeleted} onLiked={onLiked} value={value} />
                    </Container>
                </>
            )} />
        </Switch>
    )
}

export default App;
