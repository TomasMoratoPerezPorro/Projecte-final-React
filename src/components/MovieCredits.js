import React from 'react';
import ActorComponent from './ActorComponent';



class MovieCredits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieCast: [],
            loadingCredits: true,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/movie/" + this.props.movieId + "/credits?api_key=fbcaaa47e4bdda5fd91da6cceac86b32")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    movieCast: json.cast,
                    loadingCredits: false,
                });
            });
    }


    render() {
        const {loadingCredits } = this.state;
        if (loadingCredits) {
            return <p>Loading...</p>;
        }
        else if(loadingCredits===false){
            return (

                <div>
                    <p>This is the cast</p>
                    <div className="row">{this.state.movieCast.map((actor, index) => <ActorComponent key={index} ActorProps={actor} />)}</div>
                </div>

            );

        }

    }
}

export default MovieCredits