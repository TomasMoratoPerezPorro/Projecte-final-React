import React from 'react';




class MovieCredits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieCast: "",

        };

        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/movie/" + this.props.movieId + "/credits?api_key=fbcaaa47e4bdda5fd91da6cceac86b32")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    movieCast: json,
                    loading: false,

                });
            });
    }





    render() {
        const { movieCast, loading } = this.state;
        if (loading) {
            return <p>Loading...</p>;
        }
        else {
            return (

                <div>
                    <p>This is the cast</p>
                    

                </div>

            );

        }

    }
}

export default MovieCredits