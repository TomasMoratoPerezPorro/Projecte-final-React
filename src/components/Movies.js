import React from 'react';
import CardComponent from './CardComponent';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesState: [],
      loading: true,
      searchInputState: "a",
      error: null,

    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  //Comproba si hi ha cnavis als props que li passem desde el pare
  //Si hi ha canvis executa de nou el fetch
  componentDidUpdate(prevProps) {

    if ((this.props.flagSearchProp !== prevProps.flagSearchProp) || (this.props.flagGenreProps !== prevProps.flagGenreProps) || (this.props.genreValueProps !== prevProps.genreValueProps)) {
      //alert("PROPS HAS CHANGED");
      this.componentDidMount();
    }
  }

  //Dins el fetch hi ha una condició  per saber si s'ha realitzat alguna cerca o no (default)
  // aquest valor també es reb com a prop desde el pare (flagProp)
  componentDidMount() {
    if (this.props.flagSearchProp === false && this.props.flagGenreProps === false) {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=fbcaaa47e4bdda5fd91da6cceac86b32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            moviesState: json.results,
            loading: false,

          });
        });
    }
    if (this.props.flagSearchProp === true) {

      fetch("https://api.themoviedb.org/3/search/movie?api_key=fbcaaa47e4bdda5fd91da6cceac86b32&language=en-US&query=" + this.props.searchValueProps + "&page=1&include_adult=false")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            moviesState: json.results,
            loading: false,

          });
        });
    }
    if (this.props.flagGenreProps === true) {
      var idGenre = 0;
      console.log(idGenre);
      switch (this.props.genreValueProps) {
        case "Drama":
          idGenre = 18;
          console.log(idGenre);
          break;
        case "Comedies":
          idGenre = 35;
          break;
        case "Science Fiction":
          idGenre = 878;
          break;
        default:
          idGenre = 878;
          break;
      }
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=fbcaaa47e4bdda5fd91da6cceac86b32&with_genres=" + idGenre + "&primary_release_year=2019")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            moviesState: json.results,
            loading: false,

          });
        });

    }

    //.catch(error => this.setState({error, loading: false }));
  }

  render() {
    const {  loading } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    }
    else {
      return (
        <div>
          <div className="mainDiv"><h1 id="toys" className="display-4 my-4 text-center text-muted">Movies</h1></div>
          <div className="row">{this.state.moviesState.map((movie, index) => <CardComponent key={index} movieProps={movie} />)}</div>
        </div>
      );
    }
  }
}

export default Movies