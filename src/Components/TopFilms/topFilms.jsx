import React from 'react';
import { useSelector } from 'react-redux';
import Film from '../Film/film';
import './topFilms.css';

const TopFilms = () => {
    const films = useSelector(state => state.films);
    const input = useSelector(state => state.input);
    const filtered = films.filter(curr => {
        if (input !== '') return curr.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;
        else return curr;
    });
    return (
        <div className={'top-films'}>
            {(filtered.length < 1 && films.length > 0)
                ? <h2>No results!</h2>
                : filtered.map(curr => <Film key={curr.id} info={curr} />)}
        </div>
    )
}

export default TopFilms;