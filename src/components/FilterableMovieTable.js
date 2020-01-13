import React from 'react';
import Search from './Search';
import Genre from './Genre.js';
import Movies from './Movies';
import Discover from './Discover';



class FilterableMovieTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTextState: "",
      flagSearch: false,
      genreState: "",
      flagGenre: false,
    };
    this.greetParent = this.greetParent.bind(this);
    this.greetParentGenre = this.greetParentGenre.bind(this);
    this.greetParentDiscover = this.greetParentDiscover.bind(this);


  }

  //Aquesta funció la pasem com a props al component child Search perque la pugui executar
  //Reb com a parametre el que es vol buscar
  //Canvia el state de la propia clase (parent) actualitzant el que es vol buscar
  greetParent(childName) {
    //alert("This is the filterTextState from:  " + childName);
    this.setState({
      filterTextState: childName,
      flagSearch: true,
      flagGenre: false,
    });

  }

  greetParentGenre(genre) {
    //alert("This is the filterTextState from:  " + childName);
    this.setState({
      genreState: genre,
      flagSearch: false,
      flagGenre: true,
    });

  }

  greetParentDiscover(){
    this.setState({
      flagSearch: false,
      flagGenre:false,
    })
  }



  render() {
    return (
      <div>
        {/* we pass a reference of the method as a prop to the child */}
        <div className="row justify-content-around">
          <Search greetHandler={this.greetParent} />
          <Genre greetHandlerGenre={this.greetParentGenre} />
          <Discover greetParentDiscover={this.greetParentDiscover}/>
        </div>
        <Movies searchValueProps={this.state.filterTextState} flagSearchProp={this.state.flagSearch} genreValueProps={this.state.genreState} flagGenreProps={this.state.flagGenre} />
      </div>

    );
  }
}

export default FilterableMovieTable