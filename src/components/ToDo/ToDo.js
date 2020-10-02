import React from 'react';
import { List, Button } from 'antd';
import s from './ToDo.module.scss';
import cn from 'classnames';


const ToDo = ({ text, onDeleted, id, onLiked, liked }) => {

    return (
        <div className={s.row}>
            <List.Item className={s.block}>{text}</List.Item>
            <Button type="primary" className={s.Like} type="danger" onClick={() => onLiked(id)}>{liked === true ? 'disLike' : 'Like'}</Button>
            <Button type="primary" className={s.Delete} onClick={() => onDeleted(id)}>Delete</Button>
        </div>
    )
}

export default ToDo;
