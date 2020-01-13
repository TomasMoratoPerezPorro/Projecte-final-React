import React from 'react';
import MovieCredits from './MovieCredits';
import { FaClock, FaCalendarAlt, FaStar } from 'react-icons/fa';
import button_back from './button_back.png';
import { Link } from 'react-router-dom';
/* https://react-icons.netlify.com/#/icons/fa */
/* https://www.w3schools.com/bootstrap4/bootstrap_flex.asp */

class ItemDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            moviesState: [],
            loading: true,
            error: null,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    componentDidMount() {
        fetch(" https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "?api_key=fbcaaa47e4bdda5fd91da6cceac86b32")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    moviesState: json,
                    loading: false,
                });
            });
    }


    render() {
        const { moviesState, loading } = this.state;
        const imageUrl = "https://image.tmdb.org/t/p/w500/";
        const posterPath = moviesState.poster_path;
        if (loading) {
            return <p>Loading...</p>;
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                        </div>
                        <div className="col-sm-5">
                            <h1 id="toys" className="display-4 my-4">{moviesState.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7">
                            <img src={imageUrl + posterPath} className="borde_rodo  img-fluid" alt="imageFilm"></img>
                        </div>
                        <div className="col-sm-5">
                            <div className="d-flex info justify-content-around">
                                <div className="p-2 centrar">
                                    <FaClock size={30} className="mb-2 " />
                                    <p >{moviesState.runtime} min</p>
                                </div>
                                <div className="p-2 centrar">
                                    <FaCalendarAlt size={30} className="mb-2" />
                                    <p>{moviesState.release_date}</p>
                                </div>
                                <div className="p-2 centrar">
                                    <FaStar size={30} className="mb-2" />
                                    <p>{moviesState.vote_average} /10</p>
                                </div>
                            </div>
                            <p>{moviesState.overview}</p>
                            <div className="d-flex actors p-4 justify-content-around">
                                <MovieCredits movieId={moviesState.id} />
                            </div>
                        </div>
                    </div>
                    <div className="row back">
                        <Link to="/">
                            <img className="btn_back" src={button_back} alt=""></img>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default ItemDetails