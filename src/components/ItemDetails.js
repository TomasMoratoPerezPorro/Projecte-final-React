import React from 'react';
import MovieCredits from './MovieCredits';
import { FaClock, FaCalendarAlt, FaStar } from 'react-icons/fa';
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
                <div className="container-fluid">
                    <div className="row content">

                        <div className="col-sm-6 sidenav text-center">
                            <img src={imageUrl + posterPath} className="img-fluid" alt="imageFilm"></img>
                        </div>

                        <div className="col-sm-6">
                            <h1 id="toys" className="display-4 my-4 text-center text-muted">{moviesState.title}</h1>

                            <div className="d-flex p-3 bg-secondary text-white justify-content-around rounded-lg ">
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

                            <div className="m-3">
                                <p>{moviesState.overview}</p>
                            </div>

                            <div className="d-flex p-3 bg-secondary text-white justify-content-around rounded-lg ">
                                <MovieCredits movieId={moviesState.id}/>
                            </div>

                        </div>
                    </div>



                </div>
            );
        }
    }
}

export default ItemDetails