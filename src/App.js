import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

/*
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Old Boy",
  "Star Wars"
]

const movieImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXam6ak80mnJcrmAZMBBH2YZgkv4OBkdfGTG-akZPghbQ6LqcS&usqp=CAU",
  "https://i.pinimg.com/originals/56/bd/4f/56bd4f5a31ec7ed89b45feb34bc15ccd.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPqo2_sxcdHrjnfYmvKUQJVlzST1t3M_zfy3WWsC7T6knUbZTe&usqp=CAU",
  "https://lh3.googleusercontent.com/proxy/YHpxSvdgdVLcgge4nC_fbxYh2YmMrTid0ncv2075faDxkweeTeu1KKDElvrPT2bKk7dWnAETPm11bp80yDnJmv7q_pvrVNhYXG88Ur0mw6CHx9fBpiMR7Q"
]
*/
/*
const movies = [
  {
    // id: 1,
    title: "Matrix",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXam6ak80mnJcrmAZMBBH2YZgkv4OBkdfGTG-akZPghbQ6LqcS&usqp=CAU"
  },
  {
    // id: 2,
    title: "Full Metal Jacket",
    poster: "https://i.pinimg.com/originals/56/bd/4f/56bd4f5a31ec7ed89b45feb34bc15ccd.jpg"
  },
  {
    // id: 3,
    title: "Old Boy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPqo2_sxcdHrjnfYmvKUQJVlzST1t3M_zfy3WWsC7T6knUbZTe&usqp=CAU"
  },
  {
    // id: 4,
    title: "Star Wars",
    poster: "https://lh3.googleusercontent.com/proxy/YHpxSvdgdVLcgge4nC_fbxYh2YmMrTid0ncv2075faDxkweeTeu1KKDElvrPT2bKk7dWnAETPm11bp80yDnJmv7q_pvrVNhYXG88Ur0mw6CHx9fBpiMR7Q"
  }
]
*/

//function App() {
class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update :

  // eslint-disable-next-line no-undef
  state = {};

  componentWillMount() {
    //console.log("componentWillMount() has been called")
  }

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies: movies,
    });
  };

  _callApi = () => {
    // console.log(fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating'))
    return fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=download_count"
    )
      .then((poto) => poto.json())
      .then((json) => json.data.movies)
      .catch((err) => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.large_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  render() {
    //console.log("render() has been called")
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
        {/* 
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
        */}
        {/*this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })*/}
      </div>
    );
  }
}

export default App;
