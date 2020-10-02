import React, { useState } from 'react';
import ToDo from './../ToDo/ToDo';
import s from './ToDoList.module.scss'

const ToDoList = ({ todos, onDeleted, onLiked, value }) => {
    const newArr = value !== ''
        ? todos.filter(({ text }) => text.toLowerCase().includes(value.toLowerCase()))
        : todos

    return (
        <div className={s.list}>
            {
                newArr.map((el) => {
                    return <ToDo
                        key={el.id}
                        text={el.text}
                        onDeleted={onDeleted}
                        id={el.id}
                        onLiked={onLiked}
                        liked={el.liked}
                    />
                })
            }
        </div>
    )
}

export default ToDoList
