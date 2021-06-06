import React, { useEffect } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header/header';
import TopFilms from './Components/TopFilms/topFilms';
import FilmDetails from './Components/FilmDetails/filmDetails';
import Search from './Components/Search/search';
import { getGenres, getTopMovies } from './Redux/Actions/actions';
import Preloader from './Components/Preloader/preloader';

import './app.css';



const App = () => {

  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);

  useEffect(
    () => {
      dispatch(getTopMovies('https://api.themoviedb.org/3/movie/popular?api_key=fe2b789126975f247fd48c25cd192e83&language=en-US&page=1'));
      dispatch(getGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=fe2b789126975f247fd48c25cd192e83&language=en-US"));
    }, []
  )
  return (
    <div className={"app"}>
      <Switch>
        <Route path="/film-details/:id">
          <FilmDetails />
        </Route>
        <Route path="/">
          <div className={'left-side'}>
            <Header />
            <Search />
          </div>
          <div className="right-side">
            {isFetching ? <Preloader /> : null}
            <TopFilms />
          </div>
        </Route>
      </Switch>

    </div>
  );
}

export default connect()(App);