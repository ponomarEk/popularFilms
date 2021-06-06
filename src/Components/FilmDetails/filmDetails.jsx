import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCurrentFilm } from '../../Redux/Actions/actions';
import './filmDetails.css';

const FilmDetails = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const currFilm = useSelector(state => state.currFilm);
    useEffect(
        () => {
            dispatch(getCurrentFilm(`https://api.themoviedb.org/3/movie/${id}?api_key=fe2b789126975f247fd48c25cd192e83&language=en-US`));
        }, []
    )
    return (
        <>
            <div className={'curr-film '}>
                <h2>{currFilm?.title}</h2>
                <p>{currFilm?.overview}</p>
                <span>Popularity: {currFilm?.popularity}</span>
                <span>Budget: {currFilm?.budget} $</span>
                <span>Original language: {currFilm?.original_language}</span>
                <span>Original title: {currFilm?.original_title}</span>
                <span>Adult: {(currFilm?.adult) ? '18+' : '---'}</span>
            </div>
            <Link className={'link_back'} to='/'> Go back to the list </Link>
        </>
    )
}

export default FilmDetails;