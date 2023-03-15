import React from 'react';
import './index.css';
import Button from '../button';


const ListItem = ({toDoName, remove}) => {
    return (
        <div className='item'>
            <div className='item_text'>
                {toDoName}
            </div>
            <Button
            name='remove'
            onClick={() => remove(toDoName)}
            customClass="item_btn"
            />
        </div>
    );
};

export default ListItem;