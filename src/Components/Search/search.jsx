import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeInput } from '../../Redux/Actions/actions';
import './search.css';

const Search = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const changeValue = (e) => {
        setValue(e.target.value);
        dispatch(changeInput(e.target.value))
    }
    return (
        <div className={'search'}>
            <input type="text" placeholder="Search..." value={value} onChange={changeValue} />
        </div>
    )
}

export default Search;
