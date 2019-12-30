import React from 'react';

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



    //Dins el fetch hi ha una condició  per saber si s'ha realitzat alguna cerca o no (default)
    // aquest valor també es reb com a prop desde el pare (flagProp)
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
                    <div className="mainDiv"><h1 id="toys" className="display-4 my-4 text-center text-muted">{moviesState.title}</h1></div>
                    {console.log(this.props.match)}
                    <div>
                        <img src={imageUrl + posterPath} className="card-img-top" alt="imageFilm"></img>
                    </div>

                </div>
            );
        }
    }
}

export default ItemDetails