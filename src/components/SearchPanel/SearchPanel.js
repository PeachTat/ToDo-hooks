import React, { useState } from 'react';
import { Input, Button } from 'antd';
import s from './SearchPanel.module.scss'


const SearchPanel = ({ onClick, searchToDo, value }) => {


    return (
        <div className={s.row}>
            <Input
                placeholder="input search text"
                size="large"
                onChange={(event) => searchToDo(event)}
                value={value}
            />
            <Button className={s.Add} onClick={() => onClick(value)}>Add</Button>
        </div>

    )

};

export default SearchPanel;
