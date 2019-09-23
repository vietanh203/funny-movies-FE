import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from 'react-icons-kit';
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp';
import { thumbsDown } from 'react-icons-kit/fa/thumbsDown';
import axios from 'axios';
const opts = {
    height: '200',
    width: '300',
    playerVars: {
        autoplay: 0
    }
};
const Movie = props => (
    <div className="row">
        <div className="col-lg-6">
            <YouTube
                videoId={props.movie.url}
                opts={opts}
            />
        </div>
        <div className="col-lg-6">
            <h3>{props.movie.title}</h3>
            <h5>Shared by: {props.movie.shared_by}</h5>
            {props.movie.like} <Icon size={20} icon={thumbsUp} />
            {props.movie.dislike} <Icon size={20} icon={thumbsDown} />
            <h5>Description:</h5>
            <p>{props.movie.description}</p>
        </div>
    </div>
)
class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000')
            .then(response => {
                this.setState({ movies: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    movieList() {
        return this.state.movies.map(function (currentMovie, i) {
            return <Movie movie={currentMovie} key={i} />;
        })
    }
    render() {
        return (
            <Router>
                <div className="container">
                    {this.movieList()}
                </div>
            </Router>
        );
    }
}
export default MoviesList;  