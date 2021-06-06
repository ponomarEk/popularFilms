import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './film.css'

const Film = (props) => {
    const { info } = props;
    const genres = useSelector(state => state.genres);
    return (
        <div className='film-block' >
            <Link to={'/film-details/' + info.id} className={'link'}> <h3>{info.title}</h3> </Link>

            <div className={'genres'}>
                <u><b>Genres:</b></u>
                {genres.map(curr => info.genre_ids.includes(curr.id) ? <span key={curr.id}> {curr.name} </span> : null)}
            </div>
            <span><u><b>Release:</b></u> <span className={'release'}>{info.release_date}</span></span>
        </div>
    )
}

export default Film;