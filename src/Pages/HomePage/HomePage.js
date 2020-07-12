import React, { Component } from 'react';
import * as fetchFilms from '../../services/fetchFilms';
import FilmList from '../FilmList/FilmList';
import Styles from './HomePage.module.css';

export default class HomePage extends Component {
  state = {
    films: [],
    errorMessage: null,
  };

  componentDidMount() {
    fetchFilms
      .getPopularFilms()
      .then(films => this.setState({ films: [...films] }))
      .catch(error =>
        this.setState({
          errorMessage: error.response.data.status_message,
        })
      )
  }

  render() {
    const { films } = this.state;
    return (
      <section className="container">
        <h1 className={Styles.title}>Popular Movies</h1>
        <FilmList films={films} />
      </section>
    );
  }
}